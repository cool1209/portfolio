import React from "react";
import phone from "./contacts/phone.png";
import mail from "./contacts/mail.ico";
import telegram from "./contacts/telegram.ico";
import linkedin from "./contacts/linkedin.webp";
import github from "./contacts/github.webp";
import IconStyles from "./Icon.module.scss";

const Icon = ({ id, styles = null }) => {
  switch (id) {
    case "Phone":
      return (
        <img src={phone} alt={id} className={`${IconStyles.icon} ${styles}`} />
      );

    case "Mail":
      return (
        <img src={mail} alt={id} className={`${IconStyles.icon} ${styles}`} />
      );

    case "Telegram":
      return (
        <img src={telegram} alt={id} className={`${IconStyles.icon} ${styles}`} />
      );

    case "Linkedin":
      return (
        <img src={linkedin} alt={id} className={`${IconStyles.icon} ${styles}`} />
      );

    case "Github":
      return (
        <img src={github} alt={id} className={`${IconStyles.icon} ${styles}`} />
      );

    default:
      return null;
  }
};

export default Icon;
