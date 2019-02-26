import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPropeties from './ListPropeties';
import EditPropety from './EditPropety';
import '../css/App.sass';

export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <header>
            <h2>TrueHome App</h2>
          </header>
          <div className="container">
            <Switch>
              <Route exact path='/' component={ListPropeties} />
              <Route exact path='/edit/:id' component={EditPropety} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    )
  }
}
