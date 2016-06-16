

$(document).ready(function() {
  var current_number = "";
  var exponent = "";
  var answer;

  $('#display').focus();

  $('.num').on('click', function () {
    updateNum(this.id);
  })


  function updateNum(num) {
    if (num == '.') {
      if(current_number.indexOf('.') !== -1) {

      } else {
        current_number +=num;
      }
    } else if (num == 'negative') {
      if(current_number.indexOf('-') !== -1) {
        current_number = current_number.substr(1);
      } else {
        current_number= (0 - current_number).toString();
      }
    } else {
      current_number += current_number;
    }
    displayNum();
  }

  function displayNum() {
    $('#display').val(exponent + current_number);
  }

})
