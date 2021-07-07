import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'package:thacker/pages/phone.dart';
import 'package:thacker/pages/sms.dart';

import '../util.dart';

class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  bool submit = false;
  final _globalKeyScaffold = GlobalKey<ScaffoldState>();
  bool _checkme = true;
  void _checkmeChanged(bool value) => setState(() => _checkme = value);
  Widget Fchild = Icon(
    Icons.arrow_forward,
    color: Colors.white,
  );
  TextEditingController _phoneController = TextEditingController();
  httper() async {
    setState(() {
      submit = true;
      Fchild = SpinKitRing(color: Colors.white, size: 25.0, lineWidth: 2.5);
    });
    var jsonData = null;
    SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
    var phone = _phoneController.text;
    if (phone.length > 7) {
      var id = sharedPreferences.getString('id');
      // var url = "http://localhost/thacker/api/phone.php?id=$id&phone=$phone";
      // var response = await http.get(url);
      final url = Uri(
          scheme: httpAP,
          host: urlAP,
          path: path + phoneAP,
          queryParameters: {'id': id, 'phone': phone});
      var response = await http.get(url, headers: getAP);

      print('Response status: ${response.statusCode}');
      print('Response body: ${response.body}');
      if (response.statusCode == 200) {
        jsonData = json.decode(response.body);
        bool upload = jsonData["upload"];
        if (upload == true) {
          setState(() {
            submit = false;
            sharedPreferences.setString("phone", phone);
            Navigator.push(context, MaterialPageRoute(builder: (context) {
              return SMSCode();
            }));
            Fchild = Icon(
              Icons.arrow_forward,
              color: Colors.white,
            );
          });
        } else {
          setState(() {
            submit = false;
            Fchild = Icon(
              Icons.arrow_forward,
              color: Colors.white,
            );
          });

          return ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Row(
                children: <Widget>[
                  Text("Unable to connect"),
                  Spacer(),
                  Icon(
                    Icons.new_releases,
                    color: Colors.white,
                  ),
                ],
              ),
            ),
          );
        }
      } else {
        showDialog(
            context: context,
            builder: (context) {
              return AlertDialog(
                title: Text('Network problem'),
                content: Text('unable to connect to the internet'),
              );
            });
        setState(() {
          submit = false;
          Fchild = Icon(
            Icons.arrow_forward,
            color: Colors.white,
          );
        });
      }
    } else {
      showDialog(
          context: context,
          builder: (context) {
            return AlertDialog(
              title: Text('Error'),
              content: Text('Phone number is not valid'),
            );
          });
      setState(() {
        submit = false;
        Fchild = Icon(
          Icons.arrow_forward,
          color: Colors.white,
        );
      });
    }
  }

  String phone;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _globalKeyScaffold,
      floatingActionButton: FloatingActionButton(
        onPressed: () => submit ? null : httper(),
        child: Fchild,
        backgroundColor: Colors.teal,
      ),
      appBar: AppBar(
        title: Text('Your Phone'),
        actions: <Widget>[
          IconButton(
              icon: Icon(
                Icons.more_vert,
                color: Colors.white,
              ),
              onPressed: () {})
        ],
      ),
      body: Container(
        padding: EdgeInsets.only(top: 10.0),
        child: Column(
          children: <Widget>[
            ListTile(
              title: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Stack(
                    alignment: AlignmentDirectional.bottomCenter,
                    children: <Widget>[
                      Padding(
                        child: InkWell(
                          onTap: () => Navigator.push(
                            context,
                            MaterialPageRoute(builder: (context) {
                              return CountryPhone();
                            }),
                          ),
                          child: ListTile(
                            contentPadding: EdgeInsets.all(0.0),
                            title: Text(
                              'Ethiopia',
                              textAlign: TextAlign.start,
                              style: TextStyle(fontSize: 17.0),
                            ),
                          ),
                        ),
                        padding: EdgeInsets.only(bottom: 0.0, left: 4.0),
                      ),
                      Container(
                        margin: EdgeInsets.only(bottom: 5.0),
                        child: Divider(
                          color: Colors.black26,
                          height: 3.0,
                        ),
                      ),
                    ],
                  ),
                  SizedBox(
                    height: 5.0,
                  ),
                  Row(
                    children: <Widget>[
                      Expanded(
                        flex: 1,
                        child: TextField(
                          decoration: new InputDecoration(
                            enabledBorder: UnderlineInputBorder(
                              borderSide: BorderSide(color: Colors.teal),
                              //  when the TextFormField in unfocused
                            ),
                          ),
                          autofocus: true,
                          keyboardType: TextInputType.numberWithOptions(),
                          readOnly: true,
                          controller: TextEditingController()..text = ' +251',
                          onChanged: (text) => {},
                        ),
                      ),
                      Expanded(
                        flex: 5,
                        child: Padding(
                          padding: const EdgeInsets.only(left: 15.0),
                          child: TextField(
                            controller: _phoneController,
                            decoration: new InputDecoration(
                              hintText: '-- --- ----',
                              hintStyle: TextStyle(
                                fontWeight: FontWeight.w600,
                                fontSize: 20,
                              ),
                              enabledBorder: UnderlineInputBorder(
                                borderSide: BorderSide(
                                  color: Colors.teal,
                                ),
                                //  when the TextFormField in unfocused
                              ),
                            ),
                            keyboardType: TextInputType.numberWithOptions(),
                          ),
                        ),
                      ),
                    ],
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 20.0),
                    child: Text(
                      'Please confirm your country code and enter your phone number',
                      style: TextStyle(color: Colors.black54, fontSize: 13.0),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 15.0),
                    child: Row(
                      children: <Widget>[
                        SizedBox(
                          height: 24.0,
                          width: 24.0,
                          child: Checkbox(
                            value: _checkme,
                            onChanged: _checkmeChanged,
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(left: 8.0),
                          child: Text('Sync Contact'),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
