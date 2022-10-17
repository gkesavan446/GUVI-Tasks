var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload= function () {
    var res = JSON.parse(request.response);
  
//filter asia region
var res1 =res.filter((ele)=>ele.region=="Asia");
console.log(res1);

//population less than 2 Lakh
var res2 =res.filter((ele)=>ele.population<200000);
console.log(res2);

//name, capital, flag using forEach
res.forEach((flag)=> {console.log(flag["name"]);console.log(flag["capital"]);console.log(flag["flag"]);})

//total population using reduce
var res3 = res.reduce((a, b)=>a+b.population, 0);
console.log(res3);
 
//country using US dollars as currency
let answer = res.filter((dummy) => (dummy.currencies !== undefined))
console.log(answer.length)
let res4 = answer.filter((res) =>  {
for (let key in res.currencies) {
    if(res.currencies[key].name === "United States dollar"){
  return res
  }
}
})
console.log(res4.length, res4[0].currencies)
}

