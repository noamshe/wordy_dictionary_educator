<?php
  $con=mysqli_connect("localhost","root","","wordydb");
  // Check connection
  if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  $result = mysqli_query($con, "SELECT * FROM archive where theme_id = ".$_POST["theme_id"]);

  $arr = array();
  $now = new DateTime();
  while($row = mysqli_fetch_array($result)) {
    $arr1 = array();
    $arr1['word'] = $row['word'];
    $arr1['definition'] = $row['def1'];
    $arr1['checked'] = $row['checked'];
    $arr1['green_flag'] = $row['green_flag'];
    $arr1['good'] = $row['good'];
    $arr1['bad'] = $row['bad'];
    $arr1['last_refresh'] = $row['last_refresh'];
    $arr1['active'] = $row['active'];
    $arr1['current_datetime'] = $now;

    $arr[$row['id']] = $arr1;
  }

  $jsonArray = json_encode($arr);
  echo $jsonArray;

  mysqli_close($con);
?>
