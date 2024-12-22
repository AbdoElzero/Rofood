let linkClo = document.querySelector('.page .left .last-link')
let butClo = document.querySelector('.page .left .over .check')
let textClo = document.querySelector(".page .left .over")

linkClo.addEventListener("click", function () {
    
    
    textClo.style.display = "flex"
    
    butClo.addEventListener("click", function () {
    
        textClo.style.display = "none"
    
    })
    
})