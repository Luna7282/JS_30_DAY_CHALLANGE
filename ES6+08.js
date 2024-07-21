// Activity 1
let person_name = 'Himanshu'
let age = 13
console.log(`hi my name ${person_name} and ${age} `);

 const tr =`string to be
multi-line`
console.log(tr);

// Activity 2
let a,b,zr;
[a,b]=[10,20];

[a,b,...zr] = [10,20,30,50]
console.log(zr);


let book ={
    title: 'BR',
    author : 'AK',
    created_AT: '27 june 2003'
}
const {title,author} = book
console.log(title,author);

// Activity 3
arr2 = [1,2,3,4]
let real = 2
let Pr = 'Bar'
let arr3 = [...arr2,real,Pr]
console.log(arr3);

function sum(x,y,z,r){
    return x+y+z+r
}
console.log(sum(...arr2));

// Activity 4
function product (num1,num2 = 1){
    return num1 * num2
}

console.log(product(2,4));

// Activity 5
var name= 'Ak'
var year=21
var coun_code='+91'

var roll = function (){
    console.log('he was here!!!');
}
var per = {name,year,coun_code,roll}
per.roll()


const propname = 'userId'
const value = 123

const jr = {
  [propname]:value
}
console.log(jr);