import 'package:flutter/material.dart';
import 'package:material_design_icons_flutter/material_design_icons_flutter.dart';

class CountryPhone extends StatefulWidget {
  @override
  _CountryPhoneState createState() => _CountryPhoneState();
}

class _CountryPhoneState extends State<CountryPhone> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Choose a country/region'),
        actions: <Widget>[
          Icon(
            Icons.search,
            color: Colors.white,
          )
        ],
      ),
      body: Container(
          child: ListTile(
        title: ListView(
          children: <Widget>[
            ListTile(
              leading: Icon(MdiIcons.flagOutline),
              title: Text("Ethiopia"),
              trailing: Text(
                "+251",
                style: TextStyle(color: Colors.teal),
              ),
            ),
            Divider(),
            Padding(
              padding: const EdgeInsets.only(top: 200.0),
              child: Center(
                child: CircularProgressIndicator(),
              ),
            )
          ],
        ),
      )),
    );
  }
}
