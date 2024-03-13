// ContactList.js
import React, { useState } from 'react';
import './ChatDashboard.css';

import DP1 from "../assets/pp1.png";
import DP2 from "../assets/pp2.png";
import DP3 from "../assets/pp3.jpeg";
import DP4 from "../assets/pp4.jpeg";


// Dummy contacts data
const contactsData = [
  { id: 1, name: 'John Doe', dphoto: DP1, status:"Hallow" },
  { id: 2, name: 'Jane Doe', dphoto: DP2, status:"Hi" },
  { id: 3, name: 'Alice Smith', dphoto: DP3, status:"Good Morning" },
  { id: 4, name: 'Bob Johnson', dphoto: DP4, status:"Where are you" },
  // Add more contacts as needed
];

const ContactList = ({ onContactClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredContacts = contactsData.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="contact-list">
      <h2>Chat</h2>
      <input
        class="form-control sw-50"
        type="text"
        placeholder="Search contacts"
        value={searchQuery}
        onChange={handleSearchChange}
      />

        <div class="row row-top">
          <div class="col-sm">
            Broadcast Lists
          </div>
          <div class="col-sm col-right">
            New Group
          </div>
        </div>
      
      <ul style={{ display: "block" }}>
        {filteredContacts.map(contact => (
          <li key={contact.id} onClick={() => onContactClick(contact)}>
            {/* {contact.name} */}
            <div style={{ display: "flex" }}>
              {/* <div className="contact-avatar">
                <img src={contact.dphoto} alt={contact.name} />
              </div> */}
              <div className="contact-details">
                <p className='con-name'><img src={contact.dphoto} alt={contact.name} /> {contact.name}</p>
                {/* <p>{contact.status}</p> */}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="bottom-bar">
        <button className="btn">Update Status</button>
        <button className="btn">Call</button>
        <button className="btn">Settings</button>
        <button className="btn">Chat</button>
      </div>

    </div>
  );
};

export default ContactList;
