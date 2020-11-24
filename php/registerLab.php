<?php
header('Access-Control-Allow-Origin: *');
	$response= [];

    $con= mysqli_connect('localhost', 'root', '', 'emr' );
    $name=$_POST['name'];
    $regNo=$_POST['regNo'];
    $labUsername=$_POST['labUsername'];
    $labPassword=$_POST['labPassword'];
    $query="INSERT INTO lab (Name, RegNo, Username, Password) VALUES('$name','$regNo','$labUsername', '$labPassword')";
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
