import React from 'react';
import x from './img/x.png'
import ImgStyles from './styles.module.scss';

const Img = ({
  id,
  alt,
  styles = null
}) => {

  switch(id) {
    case 'x':

    return (
      <img src={x} alt={alt} className={`${ImgStyles.ximg} ${styles}`} />
    );

    default:
      return null;
  }
};

export default Img;
