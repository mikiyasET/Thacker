<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With");
include '../private/connect.php';


if (isset($_GET['id']) && isset($_GET['code'])) {
	
	$req = $_GET['id'];
	$sms = $_GET['code'];

	$code = new code();
	$code->process($req,$sms);
}


?>