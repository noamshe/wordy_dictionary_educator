<?php
  $con=mysqli_connect("localhost","root","123123","wordydb");

  // Check connection
  if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  mysqli_query($con, 'UPDATE archive SET green_flag = 0, active = 1 WHERE id = '.$_POST["id"]);

  mysqli_close($con);

?>
