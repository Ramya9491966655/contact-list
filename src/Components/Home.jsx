import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Contact Management App</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Facere quis praesentium cupiditate deserunt maiores eveniet <br /> quos officiis inventore, mollitia, doloribus rem sed totam <br />aliquid aspernatur ad magni quod laboriosam quo.</p>
      <Link to="/contacts">Go to Contact List</Link>
    </div>
  );
};

export default Home;
