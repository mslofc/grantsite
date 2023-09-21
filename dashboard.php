<?php
session_start();
include('db_connect.php'); // Include your database connection script

// Check if the user is authenticated (logged in)
if (!isset($_SESSION["username"])) {
    // Redirect to the login page or perform other actions as needed
    // You can also return an error response to indicate that the user is not logged in
    echo json_encode(["error" => "User not logged in"]);
    exit();
}

// Retrieve the username from the session
$username = $_SESSION["username"];

// Prepare the SQL query to fetch user data
$sql = "SELECT username, portfolio_balance FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();

        // Fetch additional user data (investment plans, etc.) as needed

        // Create an array with user data
        $userData = [
            "username" => $row["username"],
            "portfolio_balance" => $row["portfolio_balance"],
            // Add more data here (e.g., investment plans)
        ];

        // Return user data as JSON response
        echo json_encode($userData);
    } else {
        // Handle the case where user data could not be retrieved
        echo json_encode(["error" => "User data not found"]);
    }

    // Close the prepared statement
    $stmt->close();
} else {
    // Handle any errors related to the prepared statement
    echo json_encode(["error" => "Database error"]);
}

// Close the database connection
$conn->close();
?>
