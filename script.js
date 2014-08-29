$(document).ready(function() {
  $('.job .head').click(function() {
    var speed = 'fast';
    var head = $(this);
    var body = head.parent().find('.body');
    if (body.is(':visible')) {
      body.slideUp(speed);
      head.find('.drop').addClass('up');
    } else {
      body.slideDown(speed);
      head.find('.drop').removeClass('up');
    }
  });
  $('.job .body').hide();
  $('.job .body').first().show();
});
