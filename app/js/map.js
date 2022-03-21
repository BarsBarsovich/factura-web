mapboxgl.accessToken =
  "pk.eyJ1IjoiYmFyczExODkiLCJhIjoiY2sydDk2bGxpMTViMjNpcWJieXR2YW03biJ9.gJoHbjoQT-xmMVDBHOI3Mg";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [30.385083,59.89424],
  zoom: 19,
  reverseGeocode: false
});

const marker2 = new mapboxgl.Marker()
  .setLngLat([30.385083,59.89424])
  .addTo(map);
  