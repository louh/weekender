import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from './SearchIcon'
import SubwayBullet from './SubwayBullet'
import './Stations.css'

const masterList = '1 Av:10339:L::2 Av:10189:F::3 Av:10340:L::3 Av - 138 St:18086:6::3 Av - 149 St:18062:2;5::4 Av-9 St:10266:F;G;R::5 Av:10113:7::5 Av-53 St:10254:E;M::5 Av-59 St:18667:N;R;W::6 Av:18129:L::7 Av:10267:F;G::7 Av:10212:E;B;D::7 Av:10218:B;Q::8 Av:10343:L::8 Av:10360:N::8 St NYU:18650:R;W;N::9 Av:10180:D::14 St:10135:A;C;E::14 St:30:1;2;3::14 St:18064:F;M::14 St - Union Sq:10054:4;5;6;L;N;Q;R;W::15 St Prospect Park:10268:F;G::18 Av:10272:F::18 Av:10358:N::18 Av:10187:D::18 St:29:1;2::20 Av:10188:D::20 Av:10357:N::21 St:10284:G::21 St Queensbridge:10199:F::23 St:10134:C;E::23 St:5345:F;M::23 St:28:1;2::23 St:10062:6::23 St:18656:R;W;N::25 Av:10177:D::25 St:10213:R::28 St:10063:6::28 St:27:1::28 St:18658:R;W;N::30 Av:10378:N;W::33 St:10064:6::33 St Rawson St:10108:7::34 St - Herald Sq:10194:B;D;F;M;N;Q;R;W::34 St Penn Stn:26:1;2;3::34 St Penn Stn:18239:A;C;E::34 St-Hudson Yards:31271:7::36 Av:10376:N;W::36 St:10250:M;R::36 St:10181:D;N;R::39 Av:10375:N;W::40 St Lowery St:10107:7::42 St Bryant Park:10195:B;D;F;M::42 St Port Authority Bus Terminal:10132:A;C;E::45 St:10363:R::46 St:10248:M;R::46 St Bliss St:10106:7::47-50 Sts Rockefeller Center:10196:B;D;F;M::49 St:10372:N;R;W::50 St:18538:C;E::50 St:10183:D::50 St:24:1::51 St:10065:6::52 St:10105:7::53 St:10362:R::55 St:10184:D::57 St:10197:F::57 St-7Av:18664:N;Q;R;W::59 St:10361:N;R::59 St Columbus Circle:18189:1;A;C;B;D::61 St Woodside:10104:7::62 St:10457:D::63 Dr-Rego Park:10242:M;R::65 St:10246:M;R::66 St Lincoln Center:22:1::67 Av:10241:M;R::68 St Hunter College:10066:6::69 St:10103:7::71 St:10185:D::72 St:10130:B;C::72 St:21:1;2;3::72 St:31663:Q::74 St-Broadway:10102:7::75 Av:10239:E;F::75 St Elderts Lane:18132:J;Z::77 St:10383:R::77 St:10067:6::79 St:20:1::79 St:10186:D::80 St:10156:A::81 St-Museum of Natural History:10129:B;C::82 St-Jackson Hts:10101:7::85 St Forest Parkway:10299:J::86 St:10382:R::86 St:10353:N::86 St:31664:Q::86 St:10128:B;C::86 St:19:1::86 St:10051:4;5;6::88 St:10157:A::90 St-Elmhurst Av:10100:7::96 St:10127:B;C::96 St:10068:6::96 St:18:1;2;3::96 St:31665:Q::103 St:17:1::103 St:10069:6::103 St:10126:C;B::103 St-Corona Plaza:10098:7::104 St:10170:A::104 St:18065:J;Z::110 St:10070:6::111 St:10097:7::111 St:10169:A::111 St:10296:J::116 St:10124:B;C::116 St:10071:6::116 St:10005:2;3::116 St Columbia University:15:1::121 St:10295:J;Z::125 St:14:1::125 St:10004:2;3::125 St:10050:4;5;6::125 St:10123:A;C;B;D::135 St:10122:B;C::135 St:10003:2;3::137 St City College:13:1::138 St-Grand Concourse:10049:4;5::145 St:10035:3::145 St:12:1::145 St:10121:A;C;B;D::149 St-Grand Concourse:10002:2;4;5::155 St:10120:C::155 St:10211:B;D::157 St:11:1::161 St-Yankee Stadium:10048:4;B;D::163 St Amsterdam Av:10119:C::167 St:10210:B;D::167 St:10047:4::168 St:18577:1;A;C::169 St:10257:F::170 St:10046:4::170 St:10209:B;D::174 St:9995:2;5::174-175 Sts:10208:B;D::175 St:10118:A::176 St:10044:4::181 St:9:1::181 St:10117:A::182-183 Sts:10206:B;D::183 St:10042:4::190 St:10116:A::191 St:8:1::207 St:6:1::215 St:5:1::219 St:9987:2;5::225 St:9986:2;5::231 St:3:1::233 St:9985:2;5::238 St:2:1::Alabama Av:10306:J::Allerton Av:9990:2;5::Annadale:15042:SIR::Aqueduct North Conduit Av:10159:A::Aqueduct Racetrack:30368:A::Arthur Kill:31666:SIR::Astor Place:10061:6::Astoria Blvd:10379:N;W::Astoria Ditmars Blvd:10380:N;W::Atlantic Av-Barclays Ctr:10202:D;N;R::Atlantic Av-Barclays Ctr:10013:2;3;4;5;B;Q::Atlantic Av:10327:L::Avenue H:10225:Q::Avenue I:10273:F::Avenue J:10226:Q::Avenue M:10227:Q::Avenue N:10275:F::Avenue P:10276:F::Avenue U:10278:F::Avenue U:10354:N::Avenue U:10229:Q::Avenue X:10279:F::Bay 50 St:10176:D::Bay Pkwy:10178:D::Bay Pkwy:10274:F::Bay Pkwy:10356:N::Bay Ridge 95 St:18130:R::Bay Ridge Av:10384:R::Bay Terrace:15039:SIR::Baychester Av:10073:5::Beach 25 St:10166:A::Beach 36 St:10165:A::Beach 44 St:10164:A::Beach 60 St:10163:A::Beach 67 St:10162:A::Beach 90 St:10174:A;S::Beach 98 St:10173:A;S::Beach 105 St:10172:A;S::Bedford Av:10338:L::Bedford Park Blvd:10203:B;D::Bedford Pk Blvd Lehman College:18023:4::Bedford-Nostrand Avs:10291:G::Bergen St:10263:F;G::Bergen St:10014:2;3::Beverley Rd:10222:Q::Beverly Rd:10022:2;5::Bklyn Br City Hall:10055:4;5;6::Bleecker St:10060:6::Borough Hall:10010:2;3;4;5::Botanic Garden:10282:S::Bowery:10317:J;Z::Bowling Green:10058:4;5::Briarwood:10556:E;F::Brighton Beach:10232:B;Q::Broad Channel:10161:A;S::Broad St:10321:J;Z::Broadway:10288:G::Broadway:10377:N;W::Broadway Jctn:18173:A;C;J;Z;L::Bronx Park East:9992:2;5::Brook Av:10093:6::Buhre Av:10078:6::Burke Av:9989:2;5::Burnside Av:10043:4::Bushwick Av Aberdeen St:10328:L::Broadway-Lafayette St:10190:B;D;F;M::Canal St:10137:A;C;E::Canal St:33:1::Canal St:18085:6::Canal St:10318:J;Z::Canal St:18639:N;Q;R;W::Canarsie Rockaway Pkwy:10322:L::Carroll St:10264:F;G::Castle Hill Av:10082:6::Cathedral Pkwy (110 St):16:1::Cathedral Pkwy (110 St):10125:B;C::Central Av:10350:M::Central Park North (110 St):10006:2;3::Chambers St:35:1;2;3::Chambers St:10138:A;C::Chambers St:10319:J;Z::Chauncey St:10308:J;Z::Christopher St Sheridan Sq:31:1::Church Av:10021:2;5::Church Av:10221:B;Q::Church Av:10270:F;G::City Hall:18646:R;W::Clark St:10009:2;3::Classon Av:10292:G::Cleveland St:10304:J::Clifton:15034:SIR::Clinton-Washington Avs:10293:G::Clinton-Washington Avs:10144:C::Coney Island Stillwell Av:10175:D;F;N;Q::Cortelyou Rd:10223:Q::Cortlandt St:10459:R;W::WTC Cortlandt:36:1::Court Sq:10283:7;G::Court Sq 23 St:10252:E;M::Court St:10352:R::Crescent St:10302:J;Z::Crown Heights Utica Av:10027:3;4::Cypress Av:10092:6::Cypress Hills:10301:J::DeKalb Av:10332:L::DeKalb Av:10201:B;Q;R::Delancey St Essex St:10260:F;M;Z::Ditmas Av:10271:F::Dongan Hills:15035:SIR::Dyckman St:10115:A::Dyckman St:7:1::E 143 St St Mary&rsquo;s St:10091:6::E 149 St:10090:6::E 180 St:9993:2;5::East 105 St:10323:L::East Broadway:10261:F::Eastchester Dyre Av:10072:5::Eastern Pkwy Brooklyn Museum:10016:2;3::Elder Av:10086:6::Elmhurst Av:10245:M;R::Eltingville:15041:SIR::Euclid Av:10154:A;C::Far Rockaway Mott Ave:18131:A::Flatbush Av Brooklyn College:10024:2;5::Flushing Av:10312:M;J::Flushing Av:10289:G::Flushing-Main St:10095:7::Fordham Rd:10041:4::Fordham Rd:10205:B;D::Forest Av:10346:M::Forest Hills-71 Av:10240:E;F;M;R::Fort Hamilton Pkwy:10182:D::Fort Hamilton Pkwy:10359:N::Fort Hamilton Pkwy:10269:F;G::Franklin Av:10145:C;S::Franklin Av:10017:2;3;4;5::Franklin St:34:1::Freeman St:9996:2;5::Fresh Pond Rd:10345:M::Fulton St:10294:G::Fulton St:10320:J;Z::Fulton St:18242:2;3::Fulton St:10139:4;5;A;C::Gates Av:10557:J;Z::Graham Av:10337:L::Grand Army Plaza:10015:2;3::Grand Av Newtown:10244:M;R::Grand Central 42 St:10053:4;5;6;7;S::Grand St:10200:B;D::Grand St:10336:L::Grant Av:10155:A::Grant City:15037:SIR::Grasmere:14998:SIR::Great Kills:15040:SIR::Greenpoint Av:10285:G::Gun Hill Rd:10074:5::Gun Hill Rd:9988:2;5::Halsey St:10309:J::Halsey St:10330:L::Harlem 148 St:10036:3::Hewes St:10314:M;J::High St:10140:A;C::Houston St:32:1::Howard Beach JFK Airport:10160:A::Hoyt Schermerhorn:10142:A;C;G::Hoyt St:10011:2;3::Huguenot:15043:SIR::Hunters Point Av:10111:7::Hunts Point Av:10088:6::Intervale Av:9998:2;5::Inwood 207 St:10114:A::Jackson Av:10000:2;5::Jackson Hts Roosevelt Av:10460:E;F;M;R::Jamaica Center Parsons/Archer:10235:E;J;Z::Jamaica Van Wyck:10237:E::Jamaica-179 St:10256:F::Jay St MetroTech:10141:A;C;F;R::Jefferson Av:15036:SIR::Jefferson St:10333:L::Junction Blvd:10099:7::Junius St:10031:3::Kew Gardens Union Turnpike:10238:E;F::Kings Hwy:10228:B;Q::Kings Hwy:10355:N::Kings Hwy:10277:F::Kingsbridge Rd:10204:B;D::Kingsbridge Rd:10040:4::Kingston Av:10026:3::Kingston-Throop Avs:10147:C::Knickerbocker Av:10349:M::Kosciuszko St:10310:J::Lafayette Av:10143:C::Lex Av-53 St:10253:E;M::Lexington Av 59 St:18190:4;5;6;N;R;W::Lexington Av 63 St:10558:F;Q::Liberty Av:10151:C::Livonia Av:10325:L::Longwood Av:10089:6::Lorimer St:10461:L::Lorimer St:10313:M;J::Marble Hill-225 St:4:1::Marcy Av:10315:M;J;Z::Metropolitan Av:10287:G::Mets-Willets Point:10096:7::Middle Village Metropolitan Av:10344:M::Middletown Rd:10079:6::Montrose Av:10335:L::Morgan Av:10334:L::Morris Park:10076:5::Morrison Av Soundview:10085:6::Mosholu Pkwy:10038:4::Mt Eden Av:10045:4::Myrtle Av:18134:M;J;Z::Myrtle-Willoughby Avs:10290:G::Myrtle-Wyckoff Avs:10331:M;L::Nassau Av:10286:G::Neck Rd:18563:Q::Neptune Av:10280:F::Nereid Av:9984:2;5::Nevins St:10012:2;3;4;5::New Dorp:9454:SIR::New Lots Av:10034:3::New Lots Av:10324:L::New Utrecht Av:10179:N::Newkirk Plaza:10224:B;Q::Newkirk Av:10023:2;5::Northern Blvd:10247:M;R::Norwood 205 St:10217:D::Norwood Av:10303:J;Z::Nostrand Av:10146:A;C::Nostrand Av:10025:3::Oakwood Heights:15038:SIR::Ocean Pkwy:10233:Q::Old Town:14999:SIR::Ozone Park Lefferts Blvd:10168:A::Park Pl:10007:2;3::Park Pl:10281:S::Parkchester:10083:6::Parkside Av:10220:Q::Parsons Blvd:10258:F::Pelham Bay Park:10077:6::Pelham Pkwy:10075:5::Pelham Pkwy:9991:2;5::Pennsylvania Av:10032:3::Pleasant Plains:15046:SIR::President St:10018:2;5::Prince St:18648:R;W;N::Princes Bay:15045:SIR::Prospect Av:9999:2;5::Prospect Av:10214:R::Prospect Park:10219:B;Q;S::Queens Plaza:10251:E;M;R::Queensboro Plaza:10109:7;N;W::Ralph Av:10149:C::Rector St:37:1::Rector St:18644:R;W::Richmond Valley:17532:SIR::Rockaway Av:10030:3::Rockaway Av:10150:C::Rockaway Blvd:10158:A::Rockaway Park Beach 116 St:10171:A;S::Roosevelt Island:10198:F::St Lawrence Av:10084:6::Saratoga Av:10029:3::Seneca Av:10347:M::Sheepshead Bay:10231:B;Q::Shepherd Av:10153:C::Simpson St:9997:2;5::Smith 9 Sts:10265:F;G::South Ferry:38:1::Spring St:10059:6::Spring St:10136:C;E::Steinway St:10249:M;R::Sterling St:10019:2;5::St George:17668:SIR::Stapleton:14996:SIR::Sutphin Blvd:10259:F::Sutphin Blvd-Archer Av JFK Airport:10236:E;J;Z::Sutter Av:10326:L::Sutter Av Rutland Rd:10028:3::Times Sq 42 St:25:1;2;3;7;N;Q;R;W;S::Tompkinsville:14995:SIR::Tottenville:15049:SIR::Tremont Av:10207:B;D::Union St:18192:R::Utica Av:10148:A;C::Van Cortlandt Park 242 St:1:1::Van Siclen Av:10033:3::Van Siclen Av:10152:C::Van Siclen Av:10305:J;Z::Vernon Blvd Jackson Av:10112:7::W 4 St Wash Sq:10191:A;C;E;B;D;F;M::W 8 St - NY Aquarium:10234:F;Q::Wakefield-241 St:9983:2::Wall St:10008:2;3::Wall St:10057:4;5::West Farms Sq East Tremont Av:9994:2;5::Westchester Sq East Tremont Av:18063:6::Whitehall St-South Ferry:18643:R;W::Whitlock Av:10087:6::Wilson Av:10329:L::Winthrop St:10020:2;5::Woodhaven Blvd:10243:M;R::Woodhaven Blvd:10298:J;Z::Woodlawn:10037:4::World Trade Center:10255:E::York St:10262:F::Zerega Av:10081:6'
const masterArray = masterList.split('::')

export default class Stations extends Component {
  constructor (props) {
    super(props)

    this.inputEl = React.createRef()
  }

  componentDidMount () {
    this.inputEl.current.focus()
  }

  /**
   * Replaces inconsistent dashes between multiple parts of a station name
   * with a more consistent en-dash divider.
   */
  cleanUpStationLabel = (label) => {
    // Also, there is a stray &rsquo; which we just convert to unicode here
    return label.replace(/\s?-\s?/, '\u200a–\u200a').replace('&rsquo;', '’')
  }

  renderBullets = (bullets) => {
    const bulletList = bullets.split(';')
    return bulletList.map((line) => <SubwayBullet line={line} small key={line} />)
  }

  renderStationList = () => {
    return masterArray.map((thing) => {
      const station = thing.split(':')
      const [ label, id, bullets ] = station
      return (
        <li key={id}>
          <Link to={`/station/${id}`}>
            <span className="station-list-label">
              {this.cleanUpStationLabel(label)}
            </span>
            <span className="station-list-bullets">
              {this.renderBullets(bullets)}
            </span>
          </Link>
        </li>
      )
    })
  }

  render () {
    return (
      <Fragment>
        <h2>All Stations <span className="heading-instructions">Select one for details</span></h2>

        <div className="search-input">
          <label htmlFor="search-input" className="search-input-label">
            <SearchIcon className="search-icon" />
          </label>
          <input id="search-input" type="text" placeholder="Station name" ref={this.inputEl} />
        </div>

        <ul className="station-list">
          {this.renderStationList()}
        </ul>
      </Fragment>
    )
  }
}
