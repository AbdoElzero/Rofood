let docTitle =  document.title

window.addEventListener('blur', function () {

  document.title = 'Come Back '

})
window.addEventListener('focus', function () {

  document.title = docTitle

})


// Craeta Popup 
let our = document.querySelector(".page .head .image .pop");

  our.addEventListener('click', (e) => {
    
    document.querySelector(".page .head .image span").remove()
    let overlay = document.createElement("div");
    // Creata Overlay Element
    overlay.className = "popup-overlay";
    
    document.body.appendChild(overlay);
    
    // Craeta The Popup Box 
    let popupBox = document.createElement("div");
    
    popupBox.className = "popup-box";
    
    let photo = document.createElement('img')

    photo.src = "./imgs/two/solar_shield-warning-outline.png"

    popupBox.appendChild(photo)

    let heading = document.createElement('h2')
    heading.textContent = 'عرض الاشعارات'
    popupBox.appendChild(heading)

    let prg = document.createElement('p')
    prg.textContent = 'عملاء رفود الكرام نعتذر عن الخلل الفنى الذى حدث البارحة وكاعتذار بسيط لايوفيكم حقكم ستم تعيل خدمة من اختياركم لمدة 4 اشهر مجانا باقة الرسايل شكرا لتفهمكم'
    popupBox.appendChild(prg)

    
    
    
    let bntOne = document.createElement('button')
    bntOne.className = 'cloes-button'
    bntOne.className = 'b-one'
    bntOne.textContent = 'انتقل للرابط'
    popupBox.appendChild(bntOne)
    
    let bntTwo = document.createElement('button')
    bntTwo.textContent = 'موافق'
    bntTwo.className = 'cloes-button'
    popupBox.appendChild(bntTwo)
    
    document.body.appendChild(popupBox);
    
  });

// Close Popup 
document.addEventListener("click", function (e) {

  if (e.target.className == 'cloes-button') {
      e.target.parentNode.remove()

    document.querySelector('.popup-overlay').remove()
  }

  if (e.target.className == 'b-one') {
    e.target.parentNode.remove()

  document.querySelector('.popup-overlay').remove()
}
});