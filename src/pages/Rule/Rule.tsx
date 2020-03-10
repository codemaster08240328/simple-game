import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const Rule = () => {
  return (
    <div className="page-wrapper">
      <h2>Here is the Game rule.</h2>
      <h3>Units:</h3>
      <p>* There are 3 units on the battlefield: Cavalry, Archers, Pikemen</p>
      <ul>
        <li>
          <b>Cavalry</b> can defeats Archers and can be defeated by Pikeman
        </li>
        <li>
          <b>Archers</b> can defeat Pikemen and can be defeated by Cavalry
        </li>
        <li>
          <b>Pikemen</b> can defeat Cavalry and can be defeated by Archers
        </li>
      </ul>
      <p>* If two units of the same type fight against each other, both are defeated</p>
      <h3>Scoring: </h3>
      <p>Each time a player's unit defeats another, they get +1 score, otherwise -1</p>
      <Link to="/">
        <Button label="Return to the game" />
      </Link>
    </div>
  );
};

export default Rule;
