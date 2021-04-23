import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/header.jsx';
import Modulo from './components/form.jsx';
import BankLinks from './components/bankLinks.jsx';
import Footer from './components/footer.jsx';

var App = () => {
  return(
    <Router>
      <Header/>
        <Switch>
          <Route path="/banche">
            <BankLinks/>
          </Route>
          <Route path="/">
            <Modulo/>
          </Route>
        </Switch>
      <Footer/>
    </Router>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));