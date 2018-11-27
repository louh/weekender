import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './BoroughView.css'

export default class BoroughView extends Component {
  render () {
    return (
      <Fragment>
        <h2>Borough <span className="heading-instructions">Select one</span></h2>
        <hr />
        <ul className="borough-list">
          <li><Link to="/borough/manhattan">Manhattan</Link></li>
          <li><Link to="/borough/queens">Queens</Link></li>
          <li><Link to="/borough/brooklyn">Brooklyn</Link></li>
          <li><Link to="/borough/bronx">Bronx</Link></li>
          <li><Link to="/borough/staten-island">Staten Island</Link></li>
          <li><Link to="/borough/all">All boroughs</Link></li>
        </ul>
      </Fragment>
    )
  }
}
