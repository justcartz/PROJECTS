
var users = document.getElementById("work")
var x = 0
var usersInterval = setInterval(function(){
     x +=1
     users.innerHTML = x
     
     if(x == "24"){
         clearInterval(usersInterval)
        }
    } ,300)
    


var quo = document.getElementById("positive")
var y = 0
var quoInterval = setInterval(function(){
     y += 50
     quo.innerHTML = y

if(y == "1000"){
    clearInterval(quoInterval)
}
} ,100)


var dev = document.getElementById("invest")
var z = 0
var devInterval = setInterval(function(){
     z += 8
     dev.innerHTML = z

if(z == "296"){
    clearInterval(devInterval)
}
} ,100)


var award = document.getElementById("award")
var a = 0
var awardInterval = setInterval(function(){
     a += 1
     award.innerHTML = a

if(a == "19"){
    clearInterval(awardInterval)
}
} ,100)