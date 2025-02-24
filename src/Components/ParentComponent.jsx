
import ChildComponent from './ChildComponent';
import './ParentComponent.css'
const ParentComponent = () => {
  
  const contacts = [
    { id: 1, name: 'John Doe', phone: '555-1234', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', phone: '555-5678', email: 'jane.smith@example.com' },
    { id: 3, name: 'Bob Johnson', phone: '555-8765', email: 'bob.johnson@example.com' },
    { id: 4, name: 'Alice Brown', phone: '555-4321', email: 'alice.brown@example.com' }
  ];

  return (
    <div classname="contact">
      <h1>Contact List</h1>
      {/* Pass the contacts array to the ChildComponent */}
      <ChildComponent contacts={contacts} />
    </div>
  );
};

export default ParentComponent;
