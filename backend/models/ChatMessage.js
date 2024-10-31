// models/ChatMessage.js
class ChatMessage {
    constructor(name, email, message) {
      this.name = name;
      this.email = email;
      this.message = message;
      this.createdAt = new Date();
    }
  }
  
  module.exports = ChatMessage;
  