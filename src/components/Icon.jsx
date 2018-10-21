import React from 'react'
import PropTypes from 'prop-types'

import ICON_AIGA_BUS from '../../images/aiga_bus_clear.svg'

const Icon = (props) => {
  switch (props.type) {
    case 'bus':
      return <img src={ICON_AIGA_BUS} className="subway-bullet-small" alt="[bus icon]" />
    default:
      break
  }
}

Icon.prototype.propTypes = {
  type: PropTypes.string.isRequired
}

export default Icon