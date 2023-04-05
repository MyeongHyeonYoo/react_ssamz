import React from 'react'
import ReactDOM from 'react-dom/client'
// import AppContainer from './AppContainer'
import 'bootstrap/dist/css/bootstrap.css'
import { TodoProvider } from './TodoContext'
import App from './components/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      {/* <AppContainer /> */}
      <App />
    </TodoProvider>
  </React.StrictMode>
);