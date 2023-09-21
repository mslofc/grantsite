<?php
// Include your database connection script
include('db_connect.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve user input
    $username = $_POST['username'];
    $password = $_POST['password'];

    // SQL query to retrieve admin user's information
    $sql = "SELECT id, username, password FROM admin_users WHERE username = ?";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 1) {
            // Admin user found, verify the password
            $row = $result->fetch_assoc();
            $hashedPassword = $row['password'];

            if (password_verify($password, $hashedPassword)) {
                // Password is correct, set session and redirect
                session_start();
                $_SESSION['admin_id'] = $row['id'];
                $_SESSION['admin_username'] = $row['username'];

                // Redirect to the admin dashboard or another page
                header("Location: admin_dashboard.html");
                exit();
            } else {
                // Password is incorrect
                echo "Incorrect password.";
            }
        } else {
            // Admin user not found
            echo "Admin user not found.";
        }

        $stmt->close();
    } else {
        // Handle database error
        echo "Database error: " . $conn->error;
    }
}
?>
