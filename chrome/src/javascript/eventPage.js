// this is a background script.
// Creates the context menu item:
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "title": "HitConfirm",
    "id": "hitConfirmMenu",
    "contexts": ["selection"],
  });
});

// hopefully initializes jQuery:
function injectJquery(tab) {
  chrome.tabs.executeScript(null, {file: "jquery-3.2.1.min.js"}, function() {
    chrome.tabs.executeScript(null, {file: "placeholder.js"});
  });
}

// messages placeholder.js:
function contextClicked(info, tab) {
  if (info.menuItemId == "hitConfirmMenu") {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        "action": "openPopUp"
      });
    });
  }
};

chrome.contextMenus.onClicked.addListener(injectJquery);
chrome.contextMenus.onClicked.addListener(contextClicked);

// old Click event listener:

// chrome.contextMenus.onClicked.addListener(function(clickedItem) {
//   var test = clickedItem.selectionText;
//   window.alert(test);
// });
