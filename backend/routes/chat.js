const express = require('express');
const router = express.Router();
const db = require('../config/db');
const ChatMessage = require('../models/ChatMessage');

// Route to get all chat messages
router.get('/', async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM messages ORDER BY createdAt DESC');
    res.json(results);
  } catch (err) {
    console.error('Error fetching chat messages:', err);
    res.status(500).json({ error: err.message });
  }
});

// Route to post a new chat message
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  const chatMessage = new ChatMessage(name, email, message);

  try {
    await db.query('INSERT INTO messages SET ?', chatMessage);
    res.status(201).json({ message: 'Chat message sent successfully!' });
  } catch (err) {
    console.error('Error saving chat message:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
