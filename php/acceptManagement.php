<?php
header('Access-Control-Allow-Origin: *');
$response= [];
$ID =$_GET['ID'];
$con= mysqli_connect('localhost', 'root', '', 'emr' );
$query="UPDATE updates SET AuthLevel3 = 1 WHERE ID = $ID";
$result=mysqli_query($con, $query);

if($result)
{
  $query2 = "SELECT * FROM updates WHERE ID = $ID";
  $result2 = mysqli_query($con, $query2);
  if(mysqli_num_rows($result)>0)
  {
    $row=mysqli_fetch_array($result);
    $Desease = $row['Desease'];
    $Drug1 = $row['Drug1'];
    $Drug2 = $row['Drug2'];
    $Drug3 = $row['Drug3'];
    $Drug4 = $row['Drug4'];
    $Drug5 = $row['Drug5'];
    $Quantity1 = $row['Quantity1'];
    $Quantity2 = $row['Quantity2'];
    $Quantity3 = $row['Quantity3'];
    $Quantity4 = $row['Quantity4'];
    $Quantity5 = $row['Quantity5'];
    $Report = $row['Report'];
  }
  $query3 = "UPDATE medical_record SET Desease = '$Desease' AND Drug1 = '$Drug1' AND Drug2 = '$Drug2' AND Drug3 = '$Drug3' AND Drug4 = '$Drug4' AND Drug5 = '$Drug5' AND Quantity1 = $Quantity1 AND Quantity2 = $Quantity2 AND Quantity3 = $Quantity3, Quantity4 = $Quantity4 AND Quantity5 = $Quantity5 AND Report = $Report WHERE ID = $ID";
  $result3 = mysqli_query($con, $query3);
  if($result3)
  {
    $response['status']='done';
  }

}
else {
  $response['status']='error';
}
echo json_encode($response);
?>
