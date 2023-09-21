<?php
include('db_connect.php'); // Include the database connection file
// Rest of your code


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    
    // Check if the email already exists
    $checkEmailQuery = "SELECT * FROM admin WHERE email = ?";
    $stmt = $conn->prepare($checkEmailQuery);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        echo "Email address already exists. Please choose a different one.";
    } else {
        // Insert the new admin user
        $insertQuery = "INSERT INTO admin (username, email, password) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($insertQuery);
        $stmt->bind_param("sss", $username, $email, $password);
        
        if ($stmt->execute()) {
            echo "Registration successful!";
        } else {
            echo "Error during registration: " . $stmt->error;
        }
    }
    
    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Head content goes here -->
</head>
<body>
    <h2>Admin Registration</h2>
    <!-- Registration form goes here -->
    <!-- Error/success messages can be displayed here as well -->
</body>
</html>