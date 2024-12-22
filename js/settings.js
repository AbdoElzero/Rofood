
let box = document.querySelectorAll(".setting .row .ch")
let img = document.querySelector(".setting .over .check")
let text = document.querySelector(".setting .over")


box.forEach(el => {

    el.addEventListener("click", function () {

        text.style.display = "flex"
        
        img.addEventListener("click", function () {
        
            text.style.display = "none"
        
        })
        
    })


})