function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = function(){
  return `${this.title} was written by ${this.author}
  in${this.year}`;
};

// magazine Constructor
function Magazine(title, author, year, month){
  Book.call(this, title, author, year);
  this.month = month;
}

Magazine.prototype.sayHi = function(){
  console.log("hi");
};

function Column(title, author, year, month, subject, lines){
  Magazine.call(this, title, author, year, month);
  this.subject = subject;
  this.lines = lines;
}


Magazine.prototype = Object.create(Book.prototype); 
Magazine.prototype.constructor = Magazine;
const mg1 = new Magazine('Mag one', 'john doe', '2018', 'Jan');
console.log(mg1.getSummary()); 
//console.log(mg1.sayHi()); // error 


const col1 = new Column('col one', 'Awwad', '2018', 'Sep', 'inheritance', '285');
console.log(col1);

console.log(col1.sayHi()); // error
console.log(col1.getSummary()); // error


