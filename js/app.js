// MODAL
$(document).ready(function(){
    $('.modal').modal();
  });

$(document).ready(function() {
    $('input#phone-number').characterCounter();
  });

// -------------VALIDACIONES SING UP------------------

function digitCounter () {
	var userPhoneNumber = $('#phone-number').val();
	if(userPhoneNumber.length === 10){
		$('#phone-number').addClass('validate')
		$('#btn-next').removeClass('disabled');
	}
};
// function getPhoneNumber () {
// 	var userPhoneNumber = $('#phone').val();

// 	if(userPhoneNumber.length === 10){
// 		$('#btn-next').removeClass('disabled');
// 	}else {
// 		swal("Oh no!", "Please enter the 10 digits of your phone number!", "error");
// 	};

// };









 $(document).ready(function(){
    $('select').formSelect();
    $('#phone-number').mousemove(digitCounter);

  });