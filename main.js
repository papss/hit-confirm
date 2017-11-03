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

      // for each item in the array (substring) we need to check for characters
      // and character patterns which can be replaced by a move icon. From there
      // we can further break down the substring into a smaller array upon which
      // we run our switch method.

      // Our regExp requirements:

      // Needs to recognize the difference between a direction + a button, and a
      // button + another button; ie. "d+1" vs "1+2", or "d+1+2".
      // "d+1" needs to become "d + 1"; "1+2" can stay as is.

      // Needs to seperate inputs connected by a ",";
      // ie: "f+3,1" becomes "f + 3 , 1".

      // Needs to seperate inputs connected by a "~"; ie: "1~2" becomes "1 ~ 2".

      // Needs to deal with diagonals by either adding or removing the "/"; ie:
      // "d/f" becomes "df", or vice versa.

      // Needs to leave unrecognized characters alone; shouldn't be too difficult
      // considering we know what the first character of every recognized input is.

    });

    console.log(inputArray);

  }

});
