import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Resume from './components/ResumeSection';
import ProjectInfo from './pages/ProjectInfo';
import ChatWidget from './components/ChatWidget'; // Adjust the import path as needed
import Loading from './components/Loading';
import PageTransition from './components/PageTransition';
import ScrollDownArrow from './components/ScrollDownArrow'; // Import the new component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={
            <>
              <section id="home">
                <Home />
                <ScrollDownArrow /> {/* Add the arrow component here */}
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="about">
                <About />
              </section>
              <Footer />
              <ChatWidget />
            </>
          } />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects/:id" element={<ProjectInfo />} />
        </Routes>
      </PageTransition>
    </Router>
  );
};

export default App;
