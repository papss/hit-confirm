// this is a content script.

// placeholder code for creating extension lightbox:
// listens for the openPopUp message to be sent
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if ( request.action == "openPopUp" ) {

    // gets the selected text:
    input = window.getSelection().toString();

    // injects pop-up HTML into the page:
    background = document.createElement('div');
    background.id = "hc-background";
    hcBox = document.createElement('main');
    hcBox.id = "hc-test";

    hcBox.innerHTML =
      `<div id='hc-header-contain'>
        <div id='hc-title-contain'>
          <h1 id="hc-title"> Hit Confirm </h1>
        </div>
        <div id='hc-exit'></div>
      </div>
      <div id='hc-input-container'>
        <input type='text' value='` + input + `' id='hc-input'>
        <button id='hc-btn'> Hit Confirm </button>
      </div>
      <div id='hc-output-container'>
        <div id='hc-output'></div>
      </div>
      <div id='hc-footer'>
        <div id='hc-footer-tab'></div>
        <div id='hc-footer-tab'></div>
      </div>`;

    document.body.appendChild(background);
    background.appendChild(hcBox);

    // displays the formatted output:
    hitConfirm(input);

    // adds listener to button:
    var hcButton = document.getElementById('hc-btn');
    var outputDiv = document.getElementById('hc-output');

    hcButton.onclick = function(event) {
      outputDiv.innerHTML = "";
      revisedInput = document.getElementById('hc-input').value;
      hitConfirm(revisedInput);
    };

    // Closes the Lightbox (duh):
    closeBox = function() {
      var hcBox = document.getElementById('hc-background');
      hcBox.parentNode.removeChild(hcBox);
    }

    button = document.createElement('button');
    button.id = "hc-exit-bttn";
    button.onclick=closeBox;
    button.textContent='X';
    document.getElementById('hc-exit').appendChild(button);
    sendResponse({
      farewell: "bye bye"
    });
  }
});


// hitConfirm method (re-written to remove jQuery):
function hitConfirm(string) {
  // split the string into an array of substrings:
  var inputArray = string.split(' ');
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

      var outputContainer = document.getElementById('hc-output');

      switch (item) {

        // if neutral:
        case "N":
          console.log("neutral");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist neutral'></i>");
          break;

        // if forward:
        case "f":
          console.log("forward");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist forward'></i>");
          break;

        case "F":
          console.log("hold forward");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist hold-forward'></i>");
          break;

        // if back:
        case "b":
          console.log("back");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist back'></i>");
          break;

        case "B":
          console.log("hold back");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist hold-back'></i>");
          break;

        // if up:
        case "u":
          console.log("up");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist up'></i>");
          break;

        case "U":
          console.log("hold up");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist hold-up'></i>");
          break;

        // if down:
        case "d":
          console.log("down");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist down'></i>");
          break;

        case "D":
          console.log("hold down");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist hold-up'></i>");
          break;

        // if up/forward:
        case "u/f":
        case "uf":
          console.log("up/forward");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist u-f'></i>");
          break;

        case "U/F":
        case "UF":
          console.log("hold up-forward");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist hold-uf'></i>");
          break;

        // if up/back:
        case "u/b":
        case "ub":
          console.log("up/back");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist u-b'></i>");
          break;

        case "U/B":
        case "UB":
          console.log("hold up-back");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist hold-ub'></i>");
          break;

        // if down/forward:
        case "d/f":
        case "df":
          console.log("down/forward");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist d-f'></i>");
          break;

        case "D/F":
        case "DF":
          console.log("hold down-forward");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist hold-df'></i>");
          break;

        // if down/back:
        case "d/b":
        case "db":
          console.log("down/back");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist d-b'></i>");
          break;

        case "D/B":
        case "DB":
          console.log("hold down-back");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist hold-db'></i>");
          break;

        // if 1 (left punch):
        case "1":
          console.log("1 (left punch)");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist one'></i>");
          break;

        // if 2 (right punch):
        case "2":
          console.log("2 (right punch)");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist two'></i>");
          break;

        // if 3 (left kick):
        case "3":
          console.log("3 (left kick)");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist three'></i>");
          break;

        // if 4 (right kick):
        case "4":
          console.log("4 (right kick)");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist four'></i>");
          break;

        // if 1+2:
        case "1+2":
          console.log("1 + 2");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist one-two'></i>");
          break;

        // if 1+3:
        case "1+3":
          console.log("1 + 3");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist one-three'></i>");
          break;

        // if 1+4:
        case "1+4":
          console.log("1 + 4");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist one-four'></i>");
          break;

        // if 2+3:
        case "2+3":
          console.log("2 + 3");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist two-three'></i>");
          break;

        // if 2+4:
        case "2+4":
          console.log("2 + 4");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist two-four'></i>");
          break;

        // if 3+4:
        case "3+4":
          console.log("3 + 4");
          outputContainer.insertAdjacentHTML("beforeend", "<i class='movelist three-four'></i>");
          break;

        // no log message on space:
        case " ":
          break;

        // else (unrecognized/unstyled input):
        default:
          console.log("unrecognized " + item);
          outputContainer.insertAdjacentHTML("beforeend", item + " ");

      };

    });

  });

}
