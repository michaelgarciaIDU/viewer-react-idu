import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const APS_ACCESS_TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlZiakZvUzhQU3lYODQyMV95dndvRUdRdFJEa19SUzI1NiIsInBpLmF0bSI6ImFzc2MifQ.eyJzY29wZSI6WyJkYXRhOnJlYWQiLCJkYXRhOndyaXRlIiwiYnVja2V0OmNyZWF0ZSIsImJ1Y2tldDpyZWFkIl0sImNsaWVudF9pZCI6InozUXRqMXpBWE5CMXBmWkcyYlBvQ1FCMnM5ekRsNGRwMnU2YjlpSUhlUnBQTGxsOCIsImlzcyI6Imh0dHBzOi8vZGV2ZWxvcGVyLmFwaS5hdXRvZGVzay5jb20iLCJhdWQiOiJodHRwczovL2F1dG9kZXNrLmNvbSIsImp0aSI6IjJUd09LcGFYemRBNXdaN0p0bmlHYVBGNE0zd0t4NkFTT1lUOFB6cldQWjh0VUVRbXgwNkRkQ0NCeGtDb0F4Y0oiLCJleHAiOjE3NTc5ODYxMjR9.Sa_xuO1mDvyQjE0jFRvFQQaGdCMvjDEkRG3zD1ZGmLUQKZC9JBiF9niQ-WQMUfudF8FJvHpYE6-AT2MbunWB8-P94dEOjMG_S_IO16JXusn02fv2Q22rdQKlSL2N_AsyK0eLev7gKloK2k4egJW06sbQUuZxRb373EiMaHXVlEBXpMp5sWONl5TlklryF8p_B84gL81ySd5atRzReY2MY8A1qcAUjD6GqN8h6Vicz9cIBzTFNbfEAefcWLkOn7XeGopxlYiGUaWsJ2EQLv0C8ximKDBHufAu3cMLgdncoOGkjyoeJRKKBSDFgsnMy-lgkCSWZLCd4QoumvLBU8otgw'; // Specify your access token
const APS_MODEL_URN = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bWlkZW1vLW53ZC1idWNrZXQvbW9kZWxvLm53ZA';

const root = ReactDOM.createRoot(document.getElementById('root'));
if (!APS_ACCESS_TOKEN || !APS_MODEL_URN) {
    root.render(<div>Please specify <code>APS_ACCESS_TOKEN</code> and <code>APS_MODEL_URN</code> in the source code.</div>);
} else {
    root.render(<App token={APS_ACCESS_TOKEN} urn={APS_MODEL_URN} />);
}
