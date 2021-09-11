$( document).ready(function(){
$('#send').click(function(){
 
var uname=$('#name').val();
$.ajax({
	type:'POST',
	url:'page.php',
	data:'user='+uname,
	success:function(data)
	{
		$('#send_content').html(data);
	}

});
 
});
});