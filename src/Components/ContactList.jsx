import React from 'react';
import { Link } from 'react-router-dom';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>
              {contact.name} - {contact.phone}
            </Link>
            
            {/* Add Edit button */}
            <Link to={`/contacts/edit/${contact.id}`}>
              <button>Edit</button>
            </Link>
            
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/contacts/add">Add New Contact</Link>
    </div>
  );
};

export default ContactList;
