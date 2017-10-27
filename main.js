// this app needs to:

// 1. get an input from the webpage
//     -from the <input> tag on the page
//     -in the form of a string?

// 2. sort through the given string to find individual moves(inputs/characters)
//      -recognize directional and attack inputs to start
//      -add in commas & brackets later
//      -eventually include special modifiers, stances, etc.

// 3a. replace the given characters with the appropriate input icon
//      -ie. "d/f" becomes <i class="movelist d-f"></i>
//
//    OR:
//
// 3b. return an error if the given input is invalid.

// 4. render the new combo on the screen.


// jQuery for manipulating the DOM (step 4)
$(document).ready(function() {
  $('#converter').on( "click", function() {
    getInput();
    console.log("you clicked the button");
  });
});

function getInput() {
  // gets the input from target element (step 1): 
  var input = document.getElementById('raw_input').value;
  console.log(input);
}
