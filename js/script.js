// JavaScript Document
	
$(document).ready(function(){
	$('input#logo').on('change',function(e){
	getBase64(e.target.files[0]);
	});
});


function getBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     console.log(reader.result);
	   $('img').prop('src',reader.result)
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}
