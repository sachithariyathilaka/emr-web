<?php
header('Access-Control-Allow-Origin: *');
    $response= [];

    $con= mysqli_connect('localhost', 'root', '', 'emr' );
    $prescriptionId=$_POST['prescriptionId'];
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
    $query="INSERT INTO updates(ID, Desease, Report, Drug1, Drug2, Drug3, Drug4, Drug5, Quantity1, Quantity2, Quantity3, Quantity4, Quantity5, AuthLevel1,AuthLevel2,AuthLevel3) VALUES($prescriptionId, '$desease', '$report', '$drug1', '$drug2', '$drug3', '$drug4', '$drug5', $quantity1, $quantity2, $quantity3, $quantity4, $quantity5, 1, 0, 0)";
    $result= mysqli_query($con, $query);
    if($result)
    {
      $response['status']='done';
    }
    else
    {
      $response['status']='error';
    }
    echo json_encode($response);
?>
