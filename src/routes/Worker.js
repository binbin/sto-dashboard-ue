import React from 'react';
import { connect } from 'dva';
import styles from './Worker.css';

function Worker() {
  return (
    <div className={styles.normal}>
      Route Component: Worker
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Worker);
