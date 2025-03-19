import React from 'react';
import { Link } from 'react-router-dom';

const ContactDetails = ({ contact }) => {
  if (!contact) {
    return <p>Contact not found!</p>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <p>Address: {contact.address}</p>
      <Link to={`/contacts/edit/${contact.id}`}>Edit Contact</Link>
      <br />
      <Link to="/contacts">Back to Contact List</Link>
    </div>
  );
};

export default ContactDetails;
