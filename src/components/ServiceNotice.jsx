import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SubwayBullet from './SubwayBullet'
import Icon from './Icon'
import './ServiceNotice.css'

/**
 * Given a string with bracket notation placeholders, e.g.
 *  "This is a {{string}}"
 * The bracket is replaced with a component and its contents are passed to the component
 * @param {string} string 
 */
function replaceStringWithReactComponent (string) {
  // Returns as-is if not a string
  if (typeof string !== 'string') return string

  const array = string.replace(/{{(.+?)}}/g, '|{{$1}}|').split('|')

  const thing = array.map((item, i) => {
    if (item.match(/^{{.+}}$/)) {
      const line = item.replace('{{', '').replace('}}', '')

      if (line.startsWith('link')) {
        const pieces = line.split(' ')
        const link = pieces[1]
        const text = pieces.splice(2).join(' ')

        // Link must stop propagation to prevent parent onClick handler from preventing navigation.
        return <a href={link} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.stopPropagation() }} key={i * 10}>{text}</a>
      } else if (line.startsWith('station')) {
        const [unused, id, ...text] = line.split(' ')
        return <Link to={`/station/${id}`} key={i * 10}>{text.join(' ')}</Link>
      }

      if (line === 'shuttle_bus') {
        return <Icon type="bus" key={i * 10} />
      } else if (line === 'isa') {
        return <Icon type="isa" key={i * 10} />
      } else {
        return <SubwayBullet line={line} small key={i * 10} />
      }
    } else if (item.match('<br>')) {
      return <br key={i * 10} />
    }

    return item
  })

  return thing
}

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function transformStatusSummary (text) {
  // Typography - should address variable whitespace
  // Also get rid of <br>
  const phase1 = text.trim().replace(/\s*&bull;\s*/g, ' • ').replace(/\s*-\s*(?!bound)/g, '\u200a–\u200a').replace(/<br>/g, '')

  // Replace image HTML with {{brackets}}
  const phase1b = phase1.replace(/<img src='images\/routes\/14px\//g, '{{').replace(/.(png|gif)' align='bottom' \/>/g, '}}')

  // Add newlines between things
  // Split on anything that is 2 or more spaces
  // Drop any new array items that are empty strings
  const phase2 = phase1b.split(/ {2,}/).filter(i => i !== '')
  // Then add <br /> tags in between each line in React
  for (let i = 0; i < phase2.length; i++) {
    if (i % 2 === 0 && i < phase2.length - 1) {
      phase2.splice(i + 1, 0, <br key={i + 1} />)
    }
  }

  // Turn title into bold text
  phase2[0] = <strong key={0}>{capitalizeFirstLetter(phase2[0].toLowerCase())}</strong>

  // Replace images with bullet components
  for (let i = 0; i < phase2.length; i++) {
    if (typeof phase2[i] === 'string') {
      phase2[i] = replaceStringWithReactComponent(phase2[i])
    }
  }

  // Original appends "more" to the end
  // phase2.push(' ... more')

  return phase2
}

function transformStatusDetail (text) {
  // Typography - should address variable whitespace
  const phase1 = text.trim().replace(/\s*&bull;\s*/g, ' • ').replace(/\s*-\s*(?!bound)/g, '\u200a–\u200a')

  // Replace image HTML with {{brackets}}
  const phase1b = phase1.replace(/<img src='images\/routes\/14px\//g, '{{').replace(/.(png|gif)' align='bottom' \/>/g, '}}')

  // Replace accessibility symbol
  const phase1c = phase1b.replace(/<img src='images\/ADA_WhlChr_small.gif'\s*\/?>/g, '{{isa}}')

  // Normalize things that look like links. Annotated regex:
  //    `<a `           An open bracket, a tag followed by a space denotes the beginning of anchor tag.
  //    `.*?`           Any other text can occur before href=
  //    `href=`         Beginning of link-to URL (note this does not check for a space before href=)
  //    `["']?`         URL may be surrounded by optional quotation marks
  //    `([\w\d:/_.\-=?#]*)`  All acceptable characters used in URL (may be missing some), captured as group $1
  //    `["']?`         Closing quotation marks: note this does not check for consistency with opening quote
  //    `.*?`           Any other text that occurs after URL
  //    `>`             Closing bracket
  //    `(.*?)`         Contents of <a> tag, can be anything, and optional, captured as group $2
  //    `<\/a>`         Closing </a> tag.
  const phase1d = phase1c.replace(/<a .*?href=["']?([\w\d:/_.\-=?#]*)["']?.*?>(.*?)<\/a>/g, (match, p1, p2) => {
    // Sometimes the text of the link has a <br> tag! We have to get rid of it.
    const text = p2.replace(/<br>/g, '')

    // If link matches a station ID, let's return a special tag
    if (p1.includes('http://web.mta.info/weekender/tileMap.html?staID=')) {
      const id = p1.split('=')
      return `{{station ${id[1]} ${text}}}`
    }

    return `{{link ${p1} ${text}}}`
  })

  // Special work with <br>
  // If string begins or ends with any amount of <br>, remove it
  // Otherwise surround it with | so it can be split on later
  const phase2 = phase1d.replace(/^(<br>)*/, '').replace(/(<br>)*$/, '').replace(/<br>/g, '|<br>|')

  // Replace images with bullet components
  const phase3 = replaceStringWithReactComponent(phase2)

  return phase3
}

export default class ServiceNotice extends Component {
  static propTypes = {
    status: PropTypes.shape({
      id: PropTypes.number,
      summary: PropTypes.string,
      details: PropTypes.string
    }),
    active: PropTypes.bool,
    togglable: PropTypes.bool
  }

  static defaultProps = {
    active: true,
    togglable: false
  }

  constructor (props) {
    super(props)

    this.state = {
      isActive: props.active
    }
  }

  handleClick = (event) => {
    event.preventDefault()

    // Toggles active state
    if (this.props.togglable) {
      this.setState({
        isActive: !this.state.isActive
      })
    }
  }

  render () {
    const { status } = this.props
    const { isActive } = this.state
    
    const classNames = ['service-notice']
    if (isActive) {
      classNames.push('service-notice-active')
    }
    if (this.props.togglable) {
      classNames.push('service-notice-interactive')
    }

    return (
      <article
        className={classNames.join(' ')}
        onClick={this.handleClick}
      >
        <p>
          {transformStatusSummary(status.summary)}
        </p>

        <p className="service-notice-details">
          {transformStatusDetail(status.details)}
        </p>
      </article>
    )
  }
}
