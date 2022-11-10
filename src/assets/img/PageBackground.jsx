import React from 'react';
import ImgStyles from './Img.module.scss';
import home from './pages/home.webp';
import works from './pages/works.webp';
import about from './pages/about.webp';
import contacts from './pages/contacts.webp';

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

    case 'contacts':

      return (
        <img
          src={contacts}
          alt={id}
          className={ImgStyles.page}
        />
      );

    default:
      return null;
  }
};

export default PageBackground;
