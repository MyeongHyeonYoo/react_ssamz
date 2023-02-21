import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App' // 상대 경로 사용

// @가 src 디렉터리를 나타낸다.

import App from '@/App' // 절대 경로 사용
import 'bootstrap/dist/css/bootstrap.css' // 볼드체 추가
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
