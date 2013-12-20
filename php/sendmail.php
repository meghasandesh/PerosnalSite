<?php
$subject = $_POST["subject"];
$sender = "Sender name: ".$_POST["sender"];
$message = "Sender email: ".$_POST["email"]."\n\nMessage: ".$_POST["message"];
$toAddress = "meghasandeshani@gmail.com";
if(isset($_POST["subject"]) && isset($_POST["sender"]) && isset($_POST["message"]) && isset($_POST["email"]))
{
	if (mail($toAddress, $subject, $message, $sender)) {
	   echo "1";
	  } 
	  else {
	   echo "0";
	   }
}
?>