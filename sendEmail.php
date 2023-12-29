<?php
// Retrieving form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Setting up email parameters
$to = 'inezarene116@gmail.com.com'; // my email address
$subject = 'New Contact Form Submission';
$headers = "From: $name <$email>";

// Send the email
mail($to, $subject, $message, $headers);

// Return a response to the client-side script
$response = array('success' => true);
echo json_encode($response);
?>
