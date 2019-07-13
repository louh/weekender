import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

const FILES = [
  'https://weekender-data.s3.amazonaws.com/weekendstatus.js',
  'https://weekender-data.s3.amazonaws.com/weekendroutestatus.js',
  'https://weekender-data.s3.amazonaws.com/weekendboroughstatus.js',
  'https://weekender-data.s3.amazonaws.com/LinesStaticData.js'
]

if (!Number.parseInt) {
  Number.parseInt = window.parseInt
}

function embedScript (url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    document.body.appendChild(script)
    script.onload = resolve
    script.onerror = reject
    script.async = true
    script.src = url
  })
}

const mountNode = document.getElementById('app')

Promise.all(FILES.map(embedScript)).then(() => {
  // Render only after data loads, for now.
  ReactDOM.render(
    <Router>
      <App />
    </Router>
  , mountNode)
})

// The service worker code comes from create-react-app.
// To disable, change register() to unregister().
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
