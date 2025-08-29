import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import { store } from './store';

const App: React.FC = () => (
  <div className="App">
    <Provider store={store}>
      <header className="App-header">
        <img src="https://placehold.co/100x100?text=Logo" className="App-logo" alt="logo" />
        <div>
          <h1>נתיבים!</h1>
          <p>כי נמאס לי לחכות לשמוע את כל התפריט</p>
        </div>
      </header>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {[1, 2, 3].map(id => (
          <a href={`/company/${id}`} key={id}>
            <img
              src={`https://placehold.co/600x400?text=חברה ${id}`}
              alt={`Company ${id}`}
              style={{ width: '100%', height: 'auto' }}
            />
          </a>
        ))}
      </div>
      <footer style={{ marginTop: '20px' }}>
        <p>© 2024 נתיבים. כל הזכויות שמורות.</p>
      </footer>
    </Provider>
  </div>
);
export default App;
