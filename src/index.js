import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';
import rootRoutes from '@/route/rootRoutes'
import registerServiceWorker from './registerServiceWorker';

let routeList = [];
rootRoutes.map((item, index) => (
  routeList.push(<Route key={index} path={item.path} component={item.component} />)
))

ReactDOM.render(
  <Router>
    <Switch>
      {routeList}
    </Switch>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
