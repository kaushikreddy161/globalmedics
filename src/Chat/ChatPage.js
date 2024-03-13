// ChatPage.js
import React from 'react';
import ChatUI from './ChatUI'; // Assuming you have a ChatUI component
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

const ChatPage = ({ contact }) => {
  // Dummy messages data
  const messages = [
    { text: 'Hello!', sender: 'user', timestamp: '10:00 AM' },
    { text: 'Hi there!', sender: 'other', timestamp: '10:01 AM' },
    { text: 'How are you?', sender: 'user', timestamp: '10:02 AM' },
    { text: 'I\'m doing great, thanks!', sender: 'other', timestamp: '10:03 AM' },
    // Add more messages as needed
  ];

  const navigate = useNavigate();

  const onBack = () => {
    const path = `/chatDashboard`;
    navigate(path);
  };


  return (
    <div className="chat-page">
      <div className="chat-header">
        <ArrowBackIosIcon
          onClick={onBack}
          style={{
            marginTop: "0rem",
            cursor: "pointer",
            marginBottom: "0rem",
          }}
        />
        <h2>Chat with {contact.name}</h2>
        {/* <button onClick={handleBackClick}>Back</button> */}
      </div>
      <ChatUI messages={messages} />
    </div>
  );
};

export default ChatPage;
