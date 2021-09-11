<?php

$con=mysql_connect("localhost","root","");
mysql_select_db('search_box',$con);
$s_name=$_GET['usearch'];
$sql="SELECT FROM user WHERE name LIKE '%$s_name%'";
$rs=mysql_query($sql);

while ($row=mysql_fetch_array($rs)) 
{
	echo $row['name']."<br>";
}

?>