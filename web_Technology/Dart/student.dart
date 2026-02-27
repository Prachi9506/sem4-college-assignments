class student{
  String? _name;
  int? age;
  student (this._name,this.age);
  set setname(String name){
    _name = name;
  }
  get getname{
    return _name;
  }
  display(){
    print("$_name");
    print("$age");
  }
}