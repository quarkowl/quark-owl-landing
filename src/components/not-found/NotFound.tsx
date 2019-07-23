import * as React from 'react';

interface Props {}

import styles from './NotFound.module.scss';
import AppFooter from '../layout/Footer';

const NotFound: React.FC<Props> = () => {
  return (
    <div id="main" className={styles.container}>
      <div className={styles.messageContainer}>
        <h1>Something went wrong.</h1>
        <div className={styles.row}>
          <img src="logo.svg" alt="company logo" className={styles.mainImage} />
          <div className={styles.infoContainer}>
            <h1 className={styles.error}>404</h1>
            <h3 className={styles.message}>Sorry, we can't find the page.</h3>
            <a className={styles.message} href="/">Back to Home</a>
          </div>
        </div>
      </div>
      <AppFooter/>
    </div>
  );
};

export default NotFound;
