$(document).ready(function()
{
	$('#ajax_button_load').click(
function()
{
	$('#phpcontent').load('phpcontent.php');
	$('#txtcontent').load('txtcontent.txt');
	$('#hide').hide();
	alert("Ajax Working");
}
);

});

