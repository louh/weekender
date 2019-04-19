import React from 'react'
import PropTypes from 'prop-types'
import { SettingsContext } from './App'

import './SubwayBullet.css'

import IMG_SUBWAY_BULLET_1 from '../../node_modules/mta-subway-bullets/svg/1.svg'
import IMG_SUBWAY_BULLET_2 from '../../node_modules/mta-subway-bullets/svg/2.svg'
import IMG_SUBWAY_BULLET_3 from '../../node_modules/mta-subway-bullets/svg/3.svg'
import IMG_SUBWAY_BULLET_4 from '../../node_modules/mta-subway-bullets/svg/4.svg'
import IMG_SUBWAY_BULLET_5 from '../../node_modules/mta-subway-bullets/svg/5.svg'
import IMG_SUBWAY_BULLET_6 from '../../node_modules/mta-subway-bullets/svg/6.svg'
import IMG_SUBWAY_BULLET_7 from '../../node_modules/mta-subway-bullets/svg/7.svg'
import IMG_SUBWAY_BULLET_A from '../../node_modules/mta-subway-bullets/svg/a.svg'
import IMG_SUBWAY_BULLET_C from '../../node_modules/mta-subway-bullets/svg/c.svg'
import IMG_SUBWAY_BULLET_E from '../../node_modules/mta-subway-bullets/svg/e.svg'
import IMG_SUBWAY_BULLET_L from '../../node_modules/mta-subway-bullets/svg/l.svg'
import IMG_SUBWAY_BULLET_S from '../../node_modules/mta-subway-bullets/svg/s.svg'
import IMG_SUBWAY_BULLET_B from '../../node_modules/mta-subway-bullets/svg/b.svg'
import IMG_SUBWAY_BULLET_D from '../../node_modules/mta-subway-bullets/svg/d.svg'
import IMG_SUBWAY_BULLET_F from '../../node_modules/mta-subway-bullets/svg/f.svg'
import IMG_SUBWAY_BULLET_M from '../../node_modules/mta-subway-bullets/svg/m.svg'
import IMG_SUBWAY_BULLET_N from '../../node_modules/mta-subway-bullets/svg/n.svg'
import IMG_SUBWAY_BULLET_Q from '../../node_modules/mta-subway-bullets/svg/q.svg'
import IMG_SUBWAY_BULLET_R from '../../node_modules/mta-subway-bullets/svg/r.svg'
import IMG_SUBWAY_BULLET_W from '../../node_modules/mta-subway-bullets/svg/w.svg'
import IMG_SUBWAY_BULLET_J from '../../node_modules/mta-subway-bullets/svg/j.svg'
import IMG_SUBWAY_BULLET_Z from '../../node_modules/mta-subway-bullets/svg/z.svg'
import IMG_SUBWAY_BULLET_G from '../../node_modules/mta-subway-bullets/svg/g.svg'
import IMG_SUBWAY_BULLET_SIR from '../../node_modules/mta-subway-bullets/svg/sir.svg'
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

// Official color scheme
const official = {}
official['1'] = IMG_SUBWAY_BULLET_1
official['2'] = IMG_SUBWAY_BULLET_2
official['3'] = IMG_SUBWAY_BULLET_3
official['4'] = IMG_SUBWAY_BULLET_4
official['5'] = IMG_SUBWAY_BULLET_5
official['6'] = IMG_SUBWAY_BULLET_6
official['7'] = IMG_SUBWAY_BULLET_7
official['A'] = IMG_SUBWAY_BULLET_A
official['C'] = IMG_SUBWAY_BULLET_C
official['E'] = IMG_SUBWAY_BULLET_E
official['L'] = IMG_SUBWAY_BULLET_L
official['S'] = IMG_SUBWAY_BULLET_S
official['B'] = IMG_SUBWAY_BULLET_B
official['D'] = IMG_SUBWAY_BULLET_D
official['F'] = IMG_SUBWAY_BULLET_F
official['M'] = IMG_SUBWAY_BULLET_M
official['N'] = IMG_SUBWAY_BULLET_N
official['Q'] = IMG_SUBWAY_BULLET_Q
official['R'] = IMG_SUBWAY_BULLET_R
official['W'] = IMG_SUBWAY_BULLET_W
official['J'] = IMG_SUBWAY_BULLET_J
official['Z'] = IMG_SUBWAY_BULLET_Z
official['G'] = IMG_SUBWAY_BULLET_G
official['SIR'] = IMG_SUBWAY_BULLET_SIR

// Alternative: Vignelli color scheme bullets
const vignelli = {}
vignelli['1'] = IMG_SUBWAY_BULLET_V_1
vignelli['2'] = IMG_SUBWAY_BULLET_V_2
vignelli['3'] = IMG_SUBWAY_BULLET_V_3
vignelli['4'] = IMG_SUBWAY_BULLET_V_4
vignelli['5'] = IMG_SUBWAY_BULLET_V_5
vignelli['6'] = IMG_SUBWAY_BULLET_V_6
vignelli['7'] = IMG_SUBWAY_BULLET_V_7
vignelli['A'] = IMG_SUBWAY_BULLET_V_A
vignelli['C'] = IMG_SUBWAY_BULLET_V_C
vignelli['E'] = IMG_SUBWAY_BULLET_V_E
vignelli['L'] = IMG_SUBWAY_BULLET_V_L
vignelli['S'] = IMG_SUBWAY_BULLET_V_S
vignelli['B'] = IMG_SUBWAY_BULLET_V_B
vignelli['D'] = IMG_SUBWAY_BULLET_V_D
vignelli['F'] = IMG_SUBWAY_BULLET_V_F
vignelli['M'] = IMG_SUBWAY_BULLET_V_M
vignelli['N'] = IMG_SUBWAY_BULLET_V_N
vignelli['Q'] = IMG_SUBWAY_BULLET_V_Q
vignelli['R'] = IMG_SUBWAY_BULLET_V_R
vignelli['W'] = IMG_SUBWAY_BULLET_V_W
vignelli['J'] = IMG_SUBWAY_BULLET_V_J
vignelli['Z'] = IMG_SUBWAY_BULLET_V_Z
vignelli['G'] = IMG_SUBWAY_BULLET_V_G
vignelli['SIR'] = IMG_SUBWAY_BULLET_V_SIR

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
    <SettingsContext.Consumer>
      {({ SUBWAY_BULLET_OFFICIAL_COLORS }) => {
        if (SUBWAY_BULLET_OFFICIAL_COLORS) {
          return <img className={className.join(' ')} src={official[line]} alt={line} />
        }

        return <img className={className.join(' ')} src={vignelli[line]} alt={line} />
      }}
    </SettingsContext.Consumer>
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
