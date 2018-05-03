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
