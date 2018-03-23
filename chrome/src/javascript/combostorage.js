// Content script
// File should handle saving combos in browser's local storage.

// event listener on button:
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "openPopUp") {
    var saveButton = document.getElementById('hc-save-btn');

    saveButton.onclick = function(event) {
      console.log("you clik button");
    };
  }
}
