import React from "react";

import styles from "./About.module.scss";
import PageBackground from "../../assets/img/PageBackground";
import { useAppContext } from "../../hooks/useAppContext";
import Skill from "../../components/Skill/Skill";
import Expirience from "../../components/Expirience/Expirience";
import Education from "../../components/Education/Education";

const About = () => {
  const { education, skills, expirience } = useAppContext();

  return (
    <section className={styles.about}>
      <PageBackground id="about" />
      <div className="container">
        <div className={styles.about__inner}>
          <div className={`${styles.about__item} ${styles.expirience}`}>
            <h2 className={styles.about__title}>Experience</h2>

            <ul className={styles.about__list}>
              {expirience.map((expirienceItem) => (
                <li
                  key={expirienceItem.date}
                  className={styles.about__listItem}
                >
                  <Expirience expirienceItem={expirienceItem} />
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.about__item} ${styles.skills}`}>
            <h2 className={styles.about__title}>Skills</h2>

            <ul className={styles.about__list}>
              {skills.map((skill) => (
                <li
                  key={skill}
                  className={styles.about__listItem}
                >
                  <Skill skill={skill} />
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.about__item} ${styles.education}`}>
            <h2 className={styles.about__title}>Education</h2>

            <ul className={styles.about__list}>
              {education.map((educationItem) => (
                <li
                  key={educationItem.organization}
                  className={styles.about__listItem}
                >
                  <Education educationItem={educationItem} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
