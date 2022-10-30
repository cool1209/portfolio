import React from 'react';
import buttonStyles from './Button.module.scss';

const Button = ({ name, styles }) => {
  return (
    <button className={`${buttonStyles.button} ${styles}`}>
      {name}
    </button>
  );
};

export default Button;
