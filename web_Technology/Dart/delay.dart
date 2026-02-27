void main(){
  fetchData();
}


void fetchData()async{
  print("Data is Loading....");
  getData().then((data){
    print(data);
  });
  print("data Loaded Success");
}

Future<String> getData()async{
  await Future.delayed(Duration(seconds: 5));
  return "data is Loaded";
}