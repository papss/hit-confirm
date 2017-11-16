// This file contains scripts which control the extension's front-end
// behaviour.

$(document).ready(function() {

  // toggle the active panel:
  var activeSection = document.getElementsByClassName('active-section');

  $('.hc-header').on('click', function() {
    $(activeSection).removeClass('active-section');
    var className = $(this).attr('class');
    switch (className) {

      case 'hc-header title':
        console.log("you clicked the title");
        $('.hc-main').addClass('active-section');
        break;

      case 'hc-header header-legend':
        $('.hc-legend').addClass('active-section');
        break;

      case 'hc-header header-options':
        $('.hc-options').addClass('active-section');
        break;
    }
  });

});
