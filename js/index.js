
// subtract digits, seperated by ' ' and characters, return sum
$(document).ready(function() {

  var storedInput = localStorage.getItem('input') ? localStorage.getItem('input') : "";

  if (storedInput != "") $('input:text').val(storedInput);

  $('.convert').click(function() {
    var input = $('#input').val();
    var arr = input.split('');

    localStorage.setItem('input', input);
    $('#result').html(calculateSum(arr));
  });
});

function calculateSum(arr) {
  var s = "";
  var sum = 0;
  var neg = false;
  var digits = false;

  for (var i = 0; i < arr.length; i++ ) {
    var ch = arr[i].charCodeAt();

    if (ch > 57 || ch < 48) { // if arr[i] is not digits

      if (s != "") {

        if (neg) {
          sum -= parseInt(s, 10);
        } else {
          sum += parseInt(s, 10);
        }

        s = "";
      }

      if (ch == 45) { // if arr[i] == '-'
        neg = true;
      } else {
        neg = false;
      }

    } else { // if arr[i] is digits
      digits = true;
      s += String.fromCharCode(ch);
    }
  }

  // last digits
  if (s != "") {
    if (neg) {
      sum -= parseInt(s, 10);
    } else {
      sum += parseInt(s, 10);
    }
    neg = false;
    s = "";
  }

  if (!digits) return "";
  return sum;
}
