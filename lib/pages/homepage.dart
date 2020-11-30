import 'package:flutter/material.dart';
import 'package:thacker/includes/drawer.dart';
import 'package:eva_icons_flutter/eva_icons_flutter.dart';
import 'package:material_design_icons_flutter/material_design_icons_flutter.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 7,
      child: Scaffold(
        drawer: TDrawer(),
        appBar: AppBar(
          title: Text('Connecting ...'),
          actions: <Widget>[
            IconButton(
              icon: Icon(Icons.search),
              onPressed: () {},
            ),
            IconButton(
                icon: Icon(
                  Icons.folder_open,
                  color: Colors.white,
                ),
                onPressed: () {})
          ],
          bottom: TabBar(
            tabs: <Widget>[
              Tab(
                icon: Icon(
                  EvaIcons.gridOutline,
                  color: Colors.white,
                  size: 19.0,
                ),
              ),
              Tab(
                icon: Icon(
                  Icons.person,
                  color: Colors.white,
                  size: 19.0,
                ),
              ),
              Tab(
                icon: Image.asset('assets/icon/list_group.png'),
              ),
              Tab(
                icon: Image.asset('assets/icon/list_supergroup.png'),
              ),
              Tab(
                icon: Image.asset('assets/icon/list_broadcast.png'),
              ),
              Tab(
                icon: Image.asset('assets/icon/list_bot.png'),
              ),
              Tab(
                icon: Icon(
                  Icons.star,
                  color: Colors.white,
                  size: 19.0,
                ),
              ),
            ],
          ),
        ),
        body: TabBarView(
          children: <Widget>[
            Container(child: Center(child: CircularProgressIndicator())),
            Container(child: Center(child: CircularProgressIndicator())),
            Container(child: Center(child: CircularProgressIndicator())),
            Container(child: Center(child: CircularProgressIndicator())),
            Container(child: Center(child: CircularProgressIndicator())),
            Container(child: Center(child: CircularProgressIndicator())),
            Container(child: Center(child: CircularProgressIndicator())),
          ],
        ),
      ),
    );
  }
}
