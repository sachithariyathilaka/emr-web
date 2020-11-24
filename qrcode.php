<?php
require_once 'phpqrcode/qrlib.php';
//$ID=$_GET['prescriptionID'];
$response= [];
$conn = new mysqli("localhost", "root", "", "emr") or die(mysqli_error());
$query = $conn->query("SELECT * FROM `medical_record` WHERE ID=33") or die(mysqli_error());

while($fetch = $query->fetch_array())
{
  $d1=$fetch['Drug1'];
  $d2=$fetch['Drug2'];
  $d3=$fetch['Drug3'];
  $d4=$fetch['Drug4'];
  $d5=$fetch['Drug5'];
  $q1=$fetch['Quantity1'];
  $q2=$fetch['Quantity2'];
  $q3=$fetch['Quantity3'];
  $q4=$fetch['Quantity4'];
  $q5=$fetch['Quantity5'];
}
$path='qrcode/';
$file=$path.uniqid().".png";
QRcode::png($d1.": ".$q1."  ".$d2.": ".$q2."  ".$d3.": ".$q3."  ".$d4.": ".$q4."  ".$d5.": ".$q5, $file);
echo($file);
 ?>
