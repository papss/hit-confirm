// var contextMenuItem = {
//   "id": "hitConfirm",
//   "title": "Hit Confirm",
//   "contexts": ["selection"],
// };
//
// chrome.contextMenus.create(contextMenuItem);
//
// chrome.contextMenus.onCLicked.addListener(function(clickedItem) {
//   if (clickedItem.menuItemId == "hitConfirm" && clickedItem.selectionText) {
//     console.log(clickedItem.selectionText);
//   };
// });

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "title": "HitConfirm",
    "id": "hitConfirmMenu",
    "contexts": ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(function(clickedItem) {
  var test = clickedItem.selectionText;
  window.alert(test); 
})
