import React from "react";
import styles from "./Contacts.module.scss";
import { useAppContext } from "../../hooks/useAppContext";
import PageBackground from "../../assets/img/PageBackground";
import Contact from "../../components/Contact/Contact";
import CVFile from "../../download/CV_Ihor_Kuchin.pdf";

const Contacts = () => {
  const { contacts } = useAppContext();

  return (
    <section className={styles.contacts}>
      <PageBackground id="contacts" />
      <div className="container">
        <div className={styles.contacts__inner}>
          <ul className={styles.contacts__list}>
            {contacts.map((contact) => (
              <li key={contact.name}>
                <Contact contact={contact} />
              </li>
            ))}

            <li>
              <a
                href={CVFile}
                className={styles.contacts__downloadButton}
                download="CV_Ihor_Kuchin"
              >
                Download _CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
