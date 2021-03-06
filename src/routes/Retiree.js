import React from 'react';
import { connect } from 'dva';
import styles from './Retiree.css';
import RetireeComponent from '../components/Retiree/Retiree';
import MainLayout from '../components/MainLayout/MainLayout';

function Retiree({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <RetireeComponent />
      </div>
    </MainLayout>
  );
}

export default connect()(Retiree);