<?php	                                       	
$senderName = $_POST['name'];
$senderEmail = $_POST['email-address'];
$recip = "contact@get-tls.com";

if(!isset($_POST['mini_verify'])) {
	die("Sorry, looks like something went wrong. This doesn't usually happen.");
}

$msg = "A new message has been received through the TLS website. Here are the details.";

foreach($_POST as $key=>$val){
	$msg .= "\r\n";
	$msg .= $key . ": ". $val;
	$msg .= "\r\n";
	$msg .= "\r\n";
}

$headers = "From: \" Website Feedback \" <noreply@get-tls.com>" . "\r\n"; 
$headers .= "Reply-To: ".$senderEmail."\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n"; 

mail($recip,$_POST['subject'],$msg,$headers);

header("location:http://get-tls.com/thanks.html");


