<?php
$params = array ('api_key' => 'fkPXbwh_u1cRHI4HQFTn9c7rjCEnc9ra', 'api_secret' => '3gkQGpTkKpooE2FRsO6AW1Bg6IIewfqV', 'image_url1' => 'http://18.219.8.85/EMR/faceIDFolder/1563379707.jpeg', 'image_url2' => 'http://18.219.8.85/EMR/faceIDFolder/1569149672.jpeg');
$queryName = http_build_query ($params);
// Create Http context details
$contextData = array (
            'method' => 'POST',
            'header' => "Connection: close\r\n".
                        "Content-Length: ".strlen($queryName)."\r\n",
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
echo($output->confidence);
?>
