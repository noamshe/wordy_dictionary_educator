<?php
  $con=mysqli_connect("localhost","root","","wordydb");
  // Check connection
  if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  $result = mysqli_query($con, "SELECT * FROM archive where theme_id = ".$_POST["theme_id"]);

  $arr = array();
  while($row = mysqli_fetch_array($result)) {
    $arr1 = array();
    $arr1['word'] = $row['word'];
    $arr1['definition'] = $row['def1'];
    $arr1['checked'] = $row['checked'];
    //$arr[$row['id']] = $row['word'];
    $arr[$row['id']] = $arr1;
  }

  $jsonArray = json_encode($arr);
  echo $jsonArray;

  mysqli_close($con);
?>
