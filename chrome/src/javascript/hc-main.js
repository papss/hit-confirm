// This file contains scripts pertaining to the main Hit confirm html page

$(document).ready(function() {

  // value set to html input field:
  var inputToSave = document.getElementById('input-to-save');

  $('#save-btn').on('click', function() {
    var theValue = inputToSave.value;
    if (!theValue) {
      message('no value');
      return;
    }
    chrome.storage.local.set({"value": theValue}, function() {
      console.log("the value is set to: " + theValue);
    })
  });

  $('#test-btn').on('click', function() {
    chrome.storage.local.get(["value"], function(result) {
      console.log("the value currently is: " + result.key);
    });
  });

});
