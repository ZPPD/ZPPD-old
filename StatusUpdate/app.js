var main = function() {
  $('.btn').click(function() { 
    var post = $('.status-box').val();// takes the input when we type
    $('<li>').text(post).prependTo('.posts'); //creates list after click with the text we typed in and puts it on top

    $('.status-box').val('');// after click removes the text we typed
    $('.counter').text('140');//after click resets the counter back to 140
    $('.btn').addClass('disabled');//we cannot click unless there is text
  });
  
 

  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;//counts the letters we type
    var charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);//displays whats left to type, max is 140
  
    if(charactersLeft < 0) {
      $('.btn').addClass('disabled'); // cannot press the button if no text
    }
    else if(charactersLeft == 140) {//cannot press the button if too many characters
      $('.btn').addClass('disabled');
    }
    else {//will press the button if 0<text>140
      $('.btn').removeClass('disabled');
    }
  });
  
  $('.btn').addClass('disabled');//if this action is not here after the first type, we can press the button even if theres no text
}

$(document).ready(main);
