import React, { Component, Fragment } from 'react'
import SubwayBullet from './SubwayBullet'
import Icon from './Icon'
import SubwayLineSelector from './SubwayLineSelector'

export default class Temp extends Component {
  render () {
    return (
      <Fragment>
        <h2>Subway Lines <span className="heading-instructions">Select one for service details</span></h2>
        {/* <h2>All Stations <span className="heading-instructions">Select one for details</span></h2> */}
        
        <SubwayLineSelector onClick={this.handleSelectSubwayLine} />

        <hr />

        <section>
          <h3>DeKalb Av</h3>
          <span><SubwayBullet line="B" small /></span>
        </section>
        <section className="service-notice">
          <h3>Weekend Service Notice <span className="heading-instructions">Select one for details</span></h3>

          <ul>
            <li><a href="">TRACK MAINTENANCE 10:45 PM Fri, Oct 12 to 5 AM Mon, Oct 15 Norwood-bound <SubwayBullet line="D" small /> trains skip 25 St, Prospect Av, 4 Av-9 St, Union St and DeKalb Av in Brooklyn</a></li>
            <li><a href="">TRACK MAINTENANCE 9:30 PM Fri, Oct 12 to 5 AM Mon, Oct 15 <SubwayBullet line="Q" small /> Service between 96 St in Manhattan and Prospect Park in Brooklyn is replaced by <SubwayBullet line="M" small /><SubwayBullet line="N" small /><SubwayBullet line="R" small /> trains and <Icon type="bus" /> free shuttle buses</a></li>
          </ul>
        </section>
      </Fragment>
    )
  }
}
