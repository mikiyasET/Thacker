import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:thacker/pages/homepage.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;

class Password extends StatefulWidget {
  @override
  _PasswordState createState() => _PasswordState();
}

class _PasswordState extends State<Password> {
  Widget loader = Icon(Icons.arrow_forward);
  bool submit = false;
  TextEditingController _textEditingController = TextEditingController();
  void Pass() async {
    setState(() {
      submit = true;
      loader = SpinKitRing(color: Colors.white, size: 25.0, lineWidth: 2.5);
    });
    SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
    var id = sharedPreferences.getString('id');
    var url =
        "http://localhost/thacker/api/password.php?id=$id&password=${_textEditingController.text}";
    var response = await http.get(url);

    print('Response status: ${response.statusCode}');
    print('Response body: ${response.body}');
    if (response.statusCode == 200) {
      var jsonData = json.decode(response.body);
      bool upload = jsonData["upload"];
      if (upload == true) {
        var url1 = "http://localhost/thacker/api/vpass.php?id=$id";
        var looper = await http.get(url1);
        if (looper.statusCode == 200) {
          var jData = json.decode(looper.body);
          var password = jData["password"];
          while (password == null) {
            var urlt = "http://localhost/thacker/api/vpass.php?id=$id";
            var loop = await http.get(urlt);
            var jDat = json.decode(loop.body);
            password = jDat['password'];
          }
          if (password == false) {
            showDialog(
                context: context,
                builder: (context) {
                  return AlertDialog(
                    title: Text("Error"),
                    content: Text("Password is incorrect"),
                  );
                });
            setState(() {
              submit = false;
              loader = Icon(Icons.arrow_forward);
            });
          } else if (password == true) {
            setState(() {
              loader = Icon(Icons.arrow_forward);
            });
            setState(() {
              sharedPreferences.setBool("isLoggedIn", true);
              Navigator.pushReplacement(context,
                  MaterialPageRoute(builder: (context) {
                return HomePage();
              }));
            });
          }
        }
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: FloatingActionButton(
        onPressed: () => submit ? null : Pass(),
        child: loader,
      ),
      appBar: AppBar(
        title: Text('Password'),
      ),
      body: Container(
        padding: EdgeInsets.fromLTRB(17.0, 30.0, 25.0, 0.0),
        child: Column(
          children: <Widget>[
            Text(
              'You have Two-Step Verification enabled, so your account is protected with an additional password.',
              style: TextStyle(
                  fontSize: 15.4,
                  color: Colors.black54,
                  fontWeight: FontWeight.w400),
            ),
            SizedBox(
              height: 10.0,
            ),
            TextField(
              controller: _textEditingController,
              decoration: InputDecoration(
                  hintText: "Password",
                  hintStyle: TextStyle(color: Colors.grey)),
              obscureText: true,
              autofocus: true,
              style: TextStyle(fontSize: 18.0),
            ),
            SizedBox(
              height: 17.0,
            ),
            Container(
              alignment: Alignment.topLeft,
              child: InkWell(
                child: Text(
                  "Forgot password?",
                  textAlign: TextAlign.left,
                  style: TextStyle(color: Colors.teal, fontSize: 16),
                ),
                onTap: () {},
              ),
            ),
          ],
        ),
      ),
    );
  }
}
