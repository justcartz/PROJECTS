// let count = 0;
// const counter = document.getElementById('count');

// function increment() {
// 	count++;
// 	counter.innerHTML = count;
// }

// function decrement() {
// 	count--;
// 	counter.innerHTML = count;
// }


let count = 0;
const counter = document.getElementById('count')
const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')

increment.addEventListener('click',function(){
    count++;
    counter.innerHTML=count;
}
)
decrement.addEventListener('click',function(){
    count--;
    counter.innerHTML=count;
}
)

