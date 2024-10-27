console.log("This is javascript");

function fmname(para1,para2){
    console.log(para1,para2);
    console.log(para1+parseInt(para2));

}

fmname(1,2);
fmname(4,"6");
fmname(4,"jgk");

let para1=4;
function fmname1(para1=1,para2=2){
    console.log(para1,para2);
    console.log(para1+parseInt(para2));

}

fmname1();
fmname1(10,20);

{
    let a=30;
    console.log(a);
    var b=40;
    const c=50;
    console.log(c);
}

// console.log(a);
console.log(b);
// console.log(c);

var username="gmit";
var password="gmit123";

function fnvalidate(){
    let inputusername=document.getElementById("username").value;
    let passwordname=document.getElementById("password").value;
    console.log(inputusername);
    console.log(passwordname);

    if(inputusername===username && passwordname===password){
        prompt("loginsuccessful");
        
    }
}

function fnvalidatesignup(){
    let inputfirstname=document.getElementById("firstname").value;
    let inputlastname=document.getElementById("lastname").value;
    let emailname=document.getElementById("email").value;
    let phonenoname=document.getElementById("phoneno").value;
    let passwordname=document.getElementById("password").value;
    console.log(inputfirstname,inputlastname,emailname,phonenoname,passwordname);
     
    let validateform=validatefun(inputfirstname);
}

function validatefun(inputname,inputname1){

    if(inputname.length>5 && inputname.length>5){
     console.log("Success");
    }
    else{
        console.log("failure");  
    }
}