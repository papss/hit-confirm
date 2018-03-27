// This file contains scripts pertaining to the main Hit confirm html page

$(document).ready(function() {

  var inputToSave = document.getElementById('input-to-save');

  document.getElementById('save-form').addEventListener('submit', function(e) {
    e.preventDefault;
    console.log(inputToSave.value);
  })

})
