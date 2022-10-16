var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload= function () {
    var res = JSON.parse(request.response);
    var zen = res.map((ele)=>`${ele.name} , ${ele.region}, ${ele.subregion}, ${ele.population}`);
    console.log(zen);
}