<?php
  $con=mysqli_connect("mysql","root","123123","wordydb");
  $con->set_charset("utf8");
  // Check connection
  if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  mysqli_query($con, 'INSERT INTO themes (name, created_at) VALUES ("'.$_POST["name"].'", now())');
  mysqli_close($con);
?>
