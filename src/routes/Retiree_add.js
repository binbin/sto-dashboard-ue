import React from 'react';
import { connect } from 'dva';
import styles from './Retiree.css';
import Retiree_addComponent from '../components/Retiree/Retiree_add';
import MainLayout from '../components/MainLayout/MainLayout';

function Retiree_add({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <Retiree_addComponent />
      </div>
    </MainLayout>
  );
}

export default connect()(Retiree_add);