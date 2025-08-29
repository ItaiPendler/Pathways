import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

moment.defaultFormat = 'DD.MM.YY';
moment.locale('he');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
