import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const urlParams = new URLSearchParams(window.location.search);
const APS_MODEL_URN = urlParams.get('urn');

async function getAccessToken() {
  const res = await fetch('/api/token'); // Esto llama al serverless en Vercel
  const { access_token } = await res.json();
  return access_token;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

getAccessToken().then(token => {
  root.render(<App token={token} urn={APS_MODEL_URN} />);
});