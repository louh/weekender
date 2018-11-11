import React from 'react'
import PropTypes from 'prop-types'

import './SubwayBullet.css'

import IMG_SUBWAY_BULLET_1 from '../../node_modules/nyc-subway-icons/svg/1.svg'
import IMG_SUBWAY_BULLET_2 from '../../node_modules/nyc-subway-icons/svg/2.svg'
import IMG_SUBWAY_BULLET_3 from '../../node_modules/nyc-subway-icons/svg/3.svg'
import IMG_SUBWAY_BULLET_4 from '../../node_modules/nyc-subway-icons/svg/4.svg'
import IMG_SUBWAY_BULLET_5 from '../../node_modules/nyc-subway-icons/svg/5.svg'
import IMG_SUBWAY_BULLET_6 from '../../node_modules/nyc-subway-icons/svg/6.svg'
import IMG_SUBWAY_BULLET_7 from '../../node_modules/nyc-subway-icons/svg/7.svg'
import IMG_SUBWAY_BULLET_A from '../../node_modules/nyc-subway-icons/svg/a.svg'
import IMG_SUBWAY_BULLET_C from '../../node_modules/nyc-subway-icons/svg/c.svg'
import IMG_SUBWAY_BULLET_E from '../../node_modules/nyc-subway-icons/svg/e.svg'
import IMG_SUBWAY_BULLET_L from '../../node_modules/nyc-subway-icons/svg/l.svg'
import IMG_SUBWAY_BULLET_S from '../../node_modules/nyc-subway-icons/svg/s.svg'
import IMG_SUBWAY_BULLET_B from '../../node_modules/nyc-subway-icons/svg/b.svg'
import IMG_SUBWAY_BULLET_D from '../../node_modules/nyc-subway-icons/svg/d.svg'
import IMG_SUBWAY_BULLET_F from '../../node_modules/nyc-subway-icons/svg/f.svg'
import IMG_SUBWAY_BULLET_M from '../../node_modules/nyc-subway-icons/svg/m.svg'
import IMG_SUBWAY_BULLET_N from '../../node_modules/nyc-subway-icons/svg/n.svg'
import IMG_SUBWAY_BULLET_Q from '../../node_modules/nyc-subway-icons/svg/q.svg'
import IMG_SUBWAY_BULLET_R from '../../node_modules/nyc-subway-icons/svg/r.svg'
import IMG_SUBWAY_BULLET_W from '../../node_modules/nyc-subway-icons/svg/w.svg'
import IMG_SUBWAY_BULLET_J from '../../node_modules/nyc-subway-icons/svg/j.svg'
import IMG_SUBWAY_BULLET_Z from '../../node_modules/nyc-subway-icons/svg/z.svg'
import IMG_SUBWAY_BULLET_G from '../../node_modules/nyc-subway-icons/svg/g.svg'
import IMG_SUBWAY_BULLET_SIR from '../../node_modules/nyc-subway-icons/svg/sir.svg'
import IMG_SUBWAY_BULLET_V_1 from '../images/vignelli_bullets/1.svg'
import IMG_SUBWAY_BULLET_V_2 from '../images/vignelli_bullets/2.svg'
import IMG_SUBWAY_BULLET_V_3 from '../images/vignelli_bullets/3.svg'
import IMG_SUBWAY_BULLET_V_4 from '../images/vignelli_bullets/4.svg'
import IMG_SUBWAY_BULLET_V_5 from '../images/vignelli_bullets/5.svg'
import IMG_SUBWAY_BULLET_V_6 from '../images/vignelli_bullets/6.svg'
import IMG_SUBWAY_BULLET_V_7 from '../images/vignelli_bullets/7.svg'
import IMG_SUBWAY_BULLET_V_A from '../images/vignelli_bullets/a.svg'
import IMG_SUBWAY_BULLET_V_C from '../images/vignelli_bullets/c.svg'
import IMG_SUBWAY_BULLET_V_E from '../images/vignelli_bullets/e.svg'
import IMG_SUBWAY_BULLET_V_L from '../images/vignelli_bullets/l.svg'
import IMG_SUBWAY_BULLET_V_S from '../images/vignelli_bullets/s.svg'
import IMG_SUBWAY_BULLET_V_B from '../images/vignelli_bullets/b.svg'
import IMG_SUBWAY_BULLET_V_D from '../images/vignelli_bullets/d.svg'
import IMG_SUBWAY_BULLET_V_F from '../images/vignelli_bullets/f.svg'
import IMG_SUBWAY_BULLET_V_M from '../images/vignelli_bullets/m.svg'
import IMG_SUBWAY_BULLET_V_N from '../images/vignelli_bullets/n.svg'
import IMG_SUBWAY_BULLET_V_Q from '../images/vignelli_bullets/q.svg'
import IMG_SUBWAY_BULLET_V_R from '../images/vignelli_bullets/r.svg'
import IMG_SUBWAY_BULLET_V_W from '../images/vignelli_bullets/w.svg'
import IMG_SUBWAY_BULLET_V_J from '../images/vignelli_bullets/j.svg'
import IMG_SUBWAY_BULLET_V_Z from '../images/vignelli_bullets/z.svg'
import IMG_SUBWAY_BULLET_V_G from '../images/vignelli_bullets/g.svg'
import IMG_SUBWAY_BULLET_V_SIR from '../images/vignelli_bullets/sir.svg'

const paths = {}
// Official color scheme
// paths['1'] = IMG_SUBWAY_BULLET_1
// paths['2'] = IMG_SUBWAY_BULLET_2
// paths['3'] = IMG_SUBWAY_BULLET_3
// paths['4'] = IMG_SUBWAY_BULLET_4
// paths['5'] = IMG_SUBWAY_BULLET_5
// paths['6'] = IMG_SUBWAY_BULLET_6
// paths['7'] = IMG_SUBWAY_BULLET_7
// paths['A'] = IMG_SUBWAY_BULLET_A
// paths['C'] = IMG_SUBWAY_BULLET_C
// paths['E'] = IMG_SUBWAY_BULLET_E
// paths['L'] = IMG_SUBWAY_BULLET_L
// paths['S'] = IMG_SUBWAY_BULLET_S
// paths['B'] = IMG_SUBWAY_BULLET_B
// paths['D'] = IMG_SUBWAY_BULLET_D
// paths['F'] = IMG_SUBWAY_BULLET_F
// paths['M'] = IMG_SUBWAY_BULLET_M
// paths['N'] = IMG_SUBWAY_BULLET_N
// paths['Q'] = IMG_SUBWAY_BULLET_Q
// paths['R'] = IMG_SUBWAY_BULLET_R
// paths['W'] = IMG_SUBWAY_BULLET_W
// paths['J'] = IMG_SUBWAY_BULLET_J
// paths['Z'] = IMG_SUBWAY_BULLET_Z
// paths['G'] = IMG_SUBWAY_BULLET_G
// paths['SIR'] = IMG_SUBWAY_BULLET_SIR

// Alternative: Vignelli color scheme bullets
paths['1'] = IMG_SUBWAY_BULLET_V_1
paths['2'] = IMG_SUBWAY_BULLET_V_2
paths['3'] = IMG_SUBWAY_BULLET_V_3
paths['4'] = IMG_SUBWAY_BULLET_V_4
paths['5'] = IMG_SUBWAY_BULLET_V_5
paths['6'] = IMG_SUBWAY_BULLET_V_6
paths['7'] = IMG_SUBWAY_BULLET_V_7
paths['A'] = IMG_SUBWAY_BULLET_V_A
paths['C'] = IMG_SUBWAY_BULLET_V_C
paths['E'] = IMG_SUBWAY_BULLET_V_E
paths['L'] = IMG_SUBWAY_BULLET_V_L
paths['S'] = IMG_SUBWAY_BULLET_V_S
paths['B'] = IMG_SUBWAY_BULLET_V_B
paths['D'] = IMG_SUBWAY_BULLET_V_D
paths['F'] = IMG_SUBWAY_BULLET_V_F
paths['M'] = IMG_SUBWAY_BULLET_V_M
paths['N'] = IMG_SUBWAY_BULLET_V_N
paths['Q'] = IMG_SUBWAY_BULLET_V_Q
paths['R'] = IMG_SUBWAY_BULLET_V_R
paths['W'] = IMG_SUBWAY_BULLET_V_W
paths['J'] = IMG_SUBWAY_BULLET_V_J
paths['Z'] = IMG_SUBWAY_BULLET_V_Z
paths['G'] = IMG_SUBWAY_BULLET_V_G
paths['SIR'] = IMG_SUBWAY_BULLET_V_SIR

const SubwayBullet = (props) => {
  const line = props.line.toUpperCase()

  const className = ['subway-bullet']

  if (props.small) {
    className.push('subway-bullet-small')
  }
  if (props.large) {
    className.push('subway-bullet-large')
  }

  return (
    <img className={className.join(' ')} src={paths[line]} alt={line} />
  )
}

SubwayBullet.prototype.propTypes = {
  line: PropTypes.string.isRequired,
  small: PropTypes.bool,
  large: PropTypes.bool
}

SubwayBullet.prototype.defaultProps = {
  small: false,
  large: false
}

export default SubwayBullet
