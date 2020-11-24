<?php
  session_start();
  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
  $con= mysqli_connect('localhost', 'root', '', 'emr' );

  if(isset($_GET['docid']))
  {
    $docid = $_GET['docid'];
    $query= "select * from doctor where RegNo='$docid'";
    $result= mysqli_query($con, $query);
    if(mysqli_num_rows($result)>0)
    {
      $row=mysqli_fetch_array($result);
      $data[] = array("Name"=>$row['Name'], "Username"=>$row['Username'], "Id"=>$row['Id'], "Image"=>$row['Image']);
    }
    echo json_encode($data);
  }

 ?>
