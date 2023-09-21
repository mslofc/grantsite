<?php
$servername = "localhost"; // Replace with your database server name or IP address
$username = "msl"; // Replace with your database username
$password = "hate"; // Replace with your database password
$dbname = "loginsystem"; // Replace with your database name

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
