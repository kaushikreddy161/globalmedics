// App.js
import React, { useState } from 'react';
import ContactList from './ContactList';
import ChatPage from './ChatPage';
import './ChatDashboard.css'; // Import CSS file for styling
// import  contactsData  from './contactsData'; // Import contacts data

function ChatDashboard() {
  const [currentContact, setCurrentContact] = useState(null);

  const handleContactClick = (contact) => {
    setCurrentContact(contact);
  };



  return (
    <div className="app">
      {!currentContact && <ContactList onContactClick={handleContactClick} />}
      {currentContact && <ChatPage contact={currentContact} />}
    </div>
  );
}

export default ChatDashboard;
