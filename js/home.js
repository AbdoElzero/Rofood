let closes = document.querySelectorAll(".page .popup-box .buttons a")
let boxs = document.querySelector(".page .popup-box")
let overlay = document.querySelector(".page .overlay")

window.addEventListener("DOMContentLoaded", function () {
    const ing = this.localStorage.getItem("popup")

    if (ing !== 'true') {
        boxs.style.display = "block"
        overlay.style.display = "block"
    }
})
    
closes.forEach(e => {
    e.addEventListener("click", function () {
        localStorage.setItem('popup', 'true')
        boxs.style.display = "none"
        overlay.style.display = "none"
    })
})
