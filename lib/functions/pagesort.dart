import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:thacker/pages/EmptyPage.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:thacker/pages/homepage.dart';
import 'package:thacker/pages/welcome.dart';
import 'package:thacker/pages/login.dart';

class PageSort extends StatefulWidget {
  @override
  _PageSortState createState() => _PageSortState();
}

class _PageSortState extends State<PageSort> {
  bool NewUser, LoggedIn, Nmessage, Lmessage;
  void initState() {
    super.initState();
    _loadThem();
  }

  void checkLogIn() async {
    SharedPreferences preferences = await SharedPreferences.getInstance();
    if (preferences.getBool('isLoggedIn')) {
      setState(() {
        Lmessage = true;
      });
    } else {
      setState(() {
        Lmessage = false;
      });
    }
  }

  void _loadThem() async {
    SharedPreferences preferences = await SharedPreferences.getInstance();
    setState(() {
      NewUser = preferences.getBool('NewUser') ?? true;
      LoggedIn = preferences.getBool('isLoggedIn') ?? false;
    });

    if (NewUser) {
      setState(() {
        Nmessage = true;
      });
    } else {
      Nmessage = false;
    }
  }

  @override
  Widget build(BuildContext context) {
    if (NewUser == true) {
      return WelcomeScreen();
    } else if (LoggedIn == true) {
      return HomePage(); //Login();
    } else if (NewUser == false) {
      return Login();
    } else {
      return EmptyPage();
    }
  }
}

void LogIn() async {
  SharedPreferences preferences = await SharedPreferences.getInstance();
  preferences.setBool('isLoggedIn', true);
}
