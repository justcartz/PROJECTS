var backdrop = document.querySelector(".backdrop")
var modal = document.querySelector(".modal")
var selectbutton = document.querySelectorAll(".button")
var modalNoButton = document.querySelector(".modal__action--negative")
var togglebutton = document.querySelector(".toggle-button")
var mobileNav = document.querySelector(".mobile-nav")
var ctabutton = document.querySelector(".main-nav__item--cta")

// for(let i=0; i<selectbutton.length; i++){
//     selectbutton[i].addEventListener("click", function(){
//         modal.style.display ="block";
//         backdrop.style.display ="block";
//     })

   
// };



// backdrop.addEventListener("click", function(){
//     mobileNav.style.display = "none";
//     closeModal()
// })


//     modalNoButton.addEventListener("click", closeModal)



//     function closeModal(){
       
//         backdrop.style.display ="none";

        
//             modal.style.display ="none";
//         }
    
    
    




// togglebutton.addEventListener("click", function() {
//     mobileNav.style.display = "block";
//     backdrop.style.display = "block";
// })



 

for(let i=0; i<selectbutton.length; i++){
    selectbutton[i].addEventListener("click", function(){
        // modal.style.display ="block";
        // backdrop.style.display ="block";
        modal.classList.add("open")
        backdrop.classList.add("open")
    })

   
};



backdrop.addEventListener("click", function(){
    // mobileNav.style.display = "none";
    mobileNav.classList.remove("open")
    closeModal()
})


   if(modalNoButton){
    modalNoButton.addEventListener("click", closeModal)
   }



    function closeModal(){
       
        // backdrop.style.display ="none";
        // modal.style.display ="none";

        if(modal){
            modal.classList.remove("open")

        }
        backdrop.classList.remove("open")

        }
    
    
    




togglebutton.addEventListener("click", function() {
    // mobileNav.style.display = "block";
    // backdrop.style.display = "block";

    mobileNav.classList.add("open")
    backdrop.classList.add("open")
})


ctabutton.addEventListener("animationstart", function(event){
    console.log("animation started", event)
})
 



ctabutton.addEventListener("animationend", function(event){
    console.log("animation ended", event)
})
 



ctabutton.addEventListener("animationiteration", function(event){
    console.log("animation iteration", event)
})
 



