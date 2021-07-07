/*

If you want the app to work on your local network then you have to change the _condition variable to false
then you have to change the ip address in the urlAP in default which is [IP_ADDRESS_IPV4] you have to change
this with your ipv4 you can find your ipc4 by going to Command Prompt (CMD) and type ipconfig the copy the ipv4
of your Wireless LAN adapter and connect your phone with the same network to check everything is working correct
go to your phone's browser and type the ipv4 you get earlier for example if your ipv4 is 192.168.137.1 type
192.168.137.1/thacker and it should work

to login to your admin panel in the web you can use the below credentials

ID:- 12345678
Password:- Password
*/

// if you want to use it online change this value to true
const bool _condition = false;
const httpAP = (_condition) ? "https" : "http";
const urlAP = (_condition) ? "YOUR_SITE_URL" : "IP_ADDRESS_IPV4";
const path = (_condition) ? "/api/" : "/thacker/api/";

// Do not change the below codes
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
