let slideindex = 1;
const slides = document.getElementsByClassName("slide")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
function showslides() {
    if (slideindex < 1) {
        slideindex = slides.length
    }
    else if (slideindex > slides.length) {
        slideindex = 1
    };
    for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

    slides[slideindex - 1].style.display = "block"
}

prev.addEventListener('click', function () {
    slideindex--;
    showslides()
})
next.addEventListener('click',function(){
    slideindex ++;
    showslides()
})

showslides()
 
