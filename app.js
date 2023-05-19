let msg = "you are so beautiful"
console.log(msg.toUpperCase())
msg = msg.toUpperCase()
msg = msg.toLowerCase()
console.log(msg)

let myTheory = "           they are really stealing from us       "
console.log(myTheory.trim().toUpperCase())

let nickName = "killerboycartz"
console.log(nickName.indexOf("men"))
console.log(nickName.slice(3, 6))
console.log(nickName.replace("killerboycartz", "weirdSanity"))


let artist = "Kendrick Lamar"
let musician = "Baby Keem"
let nameOfSong = "Savior"
var fullSong = `${nameOfSong} = ${artist} features ${musician}`
console.log(fullSong)

let noOfYears = 5
let carryovers = 7
var totalYearsSpent = `${noOfYears + carryovers}`
console.log(totalYearsSpent)

let minAge = 18
let myAge = 16


var account = `you must be ${minAge} or older to register. comeback in ${minAge - myAge} years time`
console.log(account)


var nameof = ["justin", "valentine", "kaira", "Amanda", "Chimobi", "Somkene"];
console.log(Math.floor(Math.random() * nameof.length))

var cutOffMark = 270
var mymark = 315

if (mymark < cutOffMark) {
   console.log("TRY AGAIN NEXT YEAR")
}
else if (mymark === cutOffMark) {
   console.log("ADMITTED")
}
else {
   console.log("ADMITTED")
}
if (mymark >= cutOffMark && myAge >= minAge) {
   console.log(`you have been offered admision with your ${mymark}`.toUpperCase())
}
else if (mymark >= cutOffMark && `${myAge += 1}` >= minAge) {
   console.log("Congrats ! , YoU HAVE BEEN OFFERED ADMISSION".toUpperCase())
}
else {
   console.log(`You did not reach the requirements of ${cutOffMark} cutoff mark or your age is less than ${minAge}`.toUpperCase())
}

let password = "KILLE     RBOYCARTZ";

if (password.length >= 8) {
   if (password.indexOf(" ") === -1) {
      console.log("VALID PASSWORD")
   }
   else {
      console.log("INVALID PASSWORD")
   }
}

if (password.length >= 8 && password.indexOf(" ") === -1) {

   console.log("VALID PASSWORD")
}
else {
   console.log("INVALID PASSWORD")
}


let d = new Date()
var today = d.getDay()
console.log(today)

switch (today) {

   case 1:
      console.log("monday".toLocaleUpperCase());
      break;

   case 2:
      console.log("tuesday".toUpperCase());
      break;

   case 3:
      console.log("wednesday".toUpperCase());
      break;

   case 4:
      console.log("thursday".toUpperCase());
      break;

   case 5:
      console.log("friday".toUpperCase());
      break;

   case 6:
      console.log("SATURDAY".toUpperCase());
      break;

   case 7:
      console.log("sunday")

   default:
      console.log("date isnt here".toUpperCase())

}


// Array

let shoppingList = ["Milk", "Rice", "Beans", "Tomato paste", "Groundnut Oil", "Red oil", "Spaghetti"]
let course = ["Fresnch", 'Chemistry']

console.log(shoppingList[2])

shoppingList[shoppingList.length] = "Sardine"
shoppingList.push()
shoppingList.unshift("butter")
shoppingList.shift()
console.log(shoppingList)

console.log(shoppingList.concat(course))


shoppingList.includes("indomie")
console.log(shoppingList)
shoppingList.indexOf("2")
console.log(shoppingList)


shoppingList.slice(4)
console.log(shoppingList)


const personalInfo = {
   firstname: "Justin",
   lastname: "Okpara",
   age: 18,
   offeredCourses: 9,
   department: "Mechanical Engineering",
   regNumber: 20211266983,
}

personalInfo.cgpa = 4.12



// for(let i=0; i<=10;i+=2){
//    console.log(i)
// }

// for(let num=1; num<=20;num++){
//    console.log(`${num}x${num}=${num*num}`)
// }

// for(let j=100; j>0; j-=5){
//    console.log(j)
// }


const courseMembers = [
   {
      firstname: "Justin",
      lastname: "Okpara"
   },
   {
      firstname: "Kizito",
      lastname: "Okolo"
   },
   {
      firstname: "keenan",
      lastname: "Omaka"
   }
]



// for(let i=0; i<courseMembers.length; i++){
//    let members = courseMembers[i]
//    console.log(`${members.firstname} lastname is  ${members.lastname}`)
// }


// const word = "mathematics"
// for(let i=word.length -1; i>=0; i-- ){
//    console.log(word[i])
// // }


const gameboard = [
   [23, 24, 45, 83],
   [23, 45, 34, 89],
   [31, 89, 65, 98],
   [1, 2, 3, 4]
]
let total = 0;

for (let i = 0; i < gameboard.length; i++) {
   let row = gameboard[i]
   // console.log(row)
   for (let j = 0; j < row.length; j++) {
      // console.log(row[j])
      total += row[j]
      console.log(total)
   }

}

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
   console.log(`target: ${target} guess: ${guess}`);
   guess = Math.floor(Math.random() * 10)
}
console.log(`target: ${target} guess: ${guess}`);

let products = ["tecno", "infinix", "samsung", "iphone"]

for (let pro of products) {
   console.log(pro.toUpperCase())
}

let leagueboard = {
   chelsea: 100,
   mancity: 89,
   Liverpool: 87,
   arsenal: 80,
   "man united": 73,
   tottenham: 70
}
let all = 0
for (let league of Object.keys(leagueboard)) {
   console.log(league, leagueboard[league])
}

let scores = Object.values(leagueboard)
for (let sco of scores) {
   all += scores
}

let avg = total / scores.length
console.log(avg)


for (let board in leagueboard) {
   console.log(board)
}

function time() {
   let current = new Date()
   let reply = current.getTime()
}



function rollDie() {
   var roll = Math.floor(Math.random() * 6) + 1
   console.log(`Rolled:${roll}`)
}

function throwdice() {
   rollDie()
   rollDie()
   rollDie()
   rollDie()
   rollDie()
}

function greet(nicky) {
   return `Hi,${nicky}`
}

// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false



function isValidPassword(password, username) {
   if (
      password < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1

   ) {
      return false;
   }
   return true;
}


// //using for each
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// // Using anonymous function expression:
// numbers.forEach(function (num) {
//   console.log(num * 2);
// })

// function printTriple(n) {
//   console.log(n * 3);
// }

// // Using a pre-defined function:
// numbers.forEach(printTriple);

// // Using the index:
// numbers.forEach(function (num, idx) {
//   console.log(idx, num);
// });



// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36
//   }
// ]

// // Printing all book titles using forEach:
// books.forEach(function (book) {
//   console.log(book.title.toUpperCase())
// })

// // Printing all book titles using for...of:
// for (let book of books) {
//   console.log(book.title.toUpperCase())
// }

// // Printing all book titles using for loop:
// for (let i = 0; i < books.length; i++) {
//   console.log(books[i].title.toUpperCase())
// }


//using map
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

//Map creates a new array by calling your callback function with each element in the original array.
const doubles = numbers.map(function (num) {
  return num * 2; //Need to return the value!
});
//[40, 42, 44, 46, 48, 50, 52, 54]

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0
  }
})

const abbrevs = words.map(function (word) {
  return word.toUpperCase().split('').join('.');
})
//["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]


const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]

const titles = books.map(function (b) {
  return b.title;
})
//["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"]

const goodBook = books.find(
   (b)=>{ return b.rating >= 4.3;
   }
)











