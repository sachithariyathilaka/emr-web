<?php
header('Access-Control-Allow-Origin: *');
	$response= [];

    $con= mysqli_connect('localhost', 'root', '', 'emr' );
    $name=$_POST['name'];
    $regNo=$_POST['regNo'];
    $pharmacyUsername=$_POST['pharmacyUsername'];
    $pharmacyPassword=$_POST['pharmacyPassword'];
    $query="INSERT INTO pharmacy (Name, RegNo, Username, Password) VALUES('$name','$regNo','$pharmacyUsername', '$pharmacyPassword')";
    $result=mysqli_query($con, $query);

    if($result)
    {
        $response['status']='done';
    }
    else {
        $response['status']='error';
    }
    echo json_encode($response);

?>
