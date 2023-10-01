// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var button1 = document.getElementById("noun1");
var button2 = document.getElementById("verb");
var button3 = document.getElementById("adjective");
var button4 = document.getElementById("noun2");
var button5 = document.getElementById("setting");

// Constants for p tag to display query selectors

var p1 = document.getElementById("choosenNoun1");
var p2 = document.getElementById("choosenVerb");
var p3 = document.getElementById("choosenAdjective");
var p4 = document.getElementById("choosenNoun2");
var p5 = document.getElementById("choosenSetting");

// Constants for final buttons and p tags

var showStoryButton = document.getElementById("playback");
var randomButton = document.getElementById("random");
var finalParagraph = document.getElementById("story");
var studentIdParagraph = document.getElementById("studentId");
var studentIdButton = document.getElementById("studentDetail");

// Variables for pre-defined arrays

var noun1 = [
  "The turkey",
  "Mom",
  "Dad",
  "The dog",
  "My teacher",
  "The elephant",
  "The cat",
];
var verb = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjective = [
  "a funny",
  "a scary",
  "a goofy",
  "a slimy",
  "a barking",
  "a fat",
];
var noun2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var setting = [
  "on the moon",
  "on the chair",
  "in my spaghetti",
  "in my soup",
  "on the grass",
  "in my shoes",
];
// Variables for count to grab array elements
var count = 0;

var word1,
  word2,
  word3,
  word4,
  word5 = "";
/* Functions
-------------------------------------------------- */
function noun1_on_click() {
  count++; // increments count variable when user click the button
  // if-else to change count setting

  //if value of count variable becomes greater than the length of array then its value changes to 0
  if (count > noun1.length) {
    count = 0;
    count++;
  }

  // variable to get array element and displaying it

  word1 = noun1[count - 1]; // storing the selected value from array
  p1.textContent = word1;
}

function verb_on_click() {
  count++;
  //if value of count variable becomes greater than the length of array then its value changes to 0
  if (count > verb.length) {
    count = 0;
    count++;
  }
  word2 = verb[count - 1];
  p2.textContent = word2;
  // if-else to change count setting
}

function adjective_on_click() {
  count++;
  //if value of count variable becomes greater than the length of array then its value changes to 0
  if (count > adjective.length) {
    count = 0;
    count++;
  }
  word3 = adjective[count - 1];
  p3.textContent = word3;
  // if-else to change count setting
}

function noun2_on_click() {
  count++;
  //if value of count variable becomes greater than the length of array then its value changes to 0
  if (count > noun2.length) {
    count = 0;
    count++;
  }
  word4 = noun2[count - 1];
  p4.textContent = word4;
  // if-else to change count setting
}

function setting_on_click() {
  count++;
  //if value of count variable becomes greater than the length of array then its value changes to 0
  if (count > setting.length) {
    count = 0;
    count++;
  }
  word5 = setting[count - 1];
  p5.textContent = word5;
  // if-else to change count setting
}

// concatenate the user story and display
function playback_on_click() {
  finalParagraph.textContent =
    word1 + " " + word2 + " " + word3 + " " + word4 + " " + word5 + ".";
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
  var randomWord1 = noun1[Math.floor(Math.random() * noun1.length)];
  var randomWord2 = verb[Math.floor(Math.random() * verb.length)];
  var randomWord3 = adjective[Math.floor(Math.random() * adjective.length)];
  var randomWord4 = noun2[Math.floor(Math.random() * noun2.length)];
  var randomWord5 = setting[Math.floor(Math.random() * setting.length)];
  finalParagraph.textContent =
    randomWord1 +
    " " +
    randomWord2 +
    " " +
    randomWord3 +
    " " +
    randomWord4 +
    " " +
    randomWord5 +
    ".";
}

// function for displaying student id
function display_student_id() {
  var id = 200544640;
  studentIdParagraph.textContent = id;
}
/* Event Listeners
-------------------------------------------------- */
button1.addEventListener("click", noun1_on_click);
button2.addEventListener("click", verb_on_click);
button3.addEventListener("click", adjective_on_click);
button4.addEventListener("click", noun2_on_click);
button5.addEventListener("click", setting_on_click);
showStoryButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
studentIdButton.addEventListener("click", display_student_id);
