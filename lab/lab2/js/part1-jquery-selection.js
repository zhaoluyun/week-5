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
  Lab 2, Part 1 - jQuery Selectors

  In this course, we've set our focus on HTML, CSS, & Javascript as they are useful in the construction
  of mapping applications. One thing that isn't yet clear is how to handle user input. This is difficult
  because we've got to expand our thinking to span HTML and javascript - the fields with which
  a users can interact are ultimately specified in HTML <input> elements. Luckily, we've already seen
  how CSS solves this problem (with the use of selectors) and can extend that syntax into our work
  with javascript.

  A few reminders about the basic forms of CSS selector:
  1. The simplest selector case is specification of a tag directly. The selector "p" will grab all
     <p> elements whereas "h1" will grab all <h1> elements.

  2. An HTML tag's "class" is referenced through a prefixed period. A page that has multiple movie
     div elements in which there is a title header might look like this:
     <div>
       <h4 class="movie-title"></h4>
       <div class="movie-detail"></div>
     </div>
     On this page, ".movie-title" can be used to grab all of the tags with a "movie-title" class.

  3. An HTML tag's "id" is referenced with a hashtag. The selector "#winning" will grab the element
     (element is singular here - an ID should always be unique to the DOM it sits on) where
     <tag id="winning">.
     For example:
     <div>
       <p id="winning">Charlie Sheen</p>
     </div>
     On this simple DOM, "#winning" is the <p> tag with "Charlie Sheen".

  4. CSS selectors can be combined to refine our meaning. In the movie-title example above, we can
     find all and only h4 elements with the class "movie-title" with the selector "h4.movie-title"
     which is, in english, "h4 elements with the class 'movie-title'".

  In jQuery, we use this syntax as well. It looks like this: $(*selector*); We could, for instance,
  grab all h4 movie-titles with $('h4.movie-title');

  All of the exercises in this portion of lab 2 involve reading and writing to HTML inputs with the
  help of jQuery selectors and associated methods for querying the DOM. The method you'll use again
  and again on this lab is jQuery's `val`. With no arguments, it queries an input value. Provided
  a value as an argument, it will actually set that value in the HTML DOM.

  Example:
    Reading: $(someSelector).val();
    Writing: $(someSelector).val(valueToSet);

  Task 1: Change HTML to create useful labels for our UI
    Let's change the labels of our input elements so that they're meaningful. We don't want the
    page to say 'This is the first text input'. Instead we should imagine meaningful inputs and label
    accordingly. Be sure that the labels you choose make sense for the element types provided. A
    checkbox has only two states: on and off. This is useful for boolean values (e.g. isDoctor,
    hasHair). Text fields allow for more complex representations (e.g. name, address). Numeric fields
    are specialized to only allow numeric values (possible meanings include: ageInYears, pointsScored).
    The color field is specialized to use HTML5 colorpickers provided by each browser and store data
    as a string in hexadecimal color format (i.e. '#ffffff'); suitables representations include e.g.
    hairColor, markerColor.

    Try to imagine a single object that you're describing. For example, if your object is "person",
    you might want to include a name, an address, an age, a couple of boolean characteristics, and a
    favorite color. Don't spend too much time on thinking about the perfect object to represent with
    this form, anything will do.

  Task 2: Setting input values
    Fill out the input form with some imagined values. If you chose to make the form about the
    properties of people, the name might be 'bob' and the favorite color could be green (hint: you'll
    want to get formatting exactly right to set a color field; experiment in the console to see what
    the color you'll specify should look like).
    Do all of this work in the body of the function `fillOutForm`

  Task 3: Getting input values
    Write the code necessary to read from your input form and return a javascript object (with keys
    to clarify the meaning of each value) that has all the data that's stored in your form.

  // STRETCH GOALS
  Task 4: Use default values - OPTIONAL
    We don't want the application to crash if our user fails to enter values for every field. Add
    whatever logic is necessary to set default values if a field is empty.

  Task 5: Parameterize `fillOutForm` (make it accept parameters/arguments) - OPTIONAL
    At this point, we have an object which corresponds to a[n] (at least partially) filled out form.
    That being so, we should be able to rewrite `fillOutForm` so that it accepts, as an argument,
    one of those objects and properly fills out the form to match the values of that object. Try to
    update the code below so that an object entered into `fillOutForm` is stored on the HTML and
    fully reconstituted by `readFromForm`. Use `_.isEqual` to make sure the object you feed in is
    the same as the one you read back out.
===================== */

var fillOutForm = function() {
 // Fill the form out here
};

var readFromForm = function() {
 // Return an object from within this function
 return {};
};

/* =====================
  NOTE: no arguments are provided to these functions
===================== */
fillOutForm();
console.log(readFromForm());

