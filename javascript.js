// // console.log("This is coming from the external Js file");

// // //declaring a string datatype
// // let a_string = "this is an a string";
// // let b_string = "this is a b string";
// // console.log(a_string,b_string);


// // //A number datatype
// // let hour = 2
// // let time=10
// // console.log(hour,time);

// // //A boolean datatype
// // let is_friday = true;
// // let is_thursday=false
// // console.log(is_friday,is_thursday);

// // //An array datatype
// // let days_of_the_week=["monday","tuesday",'wednesday'];
// // let types_of_phones=["tecno","iphone"];
// // console.log(days_of_the_week,types_of_phones);

// // //the object datatype
// // let month_and_their_days={
// //     january:21,
// //     february:[28,29],
// //     march:31,
// //     april:30,
// // };
// // console.log(month_and_their_days);

// // let x=5;
// // let y=10;
// // var a=8;
// // const pi=22/7;


// // x=10;
// // y=12;
// // x=x*y;
// // console.log(x);

// // if (a) {
// //     const pi =7;
// //     console.log(a,pi)
// // }


// // while(a<10){
// //     const pi=90;

// //     console.log(a,pi)
// //     a=a+1;

// //     if (x>15){
// //         const pi=190;
// //         console.log("x is greater than 15",pi)
// //     }
// // }





// // // let num1=6;
// // //   num2=2;

// // //   let first_half="imma"
// // //       second_half="nuel"



// let num1=5 , num2=6;


    //   //Arithmetic Operators
    //   console.log("num1 + num2:  ", num1 + num2);
    //   console.log("num1 - num2:  ", num1 - num2);
    //   console.log("num1 * num2:  ", num1 * num2);
    //   console.log("num1 / num2:  ", num1 / num2);
    //   console.log("num1 ** num2:  ", num1 ** num2);
    //   console.log("num1 % num2:  ", num1 % num2);

    //   //Comparison Operators
    //   console.log("num1 < num2: ", num1 < num2);
    //   console.log("num1 > num2: ", num1 > num2);
    //   console.log("num1 <= num2: ", num1 <= num2);
    //   console.log("num1 >= num2: ", num1 >= num2);
    //   console.log("num1 == num2: ", num1 == num2);
    //   console.log("num1 === num2: ", num1 === num2);
    //   console.log("num1 != num2: ", num1 != num2);
    //   console.log("num1 !== num2: ", num1 !== num2);


// // //       //Bitwise Operators


//let num1 = 7, num2 = 29;

// // if (num1 === 7){
// //   console.log("num1 is 7")
// // } 

// // else if(num1 === 7){
// //   console.log("num1 is 7")
// // }
// // else {
// //   console.log("num1 is not 7 or 8 , it is something else")
// // }


// // if(num1 !== num2){
// //   console.log("num1 is not equal t0 num 2")
// // }
// // else if(num1 <= num2){
// //   console.log("num1 is less than or equal to num 2")
// // }
// // else{
// //   console.log("num1 is not 7 or 8,it is something else")
// // }


// // if (num1<num2){
// //   console.log("num1 is less than num2")
// // }
// // else if (num1>num2){
// //   console.log("num1 is greater than num2")
// // }
// // else{
// //   console.log("num1 is not 7 or 8,it is something else")
// // }


//loop
//we have two types of loop:for loop,while Loop




//for Loop
// for (let i=5; i>0; i--){
//     console.log(i)
// }


//For Array
// items= new Array('item1','item2','item3','item4')
// for(let i=0; i<items.length; i++){
//     console.log(items[i])

// }

// var count = 0;
// console.log("Starting Loop ");
// while (count < 10){
//  console.log("Current Count : " + count + "<br />");
//  count++;
// }
// console.log("Loop stopped!");


// var count = 0;
// console.log("Starting Loop" + "<br />");
// do{
//  console.log("Current Count : " + count + "<br />");
//  count++;
// }while (count < 5);
// console.log ("Loop stopped!");

// //while Loop
// let x=100;
// while(x>35){
//     console.log(x) 
//     x--;}
    
// let y=0;
// while(y<11){
//     console.log(y)
//     y++;
// }  


// let z=20;
// while(z<41){
//     console.log(z)
//     z++;
// }


// let u=0;
// list = new Array("list1","list2","list3","list4")
// while(u <list.length ){
//     console.log(list[u])
//     u++;
    
// }









// //tenary Operators
//  num1 === 7 ?  
  
//  console.log:("num1 is not 7 or 8,it is something else");
 
 
 


// //Switch Operators
// switch(num1) {
//   case 7:
//     console.log(num1 + 5);
//     break;
//   case 8:
//     console.log(num1 * 2);
//     break;
//   case 9:
//     console.log(num1 / 3);
//     break;
//   default:
//     console.log("answer not here");
    
// }




// let year=2024]]



// switch(year){
//   case 2020:
//     console.log("2020 is leap year")
//     break;
//   case 2021:
//     console.log("2021 is not leap year")
//     break;

//   case 2022:
//     console.log(" 2022 is not leap year")
//     break;

//   case 2023:
//     console.log("2023 is not leap year")
//     break;

//   case 2024:
//     console.log("2024 is leap year")
//     break;
 
//     default:
//       console.log("year not in range")
// }




// //Function
// // there are two types of function in javascript
// // :Function keyword and Arrow function


// function print_twice(value){
//     console.log(value.toUpperCase());
//     console.log(value.toUpperCase());
// }
// print_twice("Hello");
// print_twice('world');


// const print_lower_case =  (string) => {                               
//     console.log(string.toLowerCase());
// };

// print_lower_case("HELLO");
// print_lower_case("WORLD");

// let users_store = new Array(
//     { _id: 1, name:"lola",age:5},
//     { _id: 1, name:"Grey",age:19},
// );

// const  add_user = (user)=>{
 //     user.id = users_store. length + 1;
 //     users_store.push(user);
 // };

// const read_user =(users,name, search_param)=>{
//     for (let i =  ; i<users.length; i++)  {
//         let user = users[1];

//         if(user[search_param] ===name)  return user;
//     }
// };

//  add_user({name:"promise", age:37});
// let user_found= read_user(users_store, 19,"age");
// console.log(user_found)


/*
var d= new Date()
var time=d.getHours()


if (time<10) {
console.log("Good Morning");
}

else{
    console.log("Good Day")
}

var d=new Date();
theday=d.getHours();
switch(theday){
    case 5: console.log("Finally Friday")
     break;
    case 6: console.log("saturday ")
     break;
    case 27:console.log("serptember 27")
     break; 
    case 3:console.log('This is 3oclock') 
    break;
    default:console.log("todays date isnt available") 

}
*/
































// //Page redirection

// console.log(location.href);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.protocol);
// console.log(location.port);



// //Page Refresh

// // document
// // .getElementById("click_me")
// // .addEventListener("click",(e)=> location.reload());

// //Page Redirection
// document
// // .getElementById("go_to_google")
// // .addEventListener("click",(e)=> location.assign("htps://fb.com"));



// //Pop up
// // document
// // .getElementById("go_to_google")
// // .addEventListener("click",(e)=> window.open("https://127.0.0.1.3000"));




// // let should_reload =prompt("hello, world! should i reload");
// // console.log(should_reload)


// // let agree_to_something = confirm ("this is my new page")
// // console.log(agree_to_something);

// // let my_alert_box=+("alert box")
// // console.log(my_alert_box)

// // document.getElementById("print")




// //Javascripts onjects
// let person = {
//     name:"lola grey",
//     age:16,
//     gender:'f',
//     nationality:"south african",
//     married:true,
//     languages:["english","french"],

//     say_hi: function (){
//         console.log(this.name + "says hi")
//     },
//     school:{
//         name:"giit",
//         course:"software dev",
//     }

// };



// person.married=false
// person["gender"]=("trans")


// let student ={gender:"m", ...person,score:"90%",position:"35th"

// }
// console.log(student)

// console.log(person);

// console.log(person["age"]);
// console.log(person.age);


// console.log(Object.keys(person));
// console.log(Object.values(person));


// console.log(Object(person).hasOwnProperty("name"));
// console.log(Object(person).hasOwnProperty("name"));
// console.log(Object(person).hasOwnProperty("birthday"));



// console.log(person.school.name);

// //Javascripts numbers
// let num1=29,
//     price=19.89;

//     console.log(num1,price)
//     console.log(num1.toFixed(4))
//     console.log(price.toFixed(4))

//     console.log(num1.toExponential(7))
//     console.log(price.toExponential(7))
    


    let num=16,
        cost=796.99;
    console.log(Math.sqrt(num))
    console.log(Math.floor(cost))
    console.log(Math.ceil(cost))
    console.log(Math.exp(100))
    console.log(Math.pow(2,3))
    console.log(Math.trunc(2,3))
    console.log(Math.log2(8,2))
    console.log(Math.abs(-89))
    console.log(Math.tan(45))

     console.log(Math.floor(Math.random() *10))


    let numbers= [90,829,1,2,3,4,5,6,7]
    console.log(Math.min(...numbers))
    console.log(Math.max(...numbers))


    console.log(numbers)





// var aProperty;
// console.log("Navigator Object Properties<br /> ");
// for (aProperty in navigator)
// {
//  console.log(aProperty);
 
// }
// console.log ("Exiting from the loop!");

// var x = 1;
// console.log("Entering the loop<br /> ");
// while (x < 20)
// {
//  if (x == 5){
//  break; // breaks out of loop completely
//  }
//  x = x + 1;
//  console.log( x + "<br />");
// }
// console.log("Exiting the loop!<br /> ");


var profile = {
    name: "justin",
    age:15,
    Gender:"male",
    occupation:'student',
}
console.log(profile.occupation)


var guys = ["guys1", "guys2", "guys3"]
var ladies = ['atinuke','mariah','shola','rebecca','vivian','emmanuella']

console.log(guys.concat(ladies))
//array methods

// console.log(guys.shift())
// // splice and slice


console.log(guys.splice("governor"))


var text =" justin loves"
ladies.map(function(l){
    const y = "justin loves" + l
    return ladies
})