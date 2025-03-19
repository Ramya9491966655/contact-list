import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = ({ contacts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Contacts</h2>
      <input
        type="text"
        placeholder="Search by name, phone, or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>
              {contact.name} - {contact.phone}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
