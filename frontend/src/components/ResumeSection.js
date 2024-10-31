// components/ResumeSection.js
import React from 'react';
import ChatWidget from './ChatWidget'; // Import ChatWidget
import Footer from './Footer'; // Import Footer

const ResumeSection = () => {
    // Path to the resume files in the assets folder
    const resumePDF = `${process.env.PUBLIC_URL}/assets/resume.pdf`;
    const resumeDOCX = `${process.env.PUBLIC_URL}/assets/resume.docx`;

    // Function to handle PDF download
    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.setAttribute('download', 'resume.pdf'); // You can set the desired filename here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Cleanup
    };

    // Function to handle DOCX download
    const downloadDOCX = () => {
        const link = document.createElement('a');
        link.href = resumeDOCX;
        link.setAttribute('download', 'resume.docx'); // You can set the desired filename here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Cleanup
    };

    return (
        <section id="resume" className="resume-section">
            <div className="container">
                <h2 className="section-title">Resume</h2>

                <div className="resume-buttons">
                    <button className="download-button" onClick={downloadPDF}>
                        Download PDF
                    </button>
                    <button className="download-button" onClick={downloadDOCX}>
                        Download .docx
                    </button>
                </div>

                <h2 className="section-title">Professional Experience</h2>
                <div className="experience-list">
                    <div className="experience-item">
                        <h3>Let’s Grow More – Web Developer</h3>
                        <p>Mar 2023 - Apr 2023</p>
                        <ul>
                            <li>Successfully completed four distinct projects, showcasing expertise in web development technologies.</li>
                            <li>Built a To-Do List Application using HTML, CSS, and JavaScript.</li>
                            <li>Designed a responsive Registration Form with data validation.</li>
                            <li>Developed a Calculator Application with core mathematical operations.</li>
                            <li>Created a web application using React.js and Bootstrap for a Travel Booking Platform.</li>
                        </ul>
                    </div>
                </div>

                <h2 className="section-title">Education</h2>
                <div className="education-list">
                    <div className="education-item">
                        <h3>B.E. in Computer Engineering</h3>
                        <p>Ajeenkya DY Patil School of Engineering | 2020 – 2024 | CGPA: 7.30/10</p>
                    </div>
                    <div className="education-item">
                        <h3>H.S.C. in Science</h3>
                        <p>SSPM Day School & Junior College | 2018 – 2020 | Percentage: 58.77%</p>
                    </div>
                </div>

                <h2 className="section-title">Skills / Key Expertise</h2>
                <ul className="expertise-list">
                    <li>Programming Languages: Java, JavaScript, Python</li>
                    <li>Frameworks & Libraries: Node.js, SpringBoot, React.js, Express.js</li>
                    <li>Databases: MySQL, MongoDB</li>
                    <li>Tools: Git, Maven, Docker, Visual Studio</li>
                    <li>Development Methodologies: Agile, SDLC</li>
                    <li>Key Strengths: Data Structures, Algorithms, Problem Solving</li>
                </ul>

                <div className="resume-buttons">
                    <button className="download-button" onClick={downloadPDF}>
                        Download PDF
                    </button>
                    <button className="download-button" onClick={downloadDOCX}>
                        Download .docx
                    </button>
                </div>
            </div>
            <ChatWidget /> {/* Add ChatWidget here */}
            <Footer /> {/* Add Footer here */}
        </section>
    );
};

export default ResumeSection;
