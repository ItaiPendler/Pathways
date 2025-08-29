import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import { store } from './store';

const App: React.FC = () => (
  <div className="App">
    <Provider store={store}>hello</Provider>
  </div>
);

export default App;
