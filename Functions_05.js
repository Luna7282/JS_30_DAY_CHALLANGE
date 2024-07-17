// Activity 1
function Even_ODD (num){
    if(num % 2 === 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
Even_ODD(7)

function squareof(num){
    console.log(num*num);
}

squareof(9)

// Activity 2
function maxoftwo(num1,num2){
   if(num1>num2){
    console.log(num1);
   }
   console.log(num2);
}
maxoftwo(2,9)

function conc(str1,str2){
    console.log(str1 +' '+ str2);
}
conc('Ankit','Singh')


//  Activity 3
const sumoftwo = (ele,num)=>{
 console.log(ele + num);
}
sumoftwo(2,7)



const strcheck = (str,val)=>{
   let check = [...str]
if (check.includes(val)){
    return true
}
return false
}
console.log(strcheck("Ankit","A"))


// Activity 4
const fun = (a,b=8)=>{
  console.log(a*b);
}
fun(2)
const ag = (name , age =14)=>{
  console.log(`hello Mr/Mrs ${name}  welcome , your age ${age}`);
}
ag("Ankit")

// Activity 5
function tr (num,glass){
    for(i = 0;i<num;i++){
        console.log(`higher order name :${glass}`);
    }
}

function hof (glass,num,tr ){
   for(i=0;i<=num;i++){
     tr(num,glass)
   }
}
hof("broken",23,tr)


function sum(a,b){
let result = a+b
square(result)
console.log("sum",result);
} 
function square(res){
    console.log(res*res);
}
function hof1(a,b){
    sum(a,b)
}
hof1(2,3)


