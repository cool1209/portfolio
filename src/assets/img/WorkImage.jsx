import React from 'react';
import ImgStyles from './Img.module.scss';
import keepInTouch from './works/kit.png';
import obliksoft from './works/obliksoft.png';
import friendsApp from './works/friends_app.png';
import memoryPairGame from './works/memory_game.png';
import creativeBackery from './works/creative_bakery.png';
import myBike from './works/mybike.png';
import activeBox from './works/activebox.png';
import frogger from './works/frogger.png';
import jsDOM from './works/js_dom.png';
import affiliate from './works/affiliate.png';

const WorkImage = ({ id }) => {

  switch(id) {
    case 'Keep in touch':

    return (
      <img
        src={keepInTouch}
        alt={id}
        className={ImgStyles.work}
      />
    );

    case 'OblikSoft testing':

    return (
      <img
        src={obliksoft}
        alt={id}
        className={ImgStyles.work}
      />
    );

    case 'Friends app':

      return (
        <img
          src={friendsApp}
          alt={id}
          className={ImgStyles.work}
        />
      );

    case 'Memory pair game':

      return (
        <img
          src={memoryPairGame}
          alt={id}
          className={ImgStyles.work}
        />
      );

    case 'Affiliate':

      return (
        <img
          src={affiliate}
          alt={id}
          className={ImgStyles.work}
        />
      );

    case 'CreativeBakery':

      return (
        <img
          src={creativeBackery}
          alt={id}
          className={ImgStyles.work}
        />
      );

    case 'MyBiKE':

      return (
        <img
          src={myBike}
          alt={id}
          className={ImgStyles.work}
        />
      );

    case 'ActiveBox':

      return (
        <img
          src={activeBox}
          alt={id}
          className={ImgStyles.work}
        />
      );

    case 'Frogger':

      return (
        <img
          src={frogger}
          alt={id}
          className={ImgStyles.work}
        />
      );

    case 'JS DOM':

      return (
        <img
          src={jsDOM}
          alt={id}
          className={ImgStyles.work}
        />
      );

    default:
      return null;
  }
};

export default WorkImage;
