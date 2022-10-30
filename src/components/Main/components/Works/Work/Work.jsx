import React from 'react';
import Img from '../../../../../assets/img/Img';
import styles from './Work.module.scss';

const Work = ({ work }) => {
  return (
    <div className={styles.work}>
      <div className={styles.work__inner}>
      <a
        href={work.demoViev}
        className={styles.work__description}
        target={`_blank`}
      >
        <div>
          <div>
            <strong
              className={styles.work__descriptionItemTitle}
            >Project name:</strong> {work.name}
          </div>

          <div>
            <strong
            className={styles.work__descriptionItemTitle}
            >Technologies:</strong> {work.technologies}
          </div>

          <div>
            <strong
            className={styles.work__descriptionItemTitle}
            >Description:</strong> {work.description}
          </div>
        </div>

        <div>
          Click anywhere to view a demo <br />
          or the GitHub icon to view the code
        </div>
      </a>

      <a 
        href={work.codeView}
        className={styles.work__github}
        target={`_blank`}
        >
        <i className={`${styles.work__githubIcon} icon-github`}></i>
      </a>

      <Img  id={work.name} alt={work.name} />
        </div>
    </div>
  );
};

export default Work;
