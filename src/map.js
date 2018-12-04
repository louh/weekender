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

let map
let rc

export function initMap () {
  return new Promise((resolve, reject) => {
    if (map) {
      resolve(map)
      return
    }

    map = L.map('map', {
      attributionControl: false,
      zoomControl: false,
      center: INITIAL_VIEW,
      zoom: INITIAL_ZOOM,
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
    const testcoords = rc.unproject([429 * 2, 242 * 2])
    const circleMarker = L.circleMarker(testcoords, {
      radius: getMarkerRadiusForZoom(map.getZoom()),
      stroke: false,
      color: 'black',
      fillOpacity: 1,
      className: 'map-marker'
    }).addTo(map)
  
    map.on('zoomend', function() {
      const currentZoom = map.getZoom()
  
      // Resize the marker based on zoom level
      circleMarker.setRadius(getMarkerRadiusForZoom(currentZoom))
  
      // At low zooms, hide the dots
      if (currentZoom <= 1) {
        circleMarker.setStyle({ fillOpacity: 0 })
      } else {
        circleMarker.setStyle({ fillOpacity: 1 })
      }
    })
  
    map.on('click', (event) => {
      console.log(event.latlng)
    })

    resolve(map)
  })
}

export function setInitialView () {
  initMap().then(map => map.setView(INITIAL_VIEW, INITIAL_ZOOM, { animate: false }))
}

export function setMapViewToRasterCoords (x, y, zoom = 4) {
  initMap().then((map) => {
    map.setView(rc.unproject([x * 2, y * 2]), zoom, { animate: false })
  })
}

// Returns 1 for zoom 2, 2 for zoom 3, 4 for zoom 4, 8 for zoom 5
function getMarkerRadiusForZoom (zoom) {
  return Math.max(Math.pow(2, (zoom - 2)), 1)
}
