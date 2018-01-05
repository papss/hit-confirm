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
      `<div id='hc-header'>
        <div id='hc-title'></div>
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

    // runs hitConfirm method on button press:
    buttonPress = function() {
      var div = document.getElementById('hc-input-container');
      if (div.style.color == "lightgrey") {
        div.style.color = "yellow";
      } else {
        div.style.color = "lightgrey";
      }
    }

    // adds listener to button:
    var hcButton = document.getElementById('hc-btn');
    hcButton.onclick=buttonPress;

    // Closes the Lightbox (duh):
    closeBox = function() {
      var hcBox = document.getElementById('hc-background');
      hcBox.parentNode.removeChild(hcBox);
    }

    button = document.createElement('button');
    button.onclick=closeBox;
    button.textContent='Close';
    hcBox.appendChild(button);
    sendResponse({
      farewell: "bye bye"
    });
  }
});





// hitConfirm method (re-written to remove jQuery):
