var map;
function init(){
  // initiate leaflet map
  map = new L.Map('cartodb-map', {
    center: [39.771652498023606,-86.15607261657715],
    zoom: 14
  })

  L.tileLayer('https://dnv9my2eseobd.cloudfront.net/v3/cartodb.map-4xtxp73f/{z}/{x}/{y}.png', {
    attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
  }).addTo(map);

  var layerUrl = 'https://shrej.carto.com/api/v2/viz/5cb44314-7d46-11e6-9ad6-0e8c56e2ffdb/viz.json';

  var info = L.control();

  info.onAdd = function (map) {
      this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
      this.update();
      return this._div;
  };

  // method that we will use to update the control based on feature properties passed
  info.update = function (props) {
      this._div.innerHTML = '<h4>Indianapolis Bike share stations</h4>Click any location for details</br>' + 'Data courtsey: <a href = "http://data1.indygis.opendata.arcgis.com/datasets/9c096fd62b8a4c7f8335556740c8ba23_2">IndyGIS</a>';
  };

  info.addTo(map);

  cartodb.createLayer(map, layerUrl)
    .addTo(map)
    .on('done', function(layer) {
    }).on('error', function() {
      //log the error
    });
}
