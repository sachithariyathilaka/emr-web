<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
if(!isset($_POST) || !isset($_POST['id'])) die();
session_start();

$response= [];

$con= mysqli_connect('localhost', 'root', '', 'emr' );
$newPassword=$_POST['newPassword'];
$user=$_POST['user'];

$query="update staff set Password = '$newPassword' WHERE Username= '$user'";
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
