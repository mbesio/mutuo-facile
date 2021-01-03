import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.jsx';
import Modulo from './components/form.jsx';

var App = () => {
  return(
    <div>
      <Header/>
      <Modulo/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));