// MODAL
$(document).ready(function(){
    $('.modal').modal();
  });

$(document).ready(function() {
    $('input#phone-number').characterCounter();
  });

// -------------VALIDACIONES SING UP------------------

function digitCounter () {
	// creo una variable para obtener el value del input
	var userPhoneNumber = $('#phone-number').val();
	// condiciono a que cuando el length del value sea igual a 10...
	if(userPhoneNumber.length === 10){
		// valide el el value
		$('#phone-number').addClass('validate');
		// se active el botón "Next"
		$('#btn-next').removeClass('disabled');
	}
};

// ------------GENERACIÓN DE CÓDIGO ALEATORIO-----------
// CODIGO ASCII
// Números: 48-57

function randomCode () {

	var code = "";

	for(var i=0; i<=2; i++){
		var character = String.fromCharCode(Math.floor(Math.random() * (48 - 57) + 57));
		code += character;
	}
	// se genera el alert con el codígo aleatorio
	swal("We have created a code for you!", "Your code: LAB-" + code, "success");
	
	$('.swal-button').replaceWith("<a class='nuevo btn' href='singup.html'>ok</a>");

	// $('swal-button').click(function(){
	// 	var butonAlertCode = $('swal-button').attr('href', 'singup.html');
	// console.log(butonAlertCode);
	// });
};








 $(document).ready(function(){
    $('select').formSelect();
    $('#phone-number').mousemove(digitCounter);
    $('#btn-next').click(randomCode);



  });