import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'jquery/dist/jquery.min.js';
import 'jquery-validation/dist/jquery.validate.min.js';
import 'jquery.cookie/jquery.cookie.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import 'chart.js/dist/Chart.min.js';
import './js/front.js';
import './css/style.default.css';

//import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import PrimaryNav from './components/layout/PrimaryNav';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="page">
            <Header />
            <PrimaryNav />
            <div className="container">
              <Switch>
                {<Route exact path="/" component={NotFound} />}
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
