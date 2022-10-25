import React from 'react';
import x from './img/x.png';
import IconStyles from './styles.module.scss';

const Icon = ({
  id,
  alt,
  styles = null
}) => {

  switch(id) {
    case 'x':

    return (
      <img src={x} alt={alt} className={`${IconStyles.xicon} ${styles}`} />
    );

    default:
      return null;
  }
};

export default Icon;
