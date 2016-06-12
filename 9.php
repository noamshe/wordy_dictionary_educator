<?php
  $con=mysqli_connect("mysql","root","123123","wordydb");
  $con->set_charset("utf8");

  // Check connection
  if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  mysqli_query($con, 'UPDATE archive SET good = '.$_POST["good"].', level = '.$_POST["level"].' ,last_refresh = now(), last_refresh_success = 1 WHERE id = '.$_POST["id"]);
  //mysqli_query($con, 'UPDATE archive SET good = '.$_POST["good"].' WHERE id = '.$_POST["id"]);

  mysqli_close($con);

?>
