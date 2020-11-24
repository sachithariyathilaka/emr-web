<?php
header('Access-Control-Allow-Origin: *');
	$response= [];
    $conn = new mysqli("localhost", "root", "", "emr") or die(mysqli_error());
    $patientID=$_POST['patientID'];
    $query2 = $conn->query("SELECT * FROM medical_record WHERE PatientID='$patientID' AND report_status=1") or die(mysqli_error());
    $fetch = $query2->fetch_array();
		$response['ID']=$fetch['ID'];
		$response['Date']=$fetch['Date'];
		$response['Report']=$fetch['Report'];
    $response['patientid']=$patientID;
    $response['status']= 'loggedin';
	echo json_encode($response);
?>
