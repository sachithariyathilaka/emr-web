<?php
  session_start();
  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
  $con= mysqli_connect('localhost', 'root', '', 'emr' );
  $query= "SELECT * FROM updates WHERE AuthLevel1 = 1 AND AuthLevel2 = 0 AND AuthLevel3 = 0";
    $result= mysqli_query($con, $query);
    if(mysqli_num_rows($result)>0)
    {
      while($row=mysqli_fetch_array($result))
      {
        $response['ID'] = $row['ID'];
        $response['Date'] = $row ['Date'];
        $response['Drug1'] = $row['Drug1'];
        $response['Drug2'] = $row['Drug2'];
        $response['Drug3'] = $row['Drug3'];
        $response['Drug4'] = $row['Drug4'];
        $response['Drug5'] = $row['Drug5'];
        $response['Quantity1'] =$row['Quantity1'];
        $response['Quantity2'] =$row['Quantity2'];
        $response['Quantity3'] =$row['Quantity3'];
        $response['Quantity4'] =$row['Quantity4'];
        $response['Quantity5'] =$row['Quantity5'];
        $response['Desease'] = $row['Desease'];

      }
    }
    echo json_encode($response);
 ?>
