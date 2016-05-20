<?php

  
  #file_put_contents('stderr', print_r($_SERVER['HTTP_USER_AGENT'] . "\r\n", TRUE), FILE_APPEND);
  #file_put_contents('stderr', print_r($_SERVER['HTTP_REFERER'] . "\r\n", TRUE), FILE_APPEND);

  $con=mysqli_connect("localhost","root","123123","wordydb");
  $con->set_charset("utf8");
  // Check connection
  if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  mysqli_query($con, 'INSERT INTO archive (word, def1, def2, def3, theme_id, updated_at, created_at) VALUES ("'.$_POST["word"].'","'.$_POST["def1"].'","def2","def3", '.$_POST["theme"].', now(), now()) ON DUPLICATE KEY UPDATE updated_at = now(), count = count + 1');

  mysqli_close($con);

?>
