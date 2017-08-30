import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Retiree from "./routes/Retiree.js";
import Retiree_add from "./routes/Retiree_add.js";


import Worker from "./routes/Worker.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/retiree" component={Retiree} />
      <Route path="/retiree_add" component={Retiree_add} />
      <Route path="/worker" component={Worker} />
    </Router>
  );
}

export default RouterConfig;
