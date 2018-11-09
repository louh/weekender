import React, { Component, Fragment } from 'react'

export default class Legend extends Component {
  render () {
    return (
      <div className="legend-view">
        <h2>Legend <span className="heading-instructions">How to use this diagram</span></h2>
        <hr />
        <section>
          <h3>Normal service</h3>
        </section>
        <section>
          <h3>Planned work</h3>
        </section>
        <section>
          <h3>Free transfer</h3>
        </section>
        <section>
          <h3>Station names</h3>
        </section>
      </div>
    )
  }
}
