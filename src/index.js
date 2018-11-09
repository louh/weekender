import leafletStyles from '../node_modules/leaflet/dist/leaflet.css'
import styles from './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'

// Test proxy
// window.fetch('http://35.196.121.180/mta/status/weekendboroughstatus.js')
const scriptPromise = new Promise((resolve, reject) => {
  const script = document.createElement('script')
  document.body.appendChild(script)
  script.onload = resolve
  script.onerror = reject
  script.async = true
  script.src = '/fixtures/weekendstatus.js'
})

const mountNode = document.getElementById('app')

scriptPromise.then(() => {
  console.log('test data loaded')

  // Render only after data loads, for now.
  ReactDOM.render(
    <Router>
      <App />
    </Router>
  , mountNode)
  })
