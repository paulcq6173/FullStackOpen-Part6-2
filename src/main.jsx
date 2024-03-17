import React from 'react';
import ReactDOM from 'react-dom/client';

import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer/reducer';

const store = createStore(reducer);

const App = () => {
  const good = () => {
    store.dispatch({ type: 'GOOD' });
  };
  const ok = () => {
    store.dispatch({ type: 'OK' });
  };
  const bad = () => {
    store.dispatch({ type: 'BAD' });
  };
  const handleReset = () => {
    store.dispatch({ type: 'ZERO' });
  };

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad</button>
      <button onClick={handleReset}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// This function is used to render app
// for update reducer status.
// Because react would not auto-render when state changes.
const renderApp = () => {
  root.render(<App />);
};

renderApp();
// Monitoring state changes.
store.subscribe(renderApp);
