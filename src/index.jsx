import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const APS_MODEL_URN = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bWlkZW1vLW53ZC1idWNrZXQvbW9kZWxvLm53ZA';

async function getAccessToken() {
  const res = await fetch('/api/token'); // Esto llama al serverless en Vercel
  const { access_token } = await res.json();
  return access_token;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

getAccessToken().then(token => {
  root.render(<App token={token} urn={APS_MODEL_URN} />);
});