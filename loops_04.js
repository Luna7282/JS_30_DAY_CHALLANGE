//  Activity 1
for(i =0 ; i<11 ; i++){
    console.log(i);
}
for(i = 0 ; i<11 ; i++){
    console.log(5*i);
}

//  Activity 2
let val = 0
let j = 1
while(j<=10){
    val = val + j
    j++
}
console.log(val);

let tr = 10
while(tr>=1){
    console.log(tr);
    tr--
}

// Activity 3
let p = 0
do {
    console.log(p);
    p++
} while (p<6);

function factorial(n){
 let mul = 1
 let res = 1
 do {
  mul *= res
  res ++
    
 } while (res<=n);
 return mul
}
console.log(factorial(5));

// Activity 4

for(i=0;i<=4;i++){
   let row = '*'
    for(j=0;j<i;j++){
      row +='*'
    }
    console.log(row);
}

// Activity 5
for(i = 0; i<11;i++){
    if(i===5){
        continue;
    }
    console.log(i);
}

for(i = 0; i<11;i++){
    if(i===7){
        break;
    }
    console.log(i);
}



