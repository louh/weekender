import leafletStyles from './node_modules/leaflet/dist/leaflet.css'
import styles from './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/components/App'

// Test proxy
window.fetch('http://35.196.121.180/mta/status/weekendboroughstatus.js')


// Proof of concept React

const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
