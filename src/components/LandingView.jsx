import React, { Component, Fragment } from 'react'
import SubwayLineSelector from './SubwayLineSelector'
import './LandingView.css'

export default class LandingView extends Component {
  render () {
    return (
      <Fragment>
        <h2>All stations <span className="heading-instructions">Select one for details</span></h2>

        <SubwayLineSelector />
        <hr />

        <section className="landing">
          <h3>Welcome to the Weekender</h3>

          <p>The Weekender is your (unofficial) guide to understanding planned service changes in effect for system maintenance and construction on NYC’s subway system.</p>
            
          <p>This is not an official production of the MTA. This is a fan-made high-definition remaster of <a href="http://web.mta.info/weekender.html" target="_blank" rel="noopener noferrer">the original Weekender</a>.</p>

          <p><strong>This project is a work in progress.</strong> <a href="https://github.com/louh/weekender">Check out the code here.</a></p>
        </section>
      </Fragment>
    )
  }
}
