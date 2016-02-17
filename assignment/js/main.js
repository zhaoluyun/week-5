/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */
$(document).ready(function() {
$( "button" ).click(function() {
var url = $('#text-input1').val();
var downloadData = $.ajax(url);
var parseData = function(value) {
 return JSON.parse(value);
};

var makeMarkers = function(parsed) {
  var mark = _.map(parsed, function(value){
  return L.marker([value[$('#text-input2').val()],value[$('#text-input3').val()]]);
  });
  return mark;
};

var plotMarkers = function(mark) {
  _.each(mark, function(value){
    value.addTo(map);
  });
};


var removeMarkers = function(markers) {
_.each(markers, function(value){
  map.removeLayer(value);
});
};


downloadData.done(function(data) {
  var parsed = parseData(data);
  var markers = makeMarkers(parsed);
  plotMarkers(markers);
//  removeMarkers(markers);
});
});

});
/* =====================
 Leaflet setup
===================== */

var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
