//3.) Write a “person” class to hold all the details.

class Person{
	constructor(name,age,gender){
	  this.name=name;
	  this.age=age;
	  this.gender=gender;
	}
	getage(){
	  return this.age;
	}
	}
	var identity=new Person("Kesavan","23","Male");
	console.log(identity.getage());

//4.) write a class to calculate the uber price

class uber{
	constructor(price,km){
	  this.price=price;
	  this.km=km;
	}
	uber(){
	return this.price*this.km;
	}
  }
  var result=new uber(10,8);
  console.log(result.uber());