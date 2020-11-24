<?php
  $upload_dir = "predict/";
  $img = $_POST['imgBase64'];
  $img = str_replace('data:image/png;base64,', '', $img);
  $img = str_replace(' ', '+', $img);
  $data = base64_decode($img);
  $file = $upload_dir . "upload" . ".png";
  $success = file_put_contents($file, $data);

  echo 'hello';
?>
