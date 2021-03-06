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
    console.log(inputArray);
    // loop over each substring (item):
    var output = inputArray.forEach(function(item) {

    // Future revision: figure out how to streamline this.
      var separateNumbers =     item.replace(/([udbfn]|[UDBFN])(?=[1-4])/g, "$1 ")
      var separatePlus =        separateNumbers.replace(/([udbfn]|[UDBFN])\+/g, '$1 + ' );
      var separateTilde =       separatePlus.replace(/\~/g, ' ~ ');
      var separateOr =          separateTilde.replace(/\_/g, ' or ');
      var sepOpenParenthesis =  separateOr.replace(/\(/g, ' ( ');
      var sepCloseParenthesis = sepOpenParenthesis.replace(/\)/g, ' ) ');
      var separateComma =       sepCloseParenthesis.replace(/\,/g, ' , ');

      console.log(separateComma);

      var finalInput = separateComma.split(' ');

      console.log(finalInput);

      finalInput.forEach(function(item) {

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

          case "F":
            console.log("hold forward");
            $('.combo-output').append("<i class='movelist hold-forward'></i>");
            break;

          // if back:
          case "b":
            console.log("back");
            $('.combo-output').append("<i class='movelist back'></i>");
            break;

          case "B":
            console.log("hold back");
            $('.combo-output').append("<i class='movelist hold-back'></i>");
            break;

          // if up:
          case "u":
            console.log("up");
            $('.combo-output').append("<i class='movelist up'></i>");
            break;

          case "U":
            console.log("hold up");
            $('.combo-output').append("<i class='movelist hold-up'></i>");
            break;

          // if down:
          case "d":
            console.log("down");
            $('.combo-output').append("<i class='movelist down'></i>");
            break;

          case "D":
            console.log("hold down");
            $('.combo-output').append("<i class='movelist hold-up'></i>");
            break;

          // if up/forward:
          case "u/f":
          case "uf":
            console.log("up/forward");
            $('.combo-output').append("<i class='movelist u-f'></i>");
            break;

          case "U/F":
          case "UF":
            console.log("hold up-forward");
            $('.combo-output').append("<i class='movelist hold-uf'></i>");
            break;

          // if up/back:
          case "u/b":
          case "ub":
            console.log("up/back");
            $('.combo-output').append("<i class='movelist u-b'></i>");
            break;

          case "U/B":
          case "UB":
            console.log("hold up-back");
            $('.combo-output').append("<i class='movelist hold-ub'></i>");
            break;

          // if down/forward:
          case "d/f":
          case "df":
            console.log("down/forward");
            $('.combo-output').append("<i class='movelist d-f'></i>");
            break;

          case "D/F":
          case "DF":
            console.log("hold down-forward");
            $(".combo-output").append("<i class='movelist hold-df'></i>");
            break;

          // if down/back:
          case "d/b":
          case "db":
            console.log("down/back");
            $('.combo-output').append("<i class='movelist d-b'></i>");
            break;

          case "D/B":
          case "DB":
            console.log("hold down-back");
            $('.combo-output').append("<i class='movelist hold-db'></i>");
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

          // if 1+2:
          case "1+2":
            console.log("1 + 2");
            $('.combo-output').append("<i class='movelist one-two'></i>");
            break;

          // if 1+3:
          case "1+3":
            console.log("1 + 3");
            $('.combo-output').append("<i class='movelist one-three'></i>");
            break;

          // if 1+4:
          case "1+4":
            console.log("1 + 4");
            $('.combo-output').append("<i class='movelist one-four'></i>");
            break;

          // if 2+3:
          case "2+3":
            console.log("2 + 3");
            $('.combo-output').append("<i class='movelist two-three'></i>");
            break;

          // if 2+4:
          case "2+4":
            console.log("2 + 4");
            $('.combo-output').append("<i class='movelist two-four'></i>");
            break;

          // if 3+4:
          case "3+4":
            console.log("3 + 4");
            $('.combo-output').append("<i class='movelist three-four'></i>");
            break;

          // no log message on space:
          case " ":
            break;

          // else (unrecognized/unstyled input):
          default:
            console.log("unrecognized " + item);
            $('.combo-output').append(item + " ");

        };

      });

    });

  }

});
