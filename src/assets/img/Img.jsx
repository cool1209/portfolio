import React from 'react';
import ImgStyles from './Img.module.scss';
import works from './pages/works.jpg';
import KeepInTouch from './works/kit.png';
import friendsApp from './works/friends_app.png';
import memoryPairGame from './works/memory_game.png';
import creativeBackery from './works/creative_bakery.png';
import myBike from './works/mybike.png';
import activeBox from './works/activebox.png';

const Img = ({
  id,
  alt,
}) => {

  switch(id) {
    case 'works':
  
      return (
        <img
          src={works}
          alt={alt}
          className={ImgStyles.works}
        />
      );

    case 'Keep in touch':

    return (
      <img
        src={KeepInTouch}
        alt={alt}
        className={ImgStyles.work}
      />
    );

    case 'Friends app':

      return (
        <img
          src={friendsApp}
          alt={alt}
          className={ImgStyles.work}
        />
      );

    case 'Memory pair game':

      return (
        <img
          src={memoryPairGame}
          alt={alt}
          className={ImgStyles.work}
        />
      );

    case 'CreativeBakery':

      return (
        <img
          src={creativeBackery}
          alt={alt}
          className={ImgStyles.work}
        />
      );

    case 'MyBiKE':

      return (
        <img
          src={myBike}
          alt={alt}
          className={ImgStyles.work}
        />
      );

    case 'ActiveBox':

      return (
        <img
          src={activeBox}
          alt={alt}
          className={ImgStyles.work}
        />
      );

    default:
      return null;
  }
};

export default Img;
