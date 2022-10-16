
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all')
request.send();
request.onload=function(){
    var data=JSON.parse(request.response)
    for(var obj of data)
    {
        console.log(obj.flags)
    }
}