import React, { Fragment } from 'react'
import { SettingsContext } from './App'
import './Legend.css'

import LEGEND_STOP from '../images/legend/subway_stop.svg'
import LEGEND_NO_STOP from '../images/legend/no_stop.svg'
import LEGEND_NO_WEEKEND_SERVICE from '../images/legend/no_weekend_service.svg'
import LEGEND_PLANNED_WORK from '../images/legend/planned_work.svg'
import LEGEND_STOP_BYPASSED from '../images/legend/stop_bypassed.svg'
import LEGEND_PEDESTRIAN_LINK from '../images/legend/pedestrian_link.svg'
import LEGEND_EXPRESS_LABEL from '../images/legend/express_stop_label.svg'
import LEGEND_LOCAL_LABEL from '../images/legend/local_stop_label.svg'

const Legend = (props) => (
  <Fragment>
    <h2>Legend</h2>
    <hr />
    <section>
      <h3>Normal service</h3>

      <table className="legend">
        <tbody>
          <tr>
            <td>
              <img
                src={LEGEND_STOP}
                width={44}
                height={10}
                alt="Line with subway stop 'dot' indicator"
              />
            </td>
            <td>Subway stop</td>
          </tr>
          <tr>
            <td>
              <img
                src={LEGEND_NO_STOP}
                width={44}
                height={10}
                alt="Line without stop 'dot'"
              />
            </td>
            <td>No dot, no stop</td>
          </tr>
          <tr>
            <td>
              <img
                src={LEGEND_NO_WEEKEND_SERVICE}
                width={44}
                height={10}
                alt="Grayed-out line"
              />
            </td>
            <td>No weekend service</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h3>Planned work</h3>

      <table className="legend">
        <tbody>
          <tr>
            <td>
              <img
                src={LEGEND_PLANNED_WORK}
                width={44}
                height={10}
                alt="Line with flashing stop 'dot'"
              />
              <SettingsContext.Consumer>
                {({ toggleSettingsScreen }) => (
                  <div
                    className="easter-egg-trigger"
                    aria-hidden={true}
                    onClick={toggleSettingsScreen}
                  />
                )}
              </SettingsContext.Consumer>
            </td>
            <td>Planned work</td>
          </tr>
          <tr>
            <td>
              <img
                src={LEGEND_STOP_BYPASSED}
                width={44}
                height={10}
                alt="Line with grayed-out stop 'dot'"
              />
            </td>
            <td>Stop bypassed</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h3>Free transfer</h3>

      <table className="legend">
        <tbody>
          <tr>
            <td>
              <img
                src={LEGEND_PEDESTRIAN_LINK}
                width={44}
                height={66}
                style={{ marginTop: '-3px' }}
                alt="Diagram of stops on different lines connected by pedestrian link"
              />
            </td>
            <td>Via pedestrian link</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h3>Station names</h3>

      <table className="legend">
        <tbody>
          <tr>
            <td>
              <img 
                src={LEGEND_EXPRESS_LABEL}
                width={44}
                height={10}
                className="legend-station-label"
                alt="Bold weight station label"
              />
            </td>
            <td>Express stop<br />Bold type</td>
          </tr>
          <tr>
            <td>
              <img
                src={LEGEND_LOCAL_LABEL}
                width={44}
                height={10}
                className="legend-station-label"
                alt="Normal weight station label"
              />
            </td>
            <td>Local stop<br />Light type</td>
          </tr>
        </tbody>
      </table>
    </section>
  </Fragment>
)

export default Legend
