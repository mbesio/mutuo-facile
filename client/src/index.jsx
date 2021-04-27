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
import InterestRateLinks from './components/interestRateLinks.jsx';
import Footer from './components/footer.jsx';

var App = () => {
  return(
    <Router>
      <div style={{display: "flex", minHeight: "100vh", flexDirection: "column", justifyContent: "space-between"}}>
        <Header/>
          <Switch>
            <Route path="/banche">
              <BankLinks/>
            </Route>
            <Route path="/tassi">
              <InterestRateLinks/>
            </Route>
            <Route path="/">
              <Modulo/>
            </Route>
          </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));