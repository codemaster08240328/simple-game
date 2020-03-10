import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import './Home.css';

const Home = () => {
  return (
    <div className="page-wrapper">
      <h1>Welcome to our gameboard</h1>
      <div className="home_action-wrapper">
        <Link to="/board">
          <Button label="Start Game" />
        </Link>
        <Link to="/rule">
          <Button label="Game Rule" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
