import 'package:flutter/material.dart';
import 'package:thacker/functions/slide.dart';

class Sliders extends StatelessWidget {
  final int index;
  Sliders(this.index);
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Center(
          child: Image.asset(
            slideList[index].imageUrl,
            width: 150.0,
          ),
        ),
        SizedBox(
          height: 25.0,
        ),
        Text(
          slideList[index].title,
          textAlign: TextAlign.center,
          style: TextStyle(fontWeight: FontWeight.w400, fontSize: 27.0),
        ),
        SizedBox(height: 20.0),
        Text(
          slideList[index].description,
          textAlign: TextAlign.center,
          style: TextStyle(color: Colors.grey, fontWeight: FontWeight.w500),
        ),
      ],
    );
  }
}
