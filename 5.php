<?php
  $con=mysqli_connect("localhost","root","","wordydb");
  // Check connection
  if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  $result = mysqli_query($con, "SELECT id, word FROM archive");
  header('Content-Type: text/html; charset=UTF-8'); 
  echo "<table border='1'>
  <tr>
  <th>Word</th>
  </tr>";

  $array = array();
  while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['word'] . "</td>";
    echo "</tr>";
  }
  echo "</table>";
  mysqli_close($con);
?>
<script language="javascript">
  console.log("hello");
</script>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

<!-- Optional: Include the jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<!-- Optional: Incorporate the Bootstrap JavaScript plugins -->
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
