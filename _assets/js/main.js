// general js for the project that wouldn't be a reuseable component


///////////////////////////////////////
//    Expand image credit
///////////////////////////////////////

$('.js-image-credit').each(function() {
  // grab the credit text
  var imageCredit = $(this).html();
  // remove credit text and use a smaller label
  $(this).html('Image Source').css('cursor', 'pointer');
  // on click replace the label with the original credit text
  $(this).on('click', function() {
    $(this).html(imageCredit).css({
      'cursor': 'auto',
      'opacity': '1',
    });
  });
});


///////////////////////////////////////
//  play video from overview banner
///////////////////////////////////////

$('.js-play-feature-video').on('click', function (e) {
  e.preventDefault();
  var container = $('.js-youtube-thumbnail');
  var video     = $('.js-youtube-thumbnail .video__iframe');
  var videoSrc  = video.attr('src');
  var thumbnail = $('.js-youtube-thumbnail .video__thumbnail');
  container.addClass('is-active');
  // add auto play query to iframe
  video.attr('src', videoSrc + '&autoplay=1');
  // fade out iframe and show video
  thumbnail.fadeOut( 175, function() {
    video.css('visibility', 'visible');
  });
  // scroll to section
  $('html,body').animate({
    scrollTop: $('#video').offset().top
  }, 500);
});