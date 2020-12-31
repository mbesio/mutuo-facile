import React from 'react';
import ReactDOM from 'react-dom';

import Modulo from './components/form.jsx';

var App = () => {
  return(
    <div>
      <div>Hello from Mutuo Facile</div>
      <Modulo/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));