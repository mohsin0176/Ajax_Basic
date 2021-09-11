$(document).ready(function(){
$('#show').click(function(){
var name=$('#name').val();
var message=$('#message').val();
$.post('page.php',{uname:name,msg:message},function(data){
$('#print').html(data);
});
});
});