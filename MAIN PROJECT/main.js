
function countdown() {
    const launchDate =new Date("1, june, 2023, 00:00:00").getTime();
    const now = new Date().getTime();
    const timeRemaining = launchDate - now;
    const month = Math.floor(timeRemaining / (1000*60*60*60*12))
    const days = Math.floor(timeRemaining / (1000*60*60*24))
    const hours = Math.floor(timeRemaining % (1000*60*60*24) / (1000*60*60))
    const minutes = Math.floor(timeRemaining % (1000*60*60) / (1000*60))
    const seconds = Math.floor(timeRemaining % (1000*60) / (1000))

    document.querySelector(".month").innerHTML =`${month}`
    document.querySelector(".days").innerHTML =`${days}`
    document.querySelector(".hours").innerHTML =`${hours}`
    document.querySelector(".minutes").innerHTML =`${minutes}`
    document.querySelector(".seconds").innerHTML =`${seconds}`
}

setInterval(countdown, 1000)