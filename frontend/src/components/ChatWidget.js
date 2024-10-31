import React, { useState } from 'react';
import './ChatWidget.css'; // Ensure to create this CSS file for styling

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      message: event.target[2].value,
    };

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAlertMessage('Form submitted successfully!');
        setIsAlertVisible(true);
        setTimeout(() => setIsAlertVisible(false), 3000); // Hide alert after 3 seconds
        setIsOpen(false);
      } else {
        setAlertMessage('Failed to send message. Please try again.');
        setIsAlertVisible(true);
        setTimeout(() => setIsAlertVisible(false), 3000);
      }
    } catch (error) {
      setAlertMessage('Error: ' + error.message);
      setIsAlertVisible(true);
      setTimeout(() => setIsAlertVisible(false), 3000);
    }
  };

  return (
    <div>
      <div className={`chat-widget ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
        💬
      </div>

      {isOpen && (
        <div className={`chat-modal ${isOpen ? 'open' : ''}`}>
          <div className="modal-content">
            <button className="close" onClick={toggleChat}>&times;</button>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}

      {isAlertVisible && (
        <div className="alert-message">
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
