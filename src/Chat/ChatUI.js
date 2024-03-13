// ChatUI.js
import React from 'react';

const ChatUI = ({ messages }) => {
  return (
    <div className="chat-ui">
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'user' ? 'user' : 'other'}`}>
            <p>{message.text}</p>
            <span className="timestamp">{message.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatUI;
