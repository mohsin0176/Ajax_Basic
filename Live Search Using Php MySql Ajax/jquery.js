$( document).ready(function(){
$('#search').keyup(function(){
 
var search=$('#search_value').val();
$.ajax({
	url:'search.php',
	data:'usearch='+search,
	success:function(data)
	{
		$('#feedback').html(data);
	}

});
 
});
});