<?php
// echo 'hello word';
header("Acces-Control-Allow-Origin: *");
header("Acces-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$errors = array();

if ($_SERVER['REQUEST_METHOD'] === 'POST'){

    if (empty($_POST['name'])) {
        $errors[] = 'Aucun message saisit.';
    } else {
        $name = $_POST['name'];
    }
    if (empty($_POST['email'])){
        $errors[] = 'Aucun Email saisit.'
    } else {
        $email = $_POST['email'];

        // Validating the email
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $error[] = 'Email invalide.';
        }
    }
    if (empty($_POST['message'])) {
        $errors[] = 'Aucun message saisit.';
    } else {
        $message = $_POST['message'];
    }
    if (empty($errors)) {
        $date = date('j, F Y h:i A');
        
        return array(
            'driver' => 'smtp',
            'smtp' => array(
              'host' => 'smtp.mailtrap.io',
              'port' => 2525,
              'username' => '844c58ce6602dd',
              'password' => 'f16d216b5c7a5e',
              'timeout' => 5
            ),
            'newline' => "\r\n"
          );

        $emailBody = "
        <html>
            <head>
                <title>$email is contacting you</title>
            </head>
            <body style=\"background-color:#fafafa;\">
                <div style=\"padding:20px;\">
                Date: <span style=\"color:#888\">$date</span>
                <br>
                Name: <span style=\"color:#888\">$name</span>
                <br>
                Email: <span style=\"color:#888\">$email</span>
                <br>
                Message: <div style=\"color:#888\">$message</div>
                </div>
            </body>
        </html>
        ";
        
        $headers = 	'From: Formulaire de contact Portfolio' . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "MIME-Version: 1.0\r\n" .
        "Content-Type: text/html; charset=iso-8859-1\r\n";
    
        $to = 'quentin.brisset290@gmail.com';
        $subject = 'Contacting you';

        if (mail($to, $subject, $emailBody, $headers)) {
            $sent = true;
        }
    }
}
?>

<?php if (!empty(errors)) : ?>
{
    "status": "fail",
    "error": <?php echo json_encode($errors) ?>
}
<?php endif; ?>

<?php if (isset($sent) && $sent === true) : ?>
{
    "status": "success",
    "message": "Your data was successfully submitted"
}
<?php endif; ?>