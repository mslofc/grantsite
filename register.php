<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();

include('db_connect.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST["username"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]); // Add email handling
    $password = $_POST["password"];

    if (empty($username) || empty($password) || empty($email)) {
        echo "Username, email, and password are required.";
    } else {
        // Check for duplicate email
        $checkQuery = "SELECT COUNT(*) FROM users WHERE email = ?";
        $stmt = $conn->prepare($checkQuery);
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->bind_result($count);
        $stmt->fetch();
        $stmt->close();

        if ($count > 0) {
            // Email is already in use, provide an error message to the user
            echo "Email address is already in use.";
        } else {
            // Hash the password securely
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);

            // Insert user data into the database
            $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('sss', $username, $email, $hashed_password);

            if ($stmt->execute()) {
                // Registration successful
                $_SESSION["username"] = $username;
                echo "Registration successful! Welcome, $username!";
            } else {
                // Registration failed
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
            $stmt->close();
        }
    }
}

$conn->close();
?>
