//  Activity 1
// let ele = prompt("enter the value")
function No_check(ele){
     if(ele <= 0){
        console.log("It is a negative no.");
     }
     else if(ele ==0 ){
        console.log("No. is zero 0");
     }
     else{
        console.log("it is an positive no.");
     }
}

// let ele = prompt("enter the value")
No_check(-21)

    
 const voting_elig = (age)=>{
   if(age >= 18){
      console.log("Eligible to vote");
   }
   else{
      console.log("Not eligible");
   }
 }
 voting_elig(21)

// Acttivity 2
const largest = (a,b,c)=>{
   if(a > b){
      if(a>c){
         console.log("A is the largest element");
         return
      }
   }
   if(b>c){
    if(b>a){
      console.log("B is the largest");
      return
    }
   }
   if(c>a){
      if(c>b){
         console.log("C is the largest");
      }
   }}
largest(2,3,4)

// Activity 3

const Day_of_week = (day)=>{
    switch (day) {
      case 1:
         console.log("Monday");
         break;
      case 2:
         console.log("Tuesday");
         break;
      case 3:
         console.log("wednesday");
         break;
      case 4:
         console.log("Thursday");
         break;
      case 5:
         console.log("Friday");
         break;
      case 6:
         console.log("Saturday");
         break;
      case 7:
         console.log("Sunday");
         break;
      
    
      default:
         console.log("Invalid day");
         break;
    }
}
Day_of_week(4)

const Marks = (marks)=>{
   switch (true) {
      case marks >= 90 :
         console.log("A");
         break;
      case marks >= 75 :
         console.log("B");
         break;
      case marks >= 60 :
         console.log("C");
         break;
      case marks >= 40 :
         console.log("D");
         break;
      case marks <= 40 :
         console.log("F");
         break;

   
      default:
         console.log("Enter a valid marks");
         break;
   }
}
Marks(32)

//  Activity 4 
const even_odd = (num)=>{
   num = (num%2 ===0 ) ? "even No." : "Odd No."
   console.log(num);
}
even_odd(5)

// Activity 5
const leap_year = (year)=>{
  if(year % 400 === 0 || year % 100 === 0 &&year % 4 === 0){
   return"leap year"
  }
  else{
   console.log(" not a leap year");
  }
}
leap_year(2024)