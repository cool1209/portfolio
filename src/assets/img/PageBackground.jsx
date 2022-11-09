import React from 'react';
import ImgStyles from './Img.module.scss';
import home from './pages/home.jpg';
import works from './pages/works.jpg';
import about from './pages/about.jpg';

const PageBackground = ({ id }) => {

  switch(id) {
    case 'home':
  
      return (
        <img
          src={home}
          alt={id}
          className={ImgStyles.page}
        />
      );

    case 'works':

      return (
        <img
          src={works}
          alt={id}
          className={ImgStyles.page}
        />
      );

    case 'about':
  
      return (
        <img
          src={about}
          alt={id}
          className={ImgStyles.page}
        />
      );

    default:
      return null;
  }
};

export default PageBackground;
