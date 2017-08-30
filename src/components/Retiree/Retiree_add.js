import React from 'react';
import { connect } from 'dva';
import { Row, Col,Table, Pagination, Popconfirm,Input,Button} from 'antd';

const { TextArea } = Input;

import { routerRedux } from 'dva/router';
import styles from './Retiree.css';
import { PAGE_SIZE } from '../../constants';


function Retiree_add({dispatch}){
  return (
    <div className={styles.normal}>
      <div>
        <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
        <div style={{ margin: '24px 0' }} />
        <Row>
	  <Col span={6} offset={18}><Button type="primary">Primary</Button></Col>
        </Row>
      </div>
    </div>
  );	
}

function mapStateToProps(state) {
  const { list, total, page } = state.retiree;
  return {
    loading: state.loading.models.retiree,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Retiree_add);