$( document).ready(function(){
$('#show').click(function(){

  $.ajax({

 	url:'page.php',
 	success:function(data)
 	{
 		$('#show_content').html(data);
 	}

 });

 
});
});