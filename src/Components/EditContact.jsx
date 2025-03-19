import React, { useState, useEffect } from 'react';

const EditContact = ({ contact, editContact, onContactUpdated }) => {
  const [name, setName] = useState(contact ? contact.name : '');
  const [phone, setPhone] = useState(contact ? contact.phone : '');
  const [email, setEmail] = useState(contact ? contact.email : '');
  const [address, setAddress] = useState(contact ? contact.address : '');

  useEffect(() => {
    if (!contact) {
      onContactUpdated();
    }
  }, [contact, onContactUpdated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editContact(contact.id, { name, phone, email, address });
    onContactUpdated(); 
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditContact;
