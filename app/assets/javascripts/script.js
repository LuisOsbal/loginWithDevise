$( document ).on('turbolinks:load', function() {
  // Navbar button animation.
  $('button').on('click', function() {
    $(this).toggleClass('isActive');
  });

  var buttonMobile =  $(".mobile-button"),
      menu         =  $(".list-container");
  buttonMobile.on('click', function (e) {
      e.preventDefault();
      menu.toggleClass('isActive');
  });

});
