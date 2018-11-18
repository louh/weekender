import leafletStyles from '../node_modules/leaflet/dist/leaflet.css'
import styles from './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'

const FILES = [
  'https://s3.amazonaws.com/weekender-data/weekendstatus.js',
  'https://s3.amazonaws.com/weekender-data/weekendroutestatus.js',
  'https://s3.amazonaws.com/weekender-data/weekendboroughstatus.js',
  'https://s3.amazonaws.com/weekender-data/LinesStaticData.js'
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
