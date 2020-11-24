<?php
header('Access-Control-Allow-Origin: *');
    $response= [];

    $con= mysqli_connect('localhost', 'root', '', 'emr' );
    $patientId=$_POST['PatientId'];

    $query2="SELECT * FROM patients WHERE Id='$patientId'";
    $result2= mysqli_query($con, $query2);
    if(mysqli_num_rows($result2)>0)
    {
      $row2=mysqli_fetch_array($result2);
      $eyeScan=$row2['EyeScan'];

      $report=$_POST['report'];
      $desease=$_POST['desease'];
      $drug1=$_POST['drug1'];
      $drug2=$_POST['drug2'];
      $drug3=$_POST['drug3'];
      $drug4=$_POST['drug4'];
      $drug5=$_POST['drug5'];
      $quantity1=$_POST['quantity1'];
      $quantity2=$_POST['quantity2'];
      $quantity3=$_POST['quantity3'];
      $quantity4=$_POST['quantity4'];
      $quantity5=$_POST['quantity5'];
      $status=0;
      $query="INSERT INTO medical_record (Report, Desease, Drug1, Drug2, Drug3, Drug4, Drug5, Quantity1, Quantity2, Quantity3, Quantity4, Quantity5, PatientID, EyeScan, report_status) VALUES('$report','$desease','$drug1', '$drug2', '$drug3', '$drug4', '$drug5', '$quantity1', '$quantity2', '$quantity3', '$quantity4', '$quantity5', '$patientId', '$eyeScan', '$status')";
      $result=mysqli_query($con, $query);

      if($result)
      {
        $response['status']='done';
      }
     else
     {
       $response['status']='error';
     }
     echo json_encode($response);
    }
?>
