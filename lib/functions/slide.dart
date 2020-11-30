import 'package:flutter/material.dart';

class Slide {
  final String imageUrl;
  final String title;
  final String description;

  Slide({this.imageUrl, this.title, this.description});
}

final slideList = [
  Slide(
      imageUrl: 'assets/icon/ic_launcher.png',
      title: 'Plus Messenger',
      description:
          'The world\'s fastest messaging app.\nIt is free and secure.'),
  Slide(
      imageUrl: 'assets/icon/intro2.png',
      title: 'Fast',
      description:
          'Plus Messenger delivers messages faster than any other application.'),
  Slide(
      imageUrl: 'assets/icon/intro3.png',
      title: 'Free',
      description:
          'Plus Messenger is free forever.No ads.\nNo subscription fees.'),
  Slide(
      imageUrl: 'assets/icon/intro4.png',
      title: 'Powerful',
      description:
          'Plus Messenger has no limits on the size of your media and chats'),
  Slide(
      imageUrl: 'assets/icon/intro6.png',
      title: 'Secure',
      description:
          'Plus Messenger keeps your messages safe from hacker attacks.'),
  Slide(
      imageUrl: 'assets/icon/intro7.png',
      title: 'Cloud-based',
      description:
          'Plus Messenger lets you access your messages from multiple devices.'),
];
