// MAP Method

var arr = [12, 13, 14, 15];
var res1 = arr.map((ele)=>ele*2);
console.log(res1);

//task: using map

//1.for an array var arr=["apple","mangoe",orange"]; ,add "s" at the end of each fruit so that the output is
//["apples","mangoes","oranges"]; using map method

var arr1=["apple","mangoe", "orange"];
var kes = arr1.map((ele)=>ele+"s");
console.log(kes);

// Filter
// filter works based on condition

var arr4 = [12, 13, 14, 15];
var res4 = arr.filter((ele)=>ele%2===0);
console.log(res4);


// var request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v2/all");
// request.send();
// request.onload= function () {
//     var res = JSON.parse(request.response);
//     console.log(res);
//     var popu =res.filter((ele)=>ele.population<300000);
//     console.log(popu);
//     // for(var i=0; i<popu.length; i++){
//     //     console.log(popu[i].name);  // we can use for loop method or map method to print the name of countries
//     //  }
//     // var dog = popu.map((ele)=>ele.name);
//     // console.log(dog);                         // concat method to print name and region
//     var dog = popu.map((ele)=>`${ele.name} , ${ele.region}`);
//     console.log(dog); 

// }

// task 2
//2.print the names of those countires which belongs to Europe region

// var request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v2/all");
// request.send();
// request.onload= function () {
//     var res = JSON.parse(request.response);
//     console.log(res);
//     var popu =res.filter((ele)=>ele.region=="Europe");
//     var kopu = popu.map((ele)=>ele.name);
//     console.log(kopu);
    
// }

//above same question, here both filter and map method on single line

// var request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v2/all");
// request.send();
// request.onload= function () {
//     var res = JSON.parse(request.response);
//     console.log(res);
//     var popu =res.filter((ele)=>ele.region=="Europe").map((ele)=>ele.name);
//     console.log(popu);
// }


//Reduce

var tiger = [12, 13, 14, 15];
var red = tiger.reduce((acc,cv)=>acc+cv);
console.log(red);

var tiger1 = [12, 13, 14, 15];
var red1 = tiger1.reduce((a, b)=>a+b, 100);
console.log(red1);

var tiger2 = ['e', 's', 'a', 'v', 'a', 'n'];
var red2 = tiger2.reduce((a, b)=>a+b, 'k');
console.log(red2);


//task 3
//sum of total population of all the countries using reduce function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload= function () {
    var res = JSON.parse(request.response);
    console.log(res);
    var popu = res.reduce((a, b)=>a+b.population, 0);
    console.log(popu);
}


//ForEach
//applicable only for arrays
//it return undefined value in the end

var rrr = [12, 13, 14, 15];
rrr.forEach((ele)=>console.log(ele));

//Destrucing
// Destrucing array

let arr89 = ["vishnu", "priya"];
let [fname, lname] = arr89;
console.log(fname);
console.log(lname);

// Destrucing object

let arr96 = {name:"kesavan", age:"23"};
let{name:f, age:l}=arr96;
console.log(f);
console.log(l);