<?php
$servername = "localhost"; // Replace with your database server
$username = "msl"; // Replace with your database username
$password = "hate"; // Replace with your database password
$dbname = "loginsystem"; // Replace with your database name

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check if the connection is successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// You should not close the database connection here

?>
