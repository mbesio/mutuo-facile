import React from 'react';
import ReactDOM from 'react-dom';

import Modulo from './components/form.jsx';
import Results from './components/results.jsx';

var App = () => {
  return(
    <div>
      <div>Hello from Mutuo Facile</div>
      <Modulo/>
      <Results/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));