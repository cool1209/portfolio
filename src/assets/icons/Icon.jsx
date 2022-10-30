import React from 'react';
import x from './img/x.png';
import IconStyles from './Icon.module.scss';

const Icon = ({
  id,
  alt,
  styles = null
}) => {

  switch(id) {
    case 'x':

    return (
      <img src={x} alt={alt} className={`${IconStyles.icon} ${styles}`} />
    );

    default:
      return null;
  }
};

export default Icon;
