// Activity 1
let arr = []
for(i=0;i<=5;i++){
    arr.push(i)
}
console.log(arr);
// task2
console.log(arr[0]);
console.log(arr.length-1);

// Activity 2
let arr1 = [0,1,3,4,45,23]
arr1.push(24)
console.log(arr1);
arr1.pop()
console.log(arr1);
arr1.shift()
console.log(arr1);
arr1.unshift(21,31)
console.log(arr1);

// Activity 3
let prr = [0,1,2,34]
const map = prr.map((x)=> x*2)
console.log(map);



//////
const fil = arr.filter(even)

function even (arr){
  return arr%2===0
}
console.log(fil);
/////

const red = arr.reduce(function(x,y){
    return x+y
},0)
console.log(red);

// Activity 4
for(i=0;i<arr1.length-1;i++){
    console.log(i);
}

arr.forEach(element => {
    console.log(element);
});
const mda = [["Ak",20000],["GK",30000]]
console.log(mda[1][0]);





