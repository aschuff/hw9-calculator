
$(document).ready(function(){

  $('.clear').on('click', function(event){
    event.preventDefault();
    $('.result-window').text('0');
  })

  $('input').on('click', function (event){
    event.preventDefault();
    console.log(this);
    var numberOrOperator = $(this).val();
    $('.result-window').append(numberOrOperator);
  })

  $('.equals').click('click', function(event){
    event.preventDefault();

    var total = eval($('.result-window').text())
    $('.result-window').text(total);
  })

})
