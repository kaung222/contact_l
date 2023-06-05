import React, { useState } from 'react';

const Contact = ({ contact, selectedContacts, toggleContact }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isSelected = selectedContacts.includes(contact.id);

  const handleContactClick = () => {
    toggleContact(contact.id);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`contact ${isSelected ? 'selected' : ''}`}
      onClick={handleContactClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{contact.name}</span>
      <span>{contact.email}</span>
      {isHovered && (
        <div className="actions">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </div>
  );
};


