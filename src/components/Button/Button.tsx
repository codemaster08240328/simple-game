import React from 'react';

import './Button.css';

export interface Props {
  label: string;
}

const Button: React.FC<Props> = ({ label }) => {
  return <button className="action-btn">{label}</button>;
};

export default Button;
