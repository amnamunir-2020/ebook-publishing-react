<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "success" => false,
        "message" => "Invalid request."
    ]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$phone = trim($data["phone"] ?? "");
$service = trim($data["service"] ?? "");

if (!$name || !$email || !$phone || !$service) {
    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields."
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);
    exit;
}

$to = "YOUR-EMAIL@example.com";

$subject = "New Ebook Publishing Inquiry";

$message = "
New Ebook Publishing Inquiry

Name: $name
Email: $email
Phone: $phone
Service: $service
";

$headers = "From: Website Form <no-reply@yourdomain.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $message, $headers)) {

    echo json_encode([
        "success" => true,
        "message" => "Form submitted successfully."
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "Unable to send email."
    ]);
}
?>