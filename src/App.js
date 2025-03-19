
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import ContactList from './Components/ContactList';
import ContactDetails from './Components/ContactDetails';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';
import About from './Components/About';
import Search from './Components/Search';
import './App.css'; 

function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com', address: '456 Oak Ave' },
    { id: 3, name: 'Sam Brown', phone: '555-555-5555', email: 'sam@example.com', address: '789 Pine Blvd' },
  ]);

  const addContact = (newContact) => {
    setContacts([
      ...contacts,
      { id: contacts.length + 1, ...newContact },
    ]);
  };

  const editContact = (id, updatedContact) => {
    setContacts(contacts.map(contact =>
      contact.id === parseInt(id) ? { ...contact, ...updatedContact } : contact
    ));
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <Router>
      <div>
        <h1>Contact Management App</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacts">Contact List</Link></li>
            <li><Link to="/contacts/add">Add Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<ContactList contacts={contacts} deleteContact={deleteContact} />} />
          <Route path="/contacts/add" element={<AddContact addContact={addContact} />} /> {/* Pass addContact as a prop */}
          <Route path="/contacts/:id" element={<ContactDetails contacts={contacts} />} />
          <Route path="/contacts/edit/:id" element={<EditContact contacts={contacts} editContact={editContact} />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search contacts={contacts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
