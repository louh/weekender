import React, { Component } from 'react'
import { SettingsContext } from './App'
import './SettingsPanel.css'

class SettingsPanel extends Component {
  handleClose = (event, settings) => {
    event.preventDefault()
    settings.toggleSettingsScreen()
  }

  render () {
    return (
      <SettingsContext.Consumer>
        {(settings) => (
          <div className="settings-container info-panel">
            <h2>Secret settings menu</h2>
            <hr />
            <h3>Options</h3>

            <label htmlFor="settings-full-ui">
              <input
                type="checkbox"
                id="settings-full-ui"
                checked={settings.FULL_UI}
                onChange={(e) => settings.setSetting('FULL_UI', e.target.checked)}
              />
              <span>Enable all navigation items</span> 
            </label>

            <label htmlFor="settings-bullets-official-color">
              <input
                type="checkbox"
                id="settings-bullets-official-color"
                checked={settings.SUBWAY_BULLET_OFFICIAL_COLORS}
                onChange={(e) => settings.setSetting('SUBWAY_BULLET_OFFICIAL_COLORS', e.target.checked)}
              />
              <span>Use official MTA colors for subway bullet icons</span> 
            </label>

            <label htmlFor="settings-logo-legacy">
              <input
                type="checkbox"
                id="settings-logo-legacy"
                checked={settings.LOGO_LEGACY_TYPEFACE}
                onChange={(e) => settings.setSetting('LOGO_LEGACY_TYPEFACE', e.target.checked)}
              />
              <span>Use Vignelli typeface for Weekender workmark</span> 
            </label>

            <p>
              <strong><a href="" onClick={(e) => this.handleClose(e, settings)}>Close</a></strong>
            </p>
          </div>
        )}
      </SettingsContext.Consumer>
    )
  }
}

export default SettingsPanel
