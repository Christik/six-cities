import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const PLACE_CARD_COUNT = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App placeCardCount={PLACE_CARD_COUNT} />
  </React.StrictMode>,
);
