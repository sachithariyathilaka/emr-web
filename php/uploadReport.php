<?php
header('Access-Control-Allow-Origin: *');
	$ext = pathinfo($_FILES['image']['name'],PATHINFO_EXTENSION);
    $image = time().'.'.$ext;
    move_uploaded_file($_FILES["image"]["tmp_name"], '../reports/'.$image);
	$imagePath='reports/'.$image;

    $response= [];
    $Prescription_ID=$_POST['prescriptionId'];
    $PatientID=$_POST['patientID'];

    $con= mysqli_connect('localhost', 'root', '', 'emr' );
    $query="INSERT INTO reports(Report, Prescription_ID, PatientID) VALUES('$imagePath','$Prescription_ID', '$PatientID' )";
    $result=mysqli_query($con, $query);

    if($result)
    {
      $response['status']='done';
      $query2="UPDATE medical_record SET report_status = 1 WHERE ID='$Prescription_ID'";
      $result2=mysqli_query($con, $query2);
    }
    else
    {
      $response['status']='error';
    }
    echo json_encode($response);
?>
