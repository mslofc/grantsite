<?php
session_start();

// Check if the user is logged in as an admin
if (!isset($_SESSION['admin_id'])) {
    header("Location: adminlog.html");
    exit();
}

// Include your database connection script
include('db_connect.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $user_id = $_POST['user_id'];
    $amount = $_POST['amount'];
    // Add more fields as needed

    // Validate and sanitize the data (implement your validation logic)

    // Insert the deposit into the transactions table
    $sql = "INSERT INTO transactions (user_id, amount, transaction_type) VALUES (?, ?, 'deposit')";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("dd", $user_id, $amount); // Use "dd" for double data type
        if ($stmt->execute()) {
            // Update the user's portfolio balance
            $sql = "UPDATE users SET portfolio_balance = portfolio_balance + ? WHERE id = ?";
            $stmt = $conn->prepare($sql);

            if ($stmt) {
                $stmt->bind_param("di", $amount, $user_id);
                if ($stmt->execute()) {
                    // Deposit successful
                    header("Location: admin_dashboard.php?success=1");
                    exit();
                } else {
                    // Handle the database update error
                    echo "Error updating the database. Please try again later."; // You can customize this error message.
                }
            } else {
                // Handle the database update error
                echo "Error updating the database. Please try again later."; // You can customize this error message.
            }
        } else {
            // Handle the database insert error
            echo "Error inserting the deposit record. Please try again later."; // You can customize this error message.
        }
    } else {
        // Handle the database insert error
        echo "Error inserting the deposit record. Please try again later."; // You can customize this error message.
    }

    // Close the database connection
    $conn->close();
} else {
    // Handle invalid form submission
    echo "Invalid request.";
}
?>
