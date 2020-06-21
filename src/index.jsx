import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './Todo';

const App = () => (
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));
