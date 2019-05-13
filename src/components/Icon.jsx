import React from 'react'
import PropTypes from 'prop-types'

import ICON_AIGA_BUS from '../images/aiga_bus_clear.svg'
import INTERNATIONAL_SYMBOL_ACCESSIBILITY from '../images/isa.svg'

const Icon = (props) => {
  switch (props.type) {
    case 'bus':
      return <img src={ICON_AIGA_BUS} className="subway-bullet-small" alt="[bus icon]" />
    case 'isa':
      return <img src={INTERNATIONAL_SYMBOL_ACCESSIBILITY} className="icon-isa" alt="[International Symbol of Accessibility]" />
    default:
      break
  }

  return null
}

Icon.prototype.propTypes = {
  type: PropTypes.string.isRequired
}

export default Icon
