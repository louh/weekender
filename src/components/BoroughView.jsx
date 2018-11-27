import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './BoroughView.css'

export default class BoroughView extends Component {
  render () {
    return (
      <Fragment>
        <h2>Borough <span className="heading-instructions">Select one</span></h2>
        <hr />
        <ul className="borough-list">
          <li><NavLink to="/borough/manhattan" activeClassName="active-link">Manhattan</NavLink></li>
          <li><NavLink to="/borough/queens" activeClassName="active-link">Queens</NavLink></li>
          <li><NavLink to="/borough/brooklyn" activeClassName="active-link">Brooklyn</NavLink></li>
          <li><NavLink to="/borough/bronx" activeClassName="active-link">Bronx</NavLink></li>
          <li><NavLink to="/borough/staten-island" activeClassName="active-link">Staten Island</NavLink></li>
          <li><NavLink to="/borough/all" activeClassName="active-link">All boroughs</NavLink></li>
        </ul>
      </Fragment>
    )
  }
}
