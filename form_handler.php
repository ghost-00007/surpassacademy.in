<?php
// Include PHPMailer autoload file (adjust the path based on where PHPMailer is located)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'lib/phpmailer/get_oauth_token.php';  // Adjust the path if necessary
 // Make sure to adjust this if you are not using Composer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    
    // Create the email subject and message
    $subject = "New Course Sign-Up";
    $message = "
    <html>
    <head>
        <title>New Course Sign-Up</title>
    </head>
    <body>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
    </body>
    </html>
    ";

    // Create PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com';                        // Set the SMTP server to Gmail
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'your-email@gmail.com';             // Your Gmail address
        $mail->Password = 'your-email-password';              // Your Gmail password or App password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;   // Enable TLS encryption
        $mail->Port = 587;                                    // TCP port to connect to

        // Recipients
        $mail->setFrom($email, $name);                        // Sender's email address and name
        $mail->addAddress('jerosebrowny2004@gmail.com');       // Recipient's email address

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = $message;

        // Send the email
        $mail->send();
        echo "Thank you for signing up! We will get back to you soon.";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
