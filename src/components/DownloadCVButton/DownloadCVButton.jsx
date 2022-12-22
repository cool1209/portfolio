import React from 'react';
import styles from './DownloadCVButton.module.scss';

import CVFile from '../../download/CV_Ihor_Kuchin.pdf';

const DownloadCVButton = () => {
  return (
    <a
      href={CVFile}
      className={styles.button}
      download='CV_Ihor_Kuchin'
    >
      Download _CV
    </a>
  );
};

export default DownloadCVButton;
