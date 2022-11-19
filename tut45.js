console.log("tutorial no. 45 of web devlopment ");

function greet( n)
{
    console.log("the name is : "+n);
}

let m = "ashutosh";
greet(m)


function sum(a,b,c)
{
    let d = a+b+c;
    return d
}

let a = 100
let b = 200
let c = 300

let res = sum(a,b,c)
console.log(res)
 


//  constructor function 

function fun( name , age , rollno , lang )
{
    this.name = name ;
    this.age = age ;
    this.rollno = rollno;
    this.lang = lang;
}
 
var emp1 = new fun( "ashutosh" , 20 , 33306 , [ 'marathi','hindi'])
console.log( emp1 )