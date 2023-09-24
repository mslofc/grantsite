<?php
$host = 'localhost';
$username = 'msl';
$password = 'hate';
$database = 'loginsystem';

// Create a database connection
$connection = mysqli_connect($host, $username, $password, $database);

// Check the connection
if (!$connection) {
    die('Error connecting to the database: ' . mysqli_connect_error());
}

echo 'Connected to the database';

// Close the database connection when done
mysqli_close($connection);
?>







