<?php
session_start();

// Check if the user is logged in as an admin
if (!isset($_SESSION['admin_id'])) {
    header("Location: adminlog.html");
    exit();
}

// Include your database connection script
include('db_connect.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="admin_styles.css">
</head>
<body>
    <header>
        <h1>Welcome, <?php echo $_SESSION['admin_username']; ?></h1>
        <a href="logout.php">Logout</a>
    </header>
    <div class="content">
        <!-- Admin-specific content goes here -->
        <h2>Deposit Details</h2>
        <!-- Form to edit/send deposit details to user accounts -->
        <form action="process_deposit.php" method="post">
            <!-- Deposit form fields -->
            <!-- Example: User ID, Amount, Transaction Type, etc. -->
            <label for="user_id">User ID:</label>
            <input type="text" id="user_id" name="user_id" required><br><br>

            <label for="amount">Amount:</label>
            <input type="text" id="amount" name="amount" required><br><br>
            
            <!-- Add more fields as needed -->

            <input type="submit" value="Submit Deposit">
        </form>
    </div>
</body>
</html>
