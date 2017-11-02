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

      // regExp goes here?
      // use replace method to take raw substrings and translate them into
      // something our switch method can read?
      // ie. take "d+1" and turn it into "d + 1", but leave "1+2" alone?

        switch (item) {

          // if neutral:
          case "N":
            console.log("neutral");
            $('.combo-output').append("<i class='movelist neutral'></i>");
            break;

          // if forward:
          case "f":
            console.log("forward");
            $('.combo-output').append("<i class='movelist forward'></i>");
            break;

          // if back:
          case "b":
            console.log("back");
            $('.combo-output').append("<i class='movelist back'></i>");
            break;

          // if up:
          case "u":
            console.log("up");
            $('.combo-output').append("<i class='movelist up'></i>");
            break;

          // if down:
          case "d":
            console.log("down");
            $('.combo-output').append("<i class='movelist down'></i>");
            break;

          // if up/forward:
          case "u/f":
            console.log("up/forward");
            $('.combo-output').append("<i class='movelist u-f'></i>");
            break;

          // if up/back:
          case "u/b":
            console.log("up/back");
            $('.combo-output').append("<i class='movelist u-b'></i>");
            break;

          // if down/forward:
          case "d/f":
            console.log("down/forward");
            $('.combo-output').append("<i class='movelist d-f'></i>");
            break;

          // if down/back:
          case "d/b":
            console.log("down/back");
            $('.combo-output').append("<i class='movelist d-b'></i>");
            break;

          // if 1 (left punch):
          case "1":
            console.log("1 (left punch)");
            $('.combo-output').append("<i class='movelist one'></i>");
            break;

          // if 2 (right punch):
          case "2":
            console.log("2 (right punch)");
            $('.combo-output').append("<i class='movelist two'></i>");
            break;

          // if 3 (left kick):
          case "3":
            console.log("3 (left kick)");
            $('.combo-output').append("<i class='movelist three'></i>");
            break;

          // if 4 (right kick):
          case "4":
            console.log("4 (right kick)");
            $('.combo-output').append("<i class='movelist four'></i>");
            break;

          // no log message on space:
          case " ":
            break;

          // else (unrecognized/unstyled input):
          default:
            console.log("unrecognized");
            $('.combo-output').append(item);

        };

      // };  

    });

    console.log(inputArray);

  }

});
