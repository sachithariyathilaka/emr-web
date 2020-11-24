<?php
header('Access-Control-Allow-Origin: *');
$response= [];
$ID =$_GET['ID'];
$con= mysqli_connect('localhost', 'root', '', 'emr' );
$query="UPDATE updates SET AuthLevel2 = 1 WHERE ID = $ID";
$result=mysqli_query($con, $query);

if($result)
{
  $response['status']='done';
}
else {
  $response['status']='error';
}
echo json_encode($response);
?>
