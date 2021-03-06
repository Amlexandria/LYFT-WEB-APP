
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
	swal("We have created a code for you!", "Your code: LAB-" + code, "success").then(function(){
		window.location.href="singup.html?code="+ code;
	});
	// se reemplaza el botón por defecto del alert por un enlace que redirecciona al singup.html
	// $('.swal-button').replaceWith("<a class='nuevo btn' href='singup.html'>ok</a>");
	

	// $('swal-button').click(function(){
	// 	var butonAlertCode = $('swal-button').attr('href', 'singup.html');
	// console.log(butonAlertCode);
	// });
};




function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}




 $(document).ready(function(){
 	$('.modal').modal();
    $('select').formSelect();
    $('input#phone-number').characterCounter();
    $('#phone-number').keyup(digitCounter);
    $('#btn-next').click(randomCode);
    if(getParameterByName('showModal')==1) {
    	var elem = $('#modal1');
    	var instance = M.Modal.getInstance(elem);
    	instance.open();
    }
  });