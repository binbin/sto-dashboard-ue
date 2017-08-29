import React from 'react';
import { connect } from 'dva';
import styles from './Retiree.css';

function Retiree() {
  return (
    <div className={styles.normal}>
      Route Component: Retiree
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Retiree);
