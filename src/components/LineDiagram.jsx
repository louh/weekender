import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './LineDiagram.css'

import IMG_LINE_DIAGRAM_1 from '../images/line_diagrams/1.png'
import IMG_LINE_DIAGRAM_2 from '../images/line_diagrams/2.png'
import IMG_LINE_DIAGRAM_3 from '../images/line_diagrams/3.png'
import IMG_LINE_DIAGRAM_4 from '../images/line_diagrams/4.png'
import IMG_LINE_DIAGRAM_5 from '../images/line_diagrams/5.png'
import IMG_LINE_DIAGRAM_6 from '../images/line_diagrams/6.png'
import IMG_LINE_DIAGRAM_7 from '../images/line_diagrams/7.png'
import IMG_LINE_DIAGRAM_A from '../images/line_diagrams/a.png'
import IMG_LINE_DIAGRAM_C from '../images/line_diagrams/c.png'
import IMG_LINE_DIAGRAM_E from '../images/line_diagrams/e.png'
import IMG_LINE_DIAGRAM_L from '../images/line_diagrams/l.png'
import IMG_LINE_DIAGRAM_S from '../images/line_diagrams/s.png'
import IMG_LINE_DIAGRAM_B from '../images/line_diagrams/b.png'
import IMG_LINE_DIAGRAM_D from '../images/line_diagrams/d.png'
import IMG_LINE_DIAGRAM_F from '../images/line_diagrams/f.png'
import IMG_LINE_DIAGRAM_M from '../images/line_diagrams/m.png'
import IMG_LINE_DIAGRAM_N from '../images/line_diagrams/n.png'
import IMG_LINE_DIAGRAM_Q from '../images/line_diagrams/q.png'
import IMG_LINE_DIAGRAM_R from '../images/line_diagrams/r.png'
import IMG_LINE_DIAGRAM_W from '../images/line_diagrams/w.png'
import IMG_LINE_DIAGRAM_J from '../images/line_diagrams/j.png'
import IMG_LINE_DIAGRAM_Z from '../images/line_diagrams/z.png'
import IMG_LINE_DIAGRAM_G from '../images/line_diagrams/g.png'
import IMG_LINE_DIAGRAM_SIR from '../images/line_diagrams/sir.png'

const paths = {}
paths['1'] = IMG_LINE_DIAGRAM_1
paths['2'] = IMG_LINE_DIAGRAM_2
paths['3'] = IMG_LINE_DIAGRAM_3
paths['4'] = IMG_LINE_DIAGRAM_4
paths['5'] = IMG_LINE_DIAGRAM_5
paths['6'] = IMG_LINE_DIAGRAM_6
paths['7'] = IMG_LINE_DIAGRAM_7
paths['A'] = IMG_LINE_DIAGRAM_A
paths['C'] = IMG_LINE_DIAGRAM_C
paths['E'] = IMG_LINE_DIAGRAM_E
paths['L'] = IMG_LINE_DIAGRAM_L
paths['S'] = IMG_LINE_DIAGRAM_S
paths['B'] = IMG_LINE_DIAGRAM_B
paths['D'] = IMG_LINE_DIAGRAM_D
paths['F'] = IMG_LINE_DIAGRAM_F
paths['M'] = IMG_LINE_DIAGRAM_M
paths['N'] = IMG_LINE_DIAGRAM_N
paths['Q'] = IMG_LINE_DIAGRAM_Q
paths['R'] = IMG_LINE_DIAGRAM_R
paths['W'] = IMG_LINE_DIAGRAM_W
paths['J'] = IMG_LINE_DIAGRAM_J
paths['Z'] = IMG_LINE_DIAGRAM_Z
paths['G'] = IMG_LINE_DIAGRAM_G
paths['SIR'] = IMG_LINE_DIAGRAM_SIR

export default class LineDiagram extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render () {
    const lineId = this.props.match.params['line_id']

    if (!lineId) return null

    return (
      <div className="line-diagram">
        <img src={paths[lineId.toUpperCase()]} />
      </div>
    )
  }
}
