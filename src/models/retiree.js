import * as retireeService from '../services/retiree';

import { routerRedux } from 'dva/router';


export default {
  namespace: 'retiree',
  state: {
  	list: [],
	total: null,
	page: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
    add_result(state,{}){
      return {...state}
    }
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(retireeService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        },
      });
    },
    *add({},{call,put}){
      let {data,headers} = yield call(retireeService.add)
      yield put(routerRedux.push({
        pathname: '/retiree'
      }))
      // yield put({
      //   type:'save'
      // })
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/retiree') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },  	
  },
};
