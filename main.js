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

$(document).ready(function() {

  $('#converter').on( "click", function() {

    console.log("you clicked the button");
    // clears the output div:
    $('.combo-output').empty();
    // gets the input from target element (step 1):
    var input = document.getElementById('raw_input').value;
    // converts the input string:
    var output = hitConfirm(input);

  });

  function hitConfirm(input) {
    // split the string into an array of substrings:
    var inputArray = input.split(' ');
    // loop over each substring (item):
    var output = inputArray.forEach(function(item) {

      switch (item) {
        case "f":
          console.log("forward");
          $('.combo-output').append("<i class='movelist forward'></i>");
          break;
        default:
          console.log("that is not a valid input");
          $('.combo-output').append(item);
      };

    });

    console.log(inputArray);

  }

});
