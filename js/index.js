function showLogo() {
  logo.fadeIn(1000);
  logo.fadeOut(1000);
}

function showName() {
  name.slideDown(2000);
}

function showSocials() {
  socials.slideDown(1000);
}

$(document).ready(function() {
  let name = $('#my-name');
  let logo = $('.my-logo');
  let socials = $('.social-links');
  name.hide();
  logo.hide();
  socials.hide();

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
