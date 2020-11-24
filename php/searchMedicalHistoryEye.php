<?php
  session_start();
  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
  $con= mysqli_connect('localhost', 'root', '', 'emr' );
  $data = array();

  if(isset($_GET['patientID']))
  {
    $patientID = $_GET['patientID'];
    $query= "select * from medical_record where PatientID='$patientID'";
    $result= mysqli_query($con, $query);
    if(mysqli_num_rows($result)>0)
    {
      while($row=mysqli_fetch_array($result))
      {
        $data[] = array("Date"=>$row['Date'], "Desease"=>$row['Desease'], "prescriptionID"=>$row['ID'], "drug1"=>$row['Drug1'], "drug2"=>$row['Drug2'], "drug3"=>$row['Drug3'], "drug4"=>$row['Drug4'], "drug5"=>$row['Drug5'], "quantity1"=>$row['Quantity1'], "quantity2"=>$row['Quantity2'], "quantity3"=>$row['Quantity3'], "quantity4"=>$row['Quantity4'], "quantity5"=>$row['Quantity5']);
      }

    }
    echo json_encode($data);
  }

 ?>
