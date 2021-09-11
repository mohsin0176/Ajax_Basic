$(document).ready(function(){
  $('#show').click(function()
  {
  	var uname=$('#name').val();
  	var umsg=$('#message').val();
  	$.get('page.php',{user:uname,msg:umsg},function(data)
  	{
  		$('#print').html(data);
  	});

  });
});