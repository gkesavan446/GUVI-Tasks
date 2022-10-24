
//Sai Code

// var label=createlabels("label","for","email","EmailId");
// var br1=createlinebreak("br");
// var input=createinput("input","type","email","id","email");
// var br2=createlinebreak("br");

// var password=createlabels("label","for","pass","Password");
// var br3=createlinebreak("br");
// var passinput=createinput("input","type","password","id","pass");
// var br4=createlinebreak("br");


// document.body.append(label,br1,input,br2,password,br3,passinput,br4);


// function createlabels(tagname,attrname,attrvalue,content){
// var ele=document.createElement(tagname);
// ele.setAttribute(attrname,attrvalue);
// ele.innerHTML=content;
// return ele;
// }
// //it is returning an HTML element
// //<label for="email">Mail</label>

// function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attrname,attrvalue);
//     ele.setAttribute(attrname1,attrvalue1);
//     return ele;
// }
// function createlinebreak(tagname){
// var ele=document.createElement(tagname);
// return ele;
// }

//K7 Code

var tabel = Createtable("table", "class", "table", createtablehead(), createtablebody());
var thead = createtablehead("thead", "class", "thead-dark", createtablerow());
var tr =  createtablerow("tr", Createtablecol());
var tbody = createtablerow("tr", createtabledata());
document.body.append(table, thead, tr, tbody, tbody);

function Createtable(tagname, attributename, attrivalue,content,content1){
   var ele = document.createElement(tagname);
   ele.setAttribute(attributename, attrivalue);
   ele.innerHTML=content;
   ele.innerHTML=content1;
   return ele;
}

function createtablehead(tagname, attributename, attrivalue,content){
   var ele1=document.createElement(tagname)
   ele1.setAttribute(attributename, attrivalue);
   ele1.innerHTML=content;
   return ele1;
}

function createtablerow(tagname, content){
var ele2=document.createElement(tagname);
ele2.innerHTML=content;
return ele2;
}

function Createtablecol(tagname, attributename, attrivalue,content){
   var ele3 = document.createElement(tagname);
   ele3.setAttribute(attributename, attrivalue);
   ele3.innerHTML=content;
   return ele3;
}

function createtablebody(tagname, content){
   var ele4=document.createElement(tagname)
   ele4.innerHTML=content;
   return ele4;
}

function createtabledata(tagname, content){
   var ele5=document.createElement(tagname)
   ele5.innerHTML=content;
   return ele5;
}




//Assignemt 01: Create a HTML Form
//1.firstname,2.Middlename,3.lastname,4.email,5.password
//Deploy it in Netlify

//for my reference
// Initially coded in HTML

// <form>
// <label for="fname">FirstName</label><br>
// <input type="text" name=" " id="fname"><br>
// <label for="mname">MidName</label><br>
// <input type="text" name=" " id="mname"><br>
// <label for="lname">LastName</label><br>
// <input type="text" name=" " id="lname"><br>

// <label for="email">Email</label><br>
// <input type="email" name=" " id="email"><br>

// <label for="pass">Password</label><br>
// <input type="password" name="p" id="pass"><br>
// <input type="submit" value="submit" onclick="foo()">
// </form>

//This table is in HTML, create the sasme table With Below Mentioned Information
//Using DOM 
//Deploy the same using netlify
//Remainder:don't use innerHTML propery 1st Meth
// {/* <table class="table">
// <thead class="thead-dark">
//   <tr>
//     <th scope="col">First</th>
//     <th scope="col">Middle</th>
//     <th scope="col">Last</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>@mdo</td>
//   </tr>
// </tbody>
// </table> */}

body{
   display: flex;    
   /* text-align: center; */
   font-size: 100px;
   margin-top: 200px;
   margin-left: 300px;
}