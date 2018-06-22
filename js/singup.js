

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



function randomCode () {

	var code = "";

	for(var i=0; i<=2; i++){
		var character = String.fromCharCode(Math.floor(Math.random() * (48 - 57) + 57));
		code += character;
	}
	// se genera el alert con el codígo aleatorio
	swal("We have created a new code for you!", "Your code: LAB-" + code, "success").then(function(){
		window.location.href="singup.html?code="+ code;
	});
};

function weAreDoneAlert () {
	swal("We have finished", "you have successfully completed your registration!" , "success").then(function(){
		window.location.href="index.html";
	});
}



$(document).ready(function() {
    $('input#the-code').characterCounter();
    $('#the-code').keyup(randomCodeValidation);
    $('#resend-code').click(randomCode);
    $('.modal').modal();
    $('.checkbox').click(function(){
	$('#btn-next3').removeClass('disabled');
	$('#btn-next3').click(weAreDoneAlert);



    })
  });