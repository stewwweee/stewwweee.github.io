/* Hide the header when scrolling down */
var lastScroll = 0;
$(window).on('scroll', function() {
  var currentScroll = $(this).scrollTop();
  if (currentScroll > lastScroll) {
    $('.site-header').addClass('site-header--hidden');
  } else {
    $('.site-header').removeClass('site-header--hidden');
  }
  lastScroll = currentScroll;
});
