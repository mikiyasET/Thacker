import 'dart:convert';

import 'package:device_info/device_info.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'package:thacker/functions/slide.dart';
import 'package:thacker/pages/dots.dart';
import 'package:thacker/pages/login.dart';
import 'package:thacker/pages/sliders.dart';
import 'package:thacker/util.dart';

class WelcomeScreen extends StatefulWidget {
  @override
  _WelcomeScreenState createState() => _WelcomeScreenState();
}

class _WelcomeScreenState extends State<WelcomeScreen> {
  bool submit = false;
  int currentPage = 0;
  final PageController _pageController = PageController(initialPage: 0);

  @override
  void initState() {
    super.initState();
  }

  _onPageChanged(int index) {
    setState(() {
      currentPage = index;
    });
  }

  @override
  void dispose() {
    super.dispose();
    _pageController.dispose();
  }

  @override
  StartM() async {
    setState(() {
      submit = true;
    });
    SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
    DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();
    AndroidDeviceInfo androidInfo = await deviceInfo.androidInfo;
    String brand = androidInfo.brand;
    var jsonData = null;
    // var url =
    //     'http://localhost/thacker/api/access.php?device=$brand&app=Plus&version=1.0';
    // var response = await http.get(url);

    final url = Uri(
        scheme: httpAP,
        host: urlAP,
        path: path + accessAP,
        queryParameters: {'device': brand, 'app': 'Plus', 'version': '2.0'});
    var response = await http.get(url, headers: getAP);

    print('Response status: ${response.statusCode}');
    print('Response body: ${response.body}');
    if (response.statusCode == 200) {
      jsonData = json.decode(response.body);
      var id = "${jsonData["id"]}";
      if (id.length > 10) {
        setState(() {
          sharedPreferences.setBool('NewUser', false);
          sharedPreferences.setString("id", id);
          Navigator.pushReplacement(context,
              MaterialPageRoute(builder: (context) {
            return Login();
          }));
        });
      } else {
        setState(() {
          submit = false;
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
    }
//    return Navigator.pushReplacement(
//        context,
//        MaterialPageRoute(
//          builder: (context) => Login(),
//        ));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        alignment: Alignment.center,
        padding: EdgeInsets.only(top: 80.0),
        child: Column(
          children: <Widget>[
            SizedBox(
              height: 20.0,
            ),
            Expanded(
              child: Stack(
                alignment: AlignmentDirectional.bottomCenter,
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.fromLTRB(30.0, 0.0, 30.0, 0.0),
                    child: PageView.builder(
                      onPageChanged: _onPageChanged,
                      controller: _pageController,
                      itemBuilder: (context, index) => Sliders(index),
                      itemCount: slideList.length,
                    ),
                  ),
                  Stack(
                    alignment: AlignmentDirectional.topStart,
                    children: <Widget>[
                      Container(
                        margin: EdgeInsets.only(bottom: 35),
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: <Widget>[
                            for (int i = 0; i < slideList.length; i++)
                              if (i == currentPage)
                                SlideDots(true)
                              else
                                SlideDots(false)
                          ],
                        ),
                      ),
                      SizedBox(height: 120.0),
                    ],
                  ),
                ],
              ),
            ),
            SizedBox(
              height: 20.0,
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Container(
                  width: submit ? 88.0 : null,
                  height: submit ? 40.0 : null,
                  child: MaterialButton(
                    padding: submit
                        ? null
                        : EdgeInsetsDirectional.fromSTEB(
                            30.0, 13.0, 30.0, 13.0),
                    color: Colors.teal,
                    child: submit
                        ? SpinKitRing(
                            color: Colors.white, size: 25.0, lineWidth: 2.5)
                        : Text(
                            "Start Messaging",
                            style: TextStyle(color: Colors.white),
                          ),
                    onPressed: () => submit ? null : StartM(),
                  ),
                ),
                SizedBox(
                  height: 60.0,
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
