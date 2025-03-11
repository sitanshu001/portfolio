
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $email   = isset($_POST['email']) ? $_POST['email'] : '';
    $message = isset($_POST['msg']) ? $_POST['msg'] : '';
    
    // Set the recipient email address
    $to = "iwguwu16@gmail.com";  // Replace with your email address
    $subject = "New Message from Your Website";
    
    // Create email headers
    $headers  = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Build the email content
    $body = "You have received a new message from your website:\n\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Message:\n" . $message;
    
    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>

