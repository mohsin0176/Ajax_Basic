<?php
 
if (isset($_POST['uname']) && isset($_POST['msg']))
{
	echo $_POST['uname']."<br>";
	echo $_POST['msg']."<br>";
}

if (isset($_POST['uname'],$_POST['msg']))
{
	echo $_POST['uname']."<br>";
	echo $_POST['msg']."<br>";
}
?>
