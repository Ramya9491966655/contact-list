import './ChildComponent.css'
const ChildComponent = ({ contacts }) => {
  return (
    <div className="contact-grid">
      {contacts.map((contact) => (
        <div key={contact.id} className="contact-card">
          <h3>{contact.name}</h3>
          <p><strong>Phone:</strong> {contact.phone}</p>
          <p><strong>Email:</strong> {contact.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ChildComponent;
