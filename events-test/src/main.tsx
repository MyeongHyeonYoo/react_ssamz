import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App1'
import App2 from './App2'
import App3 from './App3'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    <App3 />
  </React.StrictMode>
);
