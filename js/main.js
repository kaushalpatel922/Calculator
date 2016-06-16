
$(document).ready(function(){
  $("body").css("-webkit-user-select","none");
  $("body").css("-moz-user-select","none");
  $("body").css("-ms-user-select","none");
  $("body").css("-o-user-select","none");
  $("body").css("user-select","none");
});

$(document).ready(function() {
  // defining variables
  var current_number = "";
  var exponent = "";
  var answer;

  $('#display').focus();

  $('.num').on('click', function () {
    updateNum(this.id);
  });

  $('.operator').on('click', function() {
    updateExp(this.id);
  });

  function updateNum(num) {
    if (num == '.') {
      if(current_number.indexOf('.') !== -1) {
        return false;
      } else {
        // update current_number to current_number + number;
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

  function updateExponent(operator) {
    exponent = exponent + current_number + operator;
    current_number='';
    displayNum();
  }

  function evaluateExp() {
    updateExponent('');

    var test = parseFloat(exp.substr(exp.length-1));

  }

})
