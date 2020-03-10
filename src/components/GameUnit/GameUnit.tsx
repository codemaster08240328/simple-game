import React from 'react';
import './GameUnit.css';

export interface Props {
  imgSrc: string;
  label: string;
}

export const GameUnit: React.FC<Props> = ({ imgSrc, label }) => {
  return (
    <div className="gameunit-wrapper">
      <div className="gameunit_img-wrapper">
        <img src={imgSrc} alt={label} className="gameunit-img" />
      </div>
      <div className="gameunit_label-wrapper">
        <span>{label}</span>
      </div>
    </div>
  );
};

export default GameUnit;
