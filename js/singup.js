

var getCode = window.location.search.substring(1);
var splitCode = getCode.split("&");
var pair = splitCode[0].split("=");
var codeValue = pair[1];

// VALIDANDO EL CÓDIGO ALEATORIO

function randomCodeValidation () {
	var theCode = $('#the-code').val();
if (theCode === codeValue){
	$('#btn-next2').removeClass('disabled');
	};
};

console.log(codeValue);



$(document).ready(function() {
    $('input#the-code').characterCounter();
    $('#the-code').keyup(randomCodeValidation);
  });