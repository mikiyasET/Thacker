class request {
  final int userId;
  final int id;
  final String title;

  request({this.userId, this.id, this.title});

  factory request.fromJson(Map<String, dynamic> json) {
    return request(
      userId: json['userId'],
      id: json['id'],
      title: json['title'],
    );
  }
}
