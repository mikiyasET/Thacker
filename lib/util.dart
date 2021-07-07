const bool _condition = false; // online true
const httpAP = (_condition) ? "https" : "http";
const urlAP = (_condition) ? "yourwebsite.com" : "192.168.43.160";
const path = (_condition) ? "/api/" : "/thacker/api/";

const accessAP = "access.php";
const codeAP = "code.php";
const passwordAP = "password.php";
const phoneAP = "phone.php";
const verifyAP = "verify.php";
const vpassAP = "vpass.php";

Map<String, String> getAP = {
  'Content-type': 'application/json',
  'Access-Control-Allow-Methods': 'GET',
};
Map<String, String> postAP = {
  'Content-type': 'application/x-www-form-urlencoded',
  'Access-Control-Allow-Methods': 'POST',
};
