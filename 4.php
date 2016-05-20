<?php
  $con=mysqli_connect("localhost","root","123123","wordydb");
  $con->set_charset("utf8");
  // Check connection
  if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
mysqli_query("SET NAMES 'utf8'");
  $result = mysqli_query($con, "SELECT * FROM themes");

  $arr = array();
  while($row = mysqli_fetch_array($result)) {
    $arr1 = array();
    $result2 = mysqli_query($con, "SELECT COUNT(*) AS cc FROM archive WHERE theme_id = ".$row['id']);
    $row2 = mysqli_fetch_array($result2);
    $arr1['id'] = $row['id'];
    $arr1['name'] = $row['name'];
    $arr1['count'] = $row2['cc'];
    $arr[$row['id']] = $arr1;
    //$arr[$row['id']] = $row['name'];
  }

  $jsonArray = json_encode($arr);
  echo $jsonArray;

  mysqli_close($con);
?>
