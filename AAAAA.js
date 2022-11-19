
// // inheritance 

// class cust{
//     constructor(n)
//     {
//         this.name = n ;
//     }

//     buy()
//     {
//         console.log(this.name);
//     }
// }


// class cust2 extends cust{
//     hello()
//     {
//         console.log("hello.. ");
//     }
// }

// let c1 = new cust2("kiran")
// c1.buy()


// // spread operator 

// let list = [ 'asa' , 'bopp ' , 'hello ']
// let newlist = [ ...list , "apple "]

// console.log( newlist );

// //spread simply copies the data use ...objectName for spread 
// let n = {
//     name:"ash" , 
//     age:20 ,
//     id:30
// }

// let nn = {
//     ...n  ,
//     rollno: 33306
// }

// console.log( nn );





// // rest operator

// function hello( ...all )
// {
//     console.log( all );
// }

// hello( 1,2,3,4,5,6 )


// // array destructuring 

// let l = [ 'audi' , 'BMW' , 'FERRARI']

// let [cc1 , cc2 , cc3 ] = l 

// console.log( cc2 );


//  map 

let arr = [ 2 , 4, 6 , 8]

let arr2  = arr.map( x=>{
    return x*10 
})

console.log( arr2 );