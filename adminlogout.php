<?php
session_start();
session_destroy();

// Redirect to the login page after logging out
header("Location: adminlog.html");
exit();
?>
