<?php
  //$patientID=$_POST['patientID'];
  //$port=$_POST['port'];
  $fp=fopen("COM8", "w");
  fwrite($fp, chr(10));
  fclose($fp);
  $output=shell_exec('lineByLine');
  echo $output;

 ?>
