// This is the switch method from the main.js file which replaces certain strings
// with the corresponding move icons.

// I've copied it out of the main file incase in order to make potential changes
// to the overall function more easily. 

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
