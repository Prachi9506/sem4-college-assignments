class Accounts {
  int? _balance = 0;
  set setBalance(int x){
    if(x<0){
      print("Invalid");
      _balance = 0;
    }
    _balance = x;
  }
  get getBalance{
    return _balance;
  }
}