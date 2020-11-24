<?php
header('Access-Control-Allow-Origin: *');
	$ext = pathinfo($_FILES['image']['name'],PATHINFO_EXTENSION);
    $image = time().'.'.$ext;
    move_uploaded_file($_FILES["image"]["tmp_name"], './faceIDFolder/'.$image);

		$response= [];
		$faceIDPath='http://18.216.245.34/EMR/faceIDFolder/'.$image;
		$conn = new mysqli("localhost", "root", "", "emr") or die(mysqli_error());
		$query = $conn->query("SELECT * FROM `patients`") or die(mysqli_error());

		while($fetch = $query->fetch_array())
		{
				$imagePath=$fetch['Image'];
				$fullImagePath = 'http://18.216.245.34/EMR/'.$imagePath;

				$params = array ('api_key' => 'fkPXbwh_u1cRHI4HQFTn9c7rjCEnc9ra', 'api_secret' => '3gkQGpTkKpooE2FRsO6AW1Bg6IIewfqV', 'image_url1' => $fullImagePath, 'image_url2' => $faceIDPath);
				$queryName = http_build_query ($params);
				// Create Http context details
				$contextData = array (
				            'method' => 'POST',
										'header' => "Content-Type: application/x-www-form-urlencoded",
				            'content'=> $queryName );
				// Create context resource for our request
				$context = stream_context_create (array ( 'http' => $contextData ));
				// Read page rendered as result of your POST request
				$result =  file_get_contents (
				              'https://api-us.faceplusplus.com/facepp/v3/compare',  // page url
				              false,
				              $context);
				// Server response is now stored in $result variable so you can process it
				$output = json_decode($result);
				$value = $output->confidence;
				if($value>75.000)
				{
					$query2 = $conn->query("SELECT * FROM `patients` WHERE Image='$imagePath'") or die(mysqli_error());
					$response['Name']=$fetch['Name'];
					$response['Age']=$fetch['Age'];
					$response['Username']=$fetch['Username'];
					$response['Id']=$fetch['Id'];
					$response['Blood']=$fetch['Blood_Group'];
					$response['Address']=$fetch['Address'];
					$response['Gender']=$fetch['Gender'];
					$response['Mobile']=$fetch['Mobile'];
					$response['FamilyName1']=$fetch['Family_Name1'];
					$response['FamilyName2']=$fetch['Family_Name2'];
					$response['FamilyId1']=$fetch['Family_ID1'];
					$response['FamilyId2']=$fetch['FamilyID2'];
					$response['EmergancyName']=$fetch['Emergancy_Name'];
					$response['EmergancyNumber']=$fetch['Emergancy_Number'];
					$response['Image']=$fetch['Image'];
					echo json_encode($response);

				}


		}
?>
