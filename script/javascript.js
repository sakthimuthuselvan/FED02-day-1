// for(var i=0; i<=10; i++){
// console.log(i);
// }

// // while loop
// var a=10;
// b=13;
// c=a+=b;
// console.log(c);


// const first="mr.";


// let second="sakthi";
// let center=first+"sai"+second;
// console.log(th);
// alert(center )


// let a =10;
// {
//     let b =30;
//     // console .log(b);
// }
// console.log(a);



// let name1;
// {
//     name1 = "spark";
//      name2="sakthi";
// }
// console .log(name1+" "+name2);

// let num1=10;
// let num2=30;
// if(num1==num2){
//     console.log("these values are equal");
// }else if(num1>num2){
//     console .log("this value is grater than 30");

// }else{
//     console.log("30 grater than 10");
// 

//object 


/*
let person={
    nam:"sakthi",
    age:21,
    isname:true,
    address:"anna nagar ,tenkasi,",
    brother:{
        sibling1:"sakthi",
        sibling2:"thambu"
    }
}
console.log(person.brother.sibling1);
console.log(person);

// string

let car="nano";
let car1="toyata"
let power="sakthi";
let num=33;
console.log(power+num)
console.log(car+" "+car1);
 
// boolen

// let a=10;
// let b=10;
// let c=a==b;
// console.log(c)


// undefined
let a;
console.log(a)

//null

let color=null ;
console.log(color);

// boolean

let c=(20>10);
console.log(c);
*/

// loop concept
// while loop

//  var num=10;
// while(num<20){
//     console.log(num);
//     num++;
// }
 
// for loop

// for(i=5;i<=10;i++){
//     console.log(i);
// }

//nexted if 


/* 

let a=40;
let b =20;
let c =10;
if(a<b){
	if(a==c){
		console.log("a equal to c");
	}else{
		console.log("a unqual to c");
	}
	
}else{
	console.log("error");
}

*/

// loops concept
 
 //lets starts for loops
 /*for(a=10;a<=20;a++){
	if(a%5){
		console.log(a);	}
 }*/
 
 
 //functions
 
 /*
 function addition(a,b){
	 if((a !=="")&&(b !=="")){
		 console.log(a%b)
	 }else{
		 console.log("no result")
	 }
 }
 addition(3,20);
 *


let a;
let b;
{
	a=10;
	b=30;
	
	/*if(a!=10){
		console.log("a is not equal too 50");
	}else{
		console.log("a is equal too 50")
	}*/
	
	//let name="true";
	//let address="false";
	//let aadhar=name||address;
	//console.log(aadhar);
	

	//let usercolor="red";
	//let defalutcolor="yellow";
	//let currentcolor=usercolor||defalutcolor;
	//console.log("currentcolor :"+currentcolor);



				//function		 
		 
/*	let a= 10;
	let b=20;
	function name(){
		let result = a+b;
		console.log(result);	
	}
	name();
*/

/*function sak(s,a){
	if(s>a){
		return s-=a;
	}else{
		return s+=a;
	}
	
}
console.log(sak(10,20))
*/

/*
var total=0;
var avg;
var marks[1,2,3,4,5,6,7,8,9,10];
for(let i=0; i<marks.length; i++){
	total=total+marks[i];
}
avg = total/marks.length;
console.log(avg);
*/
/*
var fruit=["banana","mango","orange"];

//its add on end of the array statement

fruit.push("grapes");

//it adds on begin the array statement

fruit.unshift("gova")

//splice!
*/

/*
var shoping =["amazon","flipkart","myntra"];
for(i =0; i<shoping.length; i++){
	if(shoping[i]=="meesho"){
		console.log("you purchase here");
	}else{
		console.log("reload");
	}
}
*/

/*
let a=parseInt(prompt('give your age',"enter your age"));

if (a>=18){
	console.log('your are eligible')
	let b=prompt('give your gender');
	if(b=='male'){
		console.log('hi male')
	}else if (b=='female'){
		console.log('hi female');
	}else{
		console.log('you gender not available inearth')
	}
}else{
	console.log('your are not eligible')
}
*/

/*
let a=parseInt(prompt("enter number","first number"));
let b=parseInt(prompt("enter number","second number"))
if(a<b){
	console.log("b is greater than a",a);
}else{
	console.log("a greater than b",b);
}
*/


/*
let a =parseInt(prompt("passitive number","enter your num"));

if(a>=0){
	console.log("passitive")
	
}else {
	console.log("negative")
}
*/

/*let a=12;
if(a>10){
	console.log(a>10);
}*/

/*
for(i=1;i<20;i++){
	if(i%2){
		console.log(i)
	}
}

*//*
function name(hello){
	console.log(name)
}
hello("sakthi")
*/


/*function name(color){
	console.log("hello world"+" "+color);
}
name("red");
name("yellow")
*/

/*
function name(firstname,lastname){
	console.log(firstname+" "+lastname)
}
let fullname=name("sakthi","spark");
let fullName=name("logesh","kumar");
*/ 

  
/*function add(num1,num2){
    return num1*num2;
}

console.log(add(23,22))
*/

/*
		//if condition
		
let age =parseInt(prompt("your age","enter your age"));
if (age>=18){
let	gender =prompt("gender","enter your gender");
	if(gender=='male'){
		console.log('work in anywere')
	}else if(gender=='female'){
		console.log('not work in anywere')
	}else{
		console.log('your gender is not available');
	}
	
}else{
	console.log('yournot eligible in work');
}

*/


let a=parseInt(prompt("number","enter num1"))
let b=parseInt(prompt("number","enter num2"))
let c=parseInt(prompt("number","enter num3"))
if((a<b)&&(a<c)&&(b<c)){
	console.log(a,b,c);
}else if((a>b)&&(a>c)&&(b>c)){
	console.log(c,b,a)
}else if((a>b)&&(b<C)&&(a<c)){
	console.log(b,a,c)
}
	

