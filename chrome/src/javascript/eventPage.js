// Creates the context menu item:
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "title": "HitConfirm",
    "id": "hitConfirmMenu",
    "contexts": ["selection"],
  });
});

// Handles context menu click event; passes selection into function: 
chrome.contextMenus.onClicked.addListener(function(clickedItem) {
  var test = clickedItem.selectionText;
  window.alert(test);
})
