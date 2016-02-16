/* =====================
  Set up our map
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

/* =====================
  Lab 2, Part 2 - jQuery Events

  Asynchronous behavior - as we have seen - can be rather tricky to get right. The code that you
  write in callback functions is executed when a condition is met - *whenever that happens to be* -
  and not at the time it is bound.

  Consider the way we define an ajax call:
  $.ajax(someUrl).done(function(response) { console.log("I'm here!"; });

  Quite possibly, that's the first line of javascript in your file, but the function which logs "I'm
  here!" to the console simply won't fire until it is ready. (Obviously we don't want to do anything
  that requires response values until we actually have that response!) This is quite similar to the
  higher-order functions you've encountered in underscore in that your job is to define functions
  that will be called elsewhere.

  Events, too, are asynchronous and jQuery furnishes us with tools to register functions that
  we define on events of our choosing. Perhaps I want to log words of encouragement whenever someone
  clicks on a <p> element.
  It might look like this:
===================== */

var encourage = function() {
  var rand = Math.random();
  if (rand < 0.33) {
    console.log("You're the best");
  } else if (rand < 0.66) {
    console.log("Wow. You did it!");
  } else {
    console.log("You're a special, unique snowflake");
  }
};

$('p').click(encourage);

/* =====================
  Task 1: Make the above code work
    Change part2-jquery-events.html so that the event above can fire. Test that you've succeeded by
    seeing if the console.log statement fires when you suspect it should (review the use of jQuery
    selectors to get a sense of when/how the event above probably operates.

  Task 2: Pick a dataset; build a pipeline for filtering it
    Choose a dataset from the class repository. Write the ajax to grab it. Review the example (which
    is from week-4 lab 3) if you get stuck.

  Task 3: Design UI/UX
    Write input fields (refer to part1-jquery-selection if you get stuck) along with a
    button element (something as simple as <button>ButtonText</button> should work for our case).
    At the least, include one input field to be used in filtering your data.

  Task 4: Register An Event
    The event you register should fire when the button added in Task 3 is clicked. It should apply
    the filter you wrote to the data you've downloaded and plot the appropriate markers.

  // STRETCH GOALS
  Task 5: Experiments - OPTIONAL
    - Try to use an HTML5 color input (refer to lab2 part1) to color a Leaflet.CircleMarker
    - Add logic to tear markers down before adding more to the page
    - Instead of a `click` event, try binding to `change` events on input fields (https://api.jquery.com/change/)
      Remember to experiment from the console until you understand how this works! If done correctly,
      you should be able to update which markers are plotted on-the-fly as your inputs change
===================== */

