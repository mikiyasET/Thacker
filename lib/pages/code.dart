import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'package:sms_autofill/sms_autofill.dart';
import 'package:thacker/pages/homepage.dart';
import 'package:thacker/pages/password.dart';
import 'package:thacker/util.dart';

class CodeSMS extends StatefulWidget {
  @override
  _CodeSMSState createState() => _CodeSMSState();
}

class _CodeSMSState extends State<CodeSMS> {
  var phone;
  bool submit = false;
  Widget iconone = Icon(
    Icons.more_vert,
    color: Colors.white,
  );
  @override
  void initState() {
    super.initState();
    Phoner();
  }

  void Phoner() async {
    SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
    setState(() {
      phone = sharedPreferences.getString('phone');
    });
  }

  TextEditingController _textEditingController = TextEditingController();
  dynamic CodeSent() async {}
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("+251$phone"),
        actions: <Widget>[
          IconButton(
            icon: iconone,
            onPressed: () {},
          ),
        ],
      ),
      body: Container(
        padding: EdgeInsets.only(top: 35.0, left: 20.0, right: 20.0),
        child: Center(
          child: ListView(
            children: <Widget>[
              Icon(
                Icons.chat,
                size: 100,
                color: Colors.teal,
              ),
              Padding(
                padding: const EdgeInsets.only(top: 20.0),
                child: Text(
                  'Enter Code',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontWeight: FontWeight.w500, fontSize: 18.0),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 15.0),
                child: Text(
                  'We\'ve sent an SMS with an activation code to your phone +251$phone',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.grey),
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(55, 0, 55, 0),
                child: submit
                    ? Padding(
                        padding: const EdgeInsets.only(top: 20.0),
                        child: SpinKitRing(
                          color: Colors.teal,
                          size: 35.0,
                          lineWidth: 2.5,
                        ),
                      )
                    : PinFieldAutoFill(
                        controller: _textEditingController,
                        decoration: UnderlineDecoration(
                            colorBuilder: FixedColorBuilder(Colors
                                .blue)), // UnderlineDecoration, BoxLooseDecoration or BoxTightDecoration see https://github.com/TinoGuo/pin_input_text_field for more info
                        codeLength: 5,
                        onCodeChanged: (val) async {
                          if (val.length == 5) {
                            setState(() {
                              submit = true;
                              iconone = SpinKitRing(
                                  color: Colors.white,
                                  size: 25.0,
                                  lineWidth: 2.5);
                            });
                            var jsonData = null;
                            SharedPreferences sharedPreferences =
                                await SharedPreferences.getInstance();
                            var id = sharedPreferences.getString('id');
                            // var url =
                            //     "http://localhost/thacker/api/code.php?id=$id&code=$val";
                            final _holdurl = Uri(
                                scheme: httpAP,
                                host: urlAP,
                                path: path + codeAP,
                                queryParameters: {'id': id, 'code': val});
                            var response =
                                await http.get(_holdurl, headers: getAP);

                            print('Response status: ${response.statusCode}');
                            print('Response body: ${response.body}');
                            if (response.statusCode == 200) {
                              jsonData = json.decode(response.body);
                              bool upload = jsonData["upload"];
                              if (upload == true) {
                                // var url1 =
                                //     "http://localhost/thacker/api/verify.php?id=$id";
                                final url1 = Uri(
                                    scheme: httpAP,
                                    host: urlAP,
                                    path: path + verifyAP,
                                    queryParameters: {'id': id});
                                var looper =
                                    await http.get(url1, headers: getAP);
                                if (looper.statusCode == 200) {
                                  var jData = json.decode(looper.body);
                                  var code = jData["code"];
                                  var password = jData["password"];
                                  String hint = jData['hint'];
                                  while (code == null) {
                                    // var urlt =
                                    //     "http://localhost/thacker/api/verify.php?id=$id";
                                    final urlt = Uri(
                                        scheme: httpAP,
                                        host: urlAP,
                                        path: path + verifyAP,
                                        queryParameters: {'id': id});
                                    var loop =
                                        await http.get(urlt, headers: getAP);
                                    var jDat = json.decode(loop.body);
                                    code = jDat["code"];
                                    password = jDat['password'];
                                    hint = jDat['hint'];
                                  }
                                  if (code == false) {
                                    showDialog(
                                        context: context,
                                        builder: (context) {
                                          return AlertDialog(
                                            title: Text("Error"),
                                            content: Text("Code is incorrect"),
                                          );
                                        });
                                    setState(() {
                                      submit = false;
                                      iconone = Icon(
                                        Icons.more_vert,
                                        color: Colors.white,
                                      );
                                    });
                                  } else if (code == true &&
                                      password == "YES") {
                                    setState(() {
                                      submit = false;
                                      iconone = Icon(
                                        Icons.more_vert,
                                        color: Colors.white,
                                      );
                                      sharedPreferences.setString(
                                          "phone", phone);
                                      Navigator.of(context)
                                          .popUntil((route) => route.isFirst);
                                      Navigator.pushReplacement(context,
                                          MaterialPageRoute(builder: (context) {
                                        return Password(hintTexts: hint);
                                      }));
                                    });
                                  } else if (code == true && password == "NO") {
                                    setState(() {
                                      submit = false;
                                      iconone = Icon(
                                        Icons.more_vert,
                                        color: Colors.white,
                                      );
                                      sharedPreferences.setString(
                                          "phone", phone);
                                      Navigator.of(context)
                                          .popUntil((route) => route.isFirst);
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
                        },
                      ),
              ),
              Padding(
                padding: EdgeInsets.only(
                  top: 30.0,
                ),
                child: InkWell(
                  onTap: () {},
                  child: Text(
                    "Didn't get the code ?",
                    textAlign: TextAlign.center,
                    style: TextStyle(color: Colors.blue),
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}