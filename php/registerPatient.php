<?php
header('Access-Control-Allow-Origin: *');
		$ext = pathinfo($_FILES['image']['name'],PATHINFO_EXTENSION);
    $image = time().'.'.$ext;
    move_uploaded_file($_FILES["image"]["tmp_name"], '../images/'.$image);
		$imagePath='images/'.$image;

    $response= [];

    $con= mysqli_connect('localhost', 'root', '', 'emr' );
    $name=$_POST['name'];
    $age=$_POST['age'];
    $PatientUsername=$_POST['PatientUsername'];
    $PatientPassword=$_POST['PatientPassword'];
    $eyeScan=$_POST['eyeScan'];
    $bloodGroup=$_POST['bloodGroup'];
    $gender=$_POST['gender'];
    $address=$_POST['address'];
    $mobile=$_POST['mobile'];
    $familyName1=$_POST['familyName1'];
    $familyName2=$_POST['familyName2'];
    $familyID1=$_POST['familyID1'];
    $familyID2=$_POST['familyID2'];
    $emergancyName=$_POST['emergancyName'];
    $emergancyNumber=$_POST['emergancyNumber'];
    $query="INSERT INTO patients (Name, Age, Username, Password, EyeScan, Image, Blood_Group, Gender, Address, Mobile, Family_Name1, Family_Name2, Family_ID1, FamilyID2, Emergancy_Name, Emergancy_Number) VALUES('$name','$age','$PatientUsername', '$PatientPassword', '$eyeScan', '$imagePath', '$bloodGroup', '$gender', '$address', '$mobile', '$familyName1', '$familyName2', '$familyID1', '$familyID2', '$emergancyName', '$emergancyNumber')";
    $result=mysqli_query($con, $query);

    if($result)
    {
		$response['status']='done';

    }
    else
    {
      $response['status']='error';
    }
		$query2 = "SELECT * FROM patients WHERE Name='$name'";
		$result2 = mysqli_query($con, $query2);
		if(mysqli_num_rows($result2) > 0){
			while($row = mysqli_fetch_assoc($result2)) {
        $response['id'] = $row['Id'];
    	}
		}
    echo json_encode($response);
?>
