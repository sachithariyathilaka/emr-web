<?php
  session_start();
  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
  $con= mysqli_connect('localhost', 'root', '', 'emr' );
  $data = array();

  if(isset($_GET['patientID']))
  {
    $patientID = $_GET['patientID'];
    $query= "select * from medical_record where PatientID=$patientID";
    $result= mysqli_query($con, $query);
    if(mysqli_num_rows($result)>0)
    {
      while($row=mysqli_fetch_array($result))
      {
        $data[] = array("ID"=>$row['ID']);
      }

    }
    echo json_encode($data);
  }

 ?>
