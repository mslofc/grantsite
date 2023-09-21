<?php
// Include your database connection script
include('db_connect.php');

// Query to retrieve the user's transaction history (replace with your actual query)
$user_id = $_SESSION['user_id']; // You need to have the user's ID in the session
$query = "SELECT date, transaction_type, amount, message FROM transactions WHERE user_id = ? ORDER BY date DESC LIMIT 10";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

// Fetch transaction data and return as JSON
$transactions = [];
while ($row = $result->fetch_assoc()) {
    $transactions[] = $row;
}

header('Content-Type: application/json');
echo json_encode($transactions);
?>
