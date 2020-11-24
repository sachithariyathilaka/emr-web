<?php
  session_start();
  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
  $con= mysqli_connect('localhost', 'root', '', 'emr' );

  if(isset($_GET['patientEyeID']))
  {
    $patientEyeID = $_GET['patientEyeID'];
    $query= "select * from patients where EyeScan='$patientEyeID'";
    $result= mysqli_query($con, $query);
    if(mysqli_num_rows($result)>0)
    {
      $row=mysqli_fetch_array($result);
      $data[] = array("Name"=>$row['Name'], "ID"=>$row['Id'], "Username"=>$row['Username'], "Age"=>$row['Age'], "Gender"=>$row['Gender'], "Blood"=>$row['Blood_Group'], "Address"=>$row['Address'], "Mobile"=>$row['Mobile'], "Image"=>$row['Image'], "FamilyName1"=>$row['Family_Name1'], "FamilyName2"=>$row['Family_Name2'], "FamilyId1"=>$row['Family_ID1'], "FamilyId2"=>$row['FamilyID2'], "EmergancyName"=>$row['Emergancy_Name'], "EmergancyMobile"=>$row['Emergancy_Number']);
    }
    echo json_encode($data);
  }
 ?>
