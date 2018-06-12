var main = function() {
  //disable the buttons in the beginning
  $('.prev').addClass('disabled');
  $('.next').addClass('disabled');


$('.hint-box').on('click', () => {
  $('.hint').slideToggle(500);
});
  $('.wrong-answer-one').on('click', () =>{
     $('.wrong-text-one').fadeOut('slow');
    $('.frown').show();
 });
   $('.wrong-answer-two').on('click', () =>{
     $('.wrong-text-two').fadeOut('slow');
     $('.frown').show();
 });
   $('.wrong-answer-three').on('click', () =>{
      $('.wrong-text-three').fadeOut('slow');
     $('.frown').show();
 });

 // enable the Next button after the correct answer was clicked

  $('.correct-answer').on('click', () =>{
    $('.frown').hide();
    $('.smiley').show();
    $('.wrong-text-one').fadeOut('slow');
    $('.wrong-text-two').fadeOut('slow');
    $('.wrong-text-three').fadeOut('slow');
    $('.next').removeClass('disabled');
  });

//function to move the cards forward when press NEXT
//hide frown and smiley and show the faded wrong answers
  $('.next').on('click', () =>{
    var $current = $('.active-card');
    var $nextCard = $current.next();

  $current.fadeOut(900).removeClass('active-card');
  $nextCard.fadeIn(900).addClass('active-card');

  $('.frown').hide();
  $('.smiley').hide();
  $('.wrong-text-one').show();
  $('.wrong-text-two').show();
  $('.wrong-text-three').show();
  $('.next').addClass('disabled');
  $('.prev').removeClass('disabled');

  })
  //function to move the cards BACK
  $('.prev').on('click', () => {
    var $current = $('.active-card');
    var $prevCard = $current.prev();

    $current.fadeOut(900).removeClass('active-card');
    $prevCard.fadeIn(900).addClass('active-card');
  })


}

$(document).ready(main);
