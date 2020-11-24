<?php
header('Access-Control-Allow-Origin: *');
  $response=[];
  $con= mysqli_connect('localhost', 'root', '', 'emr' );
  $Username=$_POST['Username'];
  $Password=$_POST['Password'];
  $query= "SELECT * FROM management WHERE Username='$Username' AND Password='$Password'";
  $result= mysqli_query($con, $query);

  if(mysqli_num_rows($result)>0)
  {
    $response['status']= 'loggedin';
    $response['user']= $Username;
    $response['userid']= md5(uniqid());
    $_SESSION['userid']=  $response['userid']= md5(uniqid());
  }
  else {
    $response['status']='error';
  }
  echo json_encode($response);
 ?>
