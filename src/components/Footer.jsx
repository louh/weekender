import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default class Footer extends React.Component {
  renderWeekendDates () {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]

    const date = new Date()
    const wkday = date.getDay()  
    let intdaydiff = 0

    if (wkday == 0) intdaydiff = -2
    if (wkday == 1) intdaydiff = 4   

    //uncomment the following lines for long weekend and set weekend start date - FRIDAY
    //var checkDate = Date.parse("8/31/2018 5:00:00 PM");
    //if (date >= checkDate){
    //	if (wkday == 1) 
    //		intdaydiff = -3;
    //}

    if (wkday == 2) intdaydiff = 3
    if (wkday == 3) intdaydiff = 2
    if (wkday == 4) intdaydiff = 1
    if (wkday == 5) intdaydiff = 0
    if (wkday == 6) intdaydiff = -1
    
    const d1 = new Date()
    d1.setDate(d1.getDate() + intdaydiff)
  
    const d2 = new Date()
    d2.setDate(d2.getDate() + intdaydiff+3)   //regular weekend    
    //d2.setDate(d2.getDate() + intdaydiff+4);   //long weekend sat, sun, mon or 3 days 
  
    const y = d2.getFullYear()

    return d1.getDate() + ' ' + months[d1.getMonth()] + '\u200a–\u200a' + d2.getDate() + ' ' + months[d2.getMonth()] + ' ' + y
  }

  render () {
    return (
      <footer>
        <div className="footer-left">
          <Link to="/legend">Legend</Link>
        </div>
        <div className="footer-middle">
          {this.renderWeekendDates()}
        </div>
        <div className="footer-right hidden">
          <a href="http://web.mta.info/faqs.htm" target="_blank" rel="noopener noreferrer">
            Tell us what you think
          </a>
        </div>
      </footer>
    )
  }
}
