let box_1 = document.querySelectorAll('.page .left .the-bills-two .body-three td img')
let bnt = document.querySelector('.page .left .text-head-six .bnt-one')
let boxs = document.querySelector('.page .left .bills-all')
let bnt1 = document.querySelector('.page .left .text-head-six .box-2 button:first-of-type')
let table = document.querySelector('.page .tables-three')
let bntImg = document.querySelector('.page .tables-three .box img')

bnt1.addEventListener("click", function () {

    let overlay = document.createElement("div");
    // Creata Overlay Element
    overlay.className = "popup-overlay";
    
    document.body.appendChild(overlay);

    table.style.display = "block"
})

bntImg.addEventListener("click", function () {

    table.style.display = "none";

    document.querySelector(".popup-overlay").remove()

})




box_1.forEach(a => {

    a.addEventListener('click', function() {

        a.parentElement.parentElement.remove()

    })


})

bnt.addEventListener('click', function() {
    boxs.innerHTML += `
                        <div class="the-bills">
                        <div class="row">
                            <div class="two col-lg-9">
                                <div class="accordion" id="accordionPanelsStayOpenExample">
                                    <div class="accordion-item">
                                      <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                                                <span class="one">الوصفة الطبية </span>
                                        </button>
                                      </h2>
                                      <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                        <div class="accordion-body">
                                            <div class="body-one">
                                                <span>الاسم<sup>*</sup></span>
                                                <input type="text">
                                            </div>
                                            <div class="body-two">
                                                <div class="responsive-table">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <td>ADD</td>
                                                                <td>Axis</td>
                                                                <td>CYL</td>
                                                                <td>SPH</td>
                                                                <td>EYE</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <input type="text" placeholder="0.00">
                                                                </td>
                                                                <td>
                                                                    <input type="text">
                                                                </td>
                                                                <td>
                                                                    <input type="text" placeholder="0.00">
                                                                </td>
                                                                <td>
                                                                    <input type="text" placeholder="0.00">
                                                                </td>
                                                                <td>
                                                                    <span>RIGHT</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <input type="text" placeholder="0.00">
                                                                </td>
                                                                <td>
                                                                    <input type="text">
                                                                </td>
                                                                <td>
                                                                    <input type="text" placeholder="0.00">
                                                                </td>
                                                                <td>
                                                                    <input type="text" placeholder="0.00">
                                                                </td>
                                                                <td>
                                                                    <span>LEFT</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <input type="text" placeholder="0.00">
                                                                </td>
                                                                <td>
                                                                    <span>IPD Near</span>
                                                                </td>
                                                                <td>
                                                                    <input type="text">
                                                                </td>
                                                                <td>
                                                                    <input type="text">
                                                                </td>
                                                                <td>
                                                                    
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <input type="text" placeholder="الزبون">
                                                                </td>
                                                                <td>
                                                                    <span>Ipd مصدر</span>
                                                                </td>
                                                                <td>
                                                                    <input type="text" placeholder="الزبون">
                                                                </td>
                                                                <td>
                                                                    <span>مصدر الوصفة الطبية</span>
                                                                </td>
                                                                <td>
                                                                    
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            </div>
                            <div class="col-lg-3"></div>
                        </div>
                    </div>
    `
})