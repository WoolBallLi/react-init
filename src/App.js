import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainFooter from './components/MainFooter'
import logo from '@/logo.svg';
import './App.css';

import appRoutes from './route/appRoutes'

class App extends Component {
  render() {
    let routeList = [];
    appRoutes.map((item, index) => (
      routeList.push(<Route key={index} path={item.path} component={item.component} />)
    ))

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Switch>
            {routeList}
            <Redirect to={{ pathname: '/home' }} />
          </Switch>
          <MainFooter/>
        </p>
      </div>
    );
  }
}

export default App;
