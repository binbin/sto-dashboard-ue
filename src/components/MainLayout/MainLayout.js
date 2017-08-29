import React from 'react';
import styles from './MainLayout.css';
import Header from './Header';
import Sider from './Sider'

function MainLayout({ children, location }) {
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <div className={styles.content}>
        <Sider/>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;