// this is a content script.

$(document).ready(function() {

});

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

    hcBox.innerHTML = "<h1>" + input + "</h1>";

    document.body.appendChild(background);
    background.appendChild(hcBox);

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
