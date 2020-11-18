<?php
  $servername = "localhost";
  $username = "ldore";
  $password = "shegua12";
  $dbname = "compass";
  /*$servername = "dore.db";
  $username = "comp";
  $password = "compass1";
  $dbname = "Compass";*/


  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    //echo "unsuccessful\n";
    die("Connection failed: " . $conn->connect_error);
  }
  //echo "Connected successfully\n";

  if( empty($_REQUEST["data"]) ) {
    $sql = "SELECT title as entry, answer, nature, economy, society, wellbeing FROM entries";

    $result = $conn->query($sql);
    if( $result->num_rows > 0 ) {
      $dbdata = array();
      while($row = $result->fetch_assoc()) {
        $row["total"] = $row["nature"] + $row["economy"] + $row["society"] + $row["wellbeing"];
        $dbdata[]=$row;
      }
      $myfile = fopen("assets/newentries.json", "w" ) or die( "Unable" );
      fwrite( $myfile, json_encode($dbdata, JSON_NUMERIC_CHECK ) );
      fclose($myfile);
      echo json_encode($dbdata, JSON_NUMERIC_CHECK );
    }
  } else {

    $d = $_REQUEST["data"];
    header('Content-Type: application/json');
    $json_pretty = json_encode(json_decode($d), JSON_PRETTY_PRINT);
    //echo $json_pretty;

    //$data = json_decode($json_pretty);
    $data = json_decode($d);

    //echo "\n";
    foreach( $data as $dat ) {
      if( $dat->comp != "" ) {
        $sql = "UPDATE entries SET " . $dat->comp . " = `". $dat->comp ."` + 1 WHERE title = '" .$dat->name ."'";
        if ($conn->query($sql) === TRUE) {
          echo "success";
        } else {
          echo "Error updating record: " . $conn->error;
        }
      }

    }
  }

$conn->close();

?>
