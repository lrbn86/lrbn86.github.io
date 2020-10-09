let name = $('#my-name');
let logo = $('.my-logo');
let socials = $('.social-links');

$(document).ready(function() {
  function showLogo() {
    logo.fadeIn(1000);
    logo.fadeOut(1000, function() {
      showName();
    });
  }

  function showName() {
    name.slideDown(1000, function() {
      showSocials();
    });
  }

  function showSocials() {
    socials.fadeIn(1000);
    socials.children('.social-link').animate({marginRight: "15px"}, 1000)
  }

  showLogo();
});
