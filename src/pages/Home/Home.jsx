import React from "react";
import PageBackground from "../../assets/img/PageBackground";
import { useAppContext } from "../../hooks/useAppContext";
import styles from "./Home.module.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { greeting } = useAppContext();

  return (
    <section className={styles.home}>
      <PageBackground id="home" />
      <div className="container">
        <div className={styles.home__inner}>
          <div className={styles.home__content}>
            <h1 className={styles.home__title}>{greeting.title}</h1>

            <div className={styles.home__text}>
              {greeting.paragraphs.map((paragraph) => (
                <p key={paragraph.id}>{paragraph.text}</p>
              ))}
            </div>

            <div className={styles.home__buttonContainer}>
              <NavLink
                to="/works"
                tabIndex={-1}
                className={styles.home__button}
              >
                Portfolio
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
