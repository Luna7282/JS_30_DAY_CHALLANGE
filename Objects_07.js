// Activity 1
const book ={
    author: "AK",
    title: "Baarish",
    year : "2014",
    auth :  function (){
    console.log(`The name off book is ${this.title} and is written by ${this.author}`)
  },
    YT: function(){
     console.log(`The book name ${this.title} is published in year ${this.year}`);
  }
}
console.log(book);

console.log(book.title);
console.log(book.author);

// Activity 2
book.auth()
book.year = 2001
console.log(book.year);

// Activity 3
const library = Object.create({
    name:"University",
    book:{
        title:['H.C Verma', 'S.chand']
    }
})

console.log(library.book.title);

// Activity 4
book.YT()
// console.log('tr tr');
// Activity 5 
for (const key in book) {
    if (book.hasOwnProperty.call(book,key)) {
        const value = book[key];
        console.log(key,value);
        
    }
}

console.log(Object.keys(book));
console.log(Object.values(book));


