$(document).ready(function(){
  var rand_num = Math.floor(Math.random()*(10 + 1));
  var guesses = new Array();

  var guess_number = function(){
    var value = parseInt($('input').val());
    guesses.push(value)
    if( value >= 0 && value <= 10 ){
      if(value > rand_num){
        $('.alert-box').html(guesses + '<br/>' + value + ' was too high, try again...');
      }else if(value < rand_num){
        $('.alert-box').html(guesses + '<br/>' + value + ' was too low, try again...');
      }else{
        $('.alert-box').html(guesses + '<br/>' + 'Congratulations, you\'ve guessed the number in ' + guesses.length + ' guesses!');
      }
    }else{
      $('.alert-box').html('Invalid input, must enter a number between 0 and 10');
    }
    $("input").val('');
  };

  $('a.button').click(function(){
    guess_number();
  });

  $('a.success').click(function(event){
    window.location.reload();
  });
});
