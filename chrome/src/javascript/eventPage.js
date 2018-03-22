// Hit Confirm background script.
// Creates the context menu item:
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "title": "HitConfirm",
    "id": "hitConfirmMenu",
    "contexts": ["selection"],
  });
});

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

chrome.contextMenus.onClicked.addListener(contextClicked);
