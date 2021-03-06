$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
      links = $('.links'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });
    overlay.click(function () {
      hamburger_cross();
      $('#wrapper').toggleClass('toggled');
    });
    links.click(function () {
      hamburger_cross();
      $('#wrapper').toggleClass('toggled');
    });

    function hamburger_cross() {
      if (isClosed) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }

  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });
});
