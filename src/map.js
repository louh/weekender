import L from 'leaflet'
import 'leaflet-rastercoords'

const TILES = '/tiles/{z}/{x}/{y}.png'
const TILES_RETINA = '/tiles/{z}/{x}/{y}@2x.png'
const RASTER_IMAGE_SIZE = [
  8192, // original width of image
  8192  // original height of image
]
const INITIAL_VIEW = {
  lat: 33.57458,
  lng: -63.92257
}
const INITIAL_ZOOM = 3
const INITIAL_ZOOM_MOBILE = 1

let map
let rc

export function initMap (history) {
  return new Promise((resolve, reject) => {
    if (map) {
      resolve(map)
      return
    }

    map = L.map('map', {
      attributionControl: false,
      zoomControl: false,
      center: INITIAL_VIEW,
      zoom: (window.innerWidth > 600) ? INITIAL_ZOOM : INITIAL_ZOOM_MOBILE,
      maxBounds: L.latLngBounds(L.latLng(85.03100, -179.756927), L.latLng(-75.758940, 119.53125)),
      maxBoundsViscosity: 0.5
    })
  
    L.tileLayer(window.devicePixelRatio > 1 ? TILES_RETINA : TILES, {
      attribution: false,
      maxZoom: 5,
      minZoom: 1,
      noWrap: true
    }).addTo(map)
  
    // Proof of concept markers
    // Use leaflet-rastercoords to convert pixel coordinates to map coordinates
    rc = new L.RasterCoords(map, RASTER_IMAGE_SIZE)
    const allMarkers = drawMarkers(map, rc, history)
  
    map.on('zoomend', function() {
      const currentZoom = map.getZoom()
      const radius = getMarkerRadiusForZoom(currentZoom)
  
      // Resize the marker based on zoom level
      allMarkers.forEach((marker) => {
        marker.setRadius(radius)

        // At low zooms, hide the dots
        if (currentZoom <= 1) {
          marker.setStyle({ fillOpacity: 0 })
        } else {
          marker.setStyle({ fillOpacity: 1 })
        }
      })
    })

    // Expose globally for debugging
    window.map = map

    resolve(map)
  })
}

export function setInitialView (history) {
  const zoom = (window.innerWidth > 600) ? INITIAL_ZOOM : INITIAL_ZOOM_MOBILE
  initMap(history).then(map => map.setView(INITIAL_VIEW, zoom, { animate: false }))
}

export function setMapViewToRasterCoords (x, y, zoom = 4, history) {
  initMap(history).then((map) => {
    map.setView(rc.unproject([x * 2, y * 2]), zoom, { animate: false })
  })
}

// Returns 1 for zoom 2, 2 for zoom 3, 4 for zoom 4, 8 for zoom 5
function getMarkerRadiusForZoom (zoom) {
  const radius = Math.max(Math.pow(2, (zoom - 2)), 1)
  if (zoom === 5) {
    return radius + 1 // Overlay black "rim" that continues to be visible
  }
  return radius
}

function drawMarkers (map, rc, history) {
  const radius = getMarkerRadiusForZoom(map.getZoom())

  /* global stationRouteMapCoordinates */
  // There's also `stationMapCoordinates`, but don't use that
  // Convert `stationRouteMapCoordinates` to a real array (it uses
  // string IDs as keys, non-standard behavior for arrays)
  const stations = Object.entries(stationRouteMapCoordinates)

  return stations.map((data) => {
    const [ id, coords ] = data
    const [ stationId, lineId ] = id.split('_')
    const coordData = coords.split(',')
    let x = Number.parseInt(coordData[0], 10)
    let y = Number.parseInt(coordData[1], 10)

    // TODO: some special-case markers (e.g. 7-line) are square
    const classNames = ['map-marker']

    // Define line-specific colors appearance
    switch (lineId.toLowerCase()) {
      case '1':
      case '2':
      case '3':
        classNames.push('map-marker-line-red')
        break
      case '4':
      case '5':
      case '6':
        classNames.push('map-marker-line-green')
        break
      case '7':
        classNames.push('map-marker-line-purple')
        break
      case 'a':
      case 'c':
      case 'e':
      case 'sir':
        classNames.push('map-marker-line-blue')
        break
      case 'l':
        classNames.push('map-marker-line-lightgray')
        break
      case 's':
        classNames.push('map-marker-line-gray')
        break
      case 'b':
      case 'd':
      case 'f':
      case 'm':
        classNames.push('map-marker-line-orange')
        break
      case 'n':
      case 'q':
      case 'r':
      case 'w':
        classNames.push('map-marker-line-yellow')
        break
      case 'j':
      case 'z':
        classNames.push('map-marker-line-brown')
        break
      case 'g':
        classNames.push('map-marker-line-lightgreen')
        break
    }

    // Look for blinking dots
    const blinking = weekendstatus.filter((item) => item.includes(`${lineId},${stationId},${x},${y}`) && item.endsWith('N,'))
    if (blinking.length > 0) {
      classNames.push('map-marker-flashing')
    }

    // Classname for station id
    classNames.push('map-marker__' + stationId)

    // Special case: some dots in the original data are given the
    // wrong coordinates, so let's fix it here.
    // 14th St Union Sq NQRW/456 should all be at the same y-axis
    if (['10054_4', '10054_5', '10054_6', '10054_N', '10054_Q', '10054_R', '10054_W'].includes(id)) {
      y = 1837
    }

    // Whitehall St-South Ferry W needs to have the same x-axis as R line
    if (id === '18643_W') {
      x = 968
    }

    const latlng = rc.unproject([x * 2, y * 2])
    const marker = L.circleMarker(latlng, {
      radius: radius,
      // Stroke - invisible stroke increases "hit area"
      color: 'white',
      opacity: 0,
      weight: 5,
      // Fill
      fillColor: 'black',
      fillOpacity: 1,
      className: classNames.join(' ')
    }).addTo(map)

    // Store data on the marker
    marker.data = {
      stationId: stationId,
      line: lineId,
      originalId: id,
      data: data[1]
    }

    marker.on('click', (event) => {
      // Redirect to station, done by passing react-router's `history` prop
      // all the way to this function. Not ideal. TODO: refactor
      const stationId = event.target.data.stationId
      history.push(`/station/${stationId}`)
    })

    marker.on('mouseover', (event) => {
      const stationId = event.target.data.stationId
      const paths = document.querySelectorAll('path.map-marker__' + stationId)
      paths.forEach((path) => {
        path.classList.add('map-marker-highlight')
      })
    })

    marker.on('mouseout', (event) => {
      const paths = document.querySelectorAll('path.map-marker')
      paths.forEach((path) => {
        path.classList.remove('map-marker-highlight')
      })
    })

    return marker
  })
}
