<?php
header('Access-Control-Allow-Origin: *');
		$ext = pathinfo($_FILES['image']['name'],PATHINFO_EXTENSION);
                $image = time().'.'.$ext;
                move_uploaded_file($_FILES["image"]["tmp_name"], '../images/'.$image);
								$imagePath='images/'.$image;

                $response= [];

                $con= mysqli_connect('localhost', 'root', '', 'emr' );
                $name=$_POST['name'];
                $regNo=$_POST['regNo'];
                $doctorUsername=$_POST['doctorUsername'];
                $doctorPassword=$_POST['doctorPassword'];
                $query="INSERT INTO doctor (Name, RegNo, Username, Password, Image) VALUES('$name','$regNo','$doctorUsername', '$doctorPassword', '$imagePath')";
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
