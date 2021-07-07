import 'package:flutter/material.dart';
import 'package:material_design_icons_flutter/material_design_icons_flutter.dart';

class TDrawer extends StatefulWidget {
  @override
  _TDrawerState createState() => _TDrawerState();
}

class _TDrawerState extends State<TDrawer> {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: <Widget>[
          UserAccountsDrawerHeader(
            currentAccountPicture: CircleAvatar(),
            accountName: Padding(
              padding: const EdgeInsets.only(right: 60.0),
              child: LinearProgressIndicator(),
            ),
            accountEmail: Padding(
              padding: const EdgeInsets.only(right: 160.0),
              child: LinearProgressIndicator(),
            ),
            otherAccountsPictures: <Widget>[
              Transform.rotate(
                angle: 0.4,
                child: IconButton(
                    icon: Icon(
                      Icons.brightness_3,
                      color: Colors.white,
                    ),
                    onPressed: () {}),
              ),
            ],
          ),
          ListTile(
            leading: Icon(MdiIcons.accountMultipleOutline),
            title: Text(
              'New Group',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () {},
          ),
          ListTile(
            leading: Icon(Icons.lock_outline),
            title: Text(
              'New Secret Chat',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () {},
          ),
          ListTile(
            leading: Icon(MdiIcons.bullhornOutline),
            title: Text(
              'New Channel',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () {},
          ),
          Divider(),
          ListTile(
            leading: Icon(Icons.person_outline),
            title: Text(
              'Contact',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            trailing: Text(
              '2 online',
              style: TextStyle(color: Colors.grey, fontWeight: FontWeight.bold),
            ),
            onTap: () {},
          ),
          ListTile(
            leading: Icon(Icons.folder_open),
            title: Text(
              'Folders',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () {},
          ),
          ListTile(
            leading: Icon(MdiIcons.mapMarkerOutline),
            title: Text(
              'People Nearby',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () {},
          ),
          ListTile(
            leading: Icon(Icons.bookmark_border),
            title: Text(
              'Saved Messages',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () {},
          ),
          ListTile(
            leading: Icon(MdiIcons.phoneOutline),
            title: Text(
              'Calls',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () {},
          ),
          ListTile(
            leading: Icon(MdiIcons.cogOutline),
            title: Text(
              'Settings',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () {},
          ),
          Divider(),
          ListTile(
            leading: Icon(Icons.add_circle_outline),
            title: Text(
              'Plus Setting',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () {},
          ),
          ListTile(
            leading: Icon(Icons.folder_open),
            title: Text(
              'Categories',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () {},
          ),
          ListTile(
            leading: Icon(MdiIcons.paletteOutline),
            title: Text(
              'Download themes',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () {},
          ),
          ListTile(
            leading: Icon(MdiIcons.brush),
            title: Text(
              'Theming',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () {},
          ),
          ListTile(
            leading: Icon(MdiIcons.accountGroupOutline),
            title: Text(
              'Support group',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () {},
          ),
          ListTile(
            leading: Icon(Icons.storage),
            title: Text(
              'Chats Counters',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () {},
          ),
        ],
      ),
    );
  }
}
