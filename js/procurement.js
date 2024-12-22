let one = document.querySelector(".page .left .procurement .b-one .one")
let two = document.querySelector(".page .left .procurement .b-one .two")
let three = document.querySelector(".page .left .procurement .b-one .three")
let four = document.querySelector(".page .left .procurement .b-one .four")
let five = document.querySelector(".page .left .procurement .b-one .five")
let six = document.querySelector(".page .left .procurement .b-one .six")
let seven = document.querySelector(".page .left .procurement .b-one .seven")
let eight = document.querySelector(".page .left .procurement .b-one .eight")
let once = document.querySelector(".page .left .procurement .b-one .once")
let add = document.querySelector(".page .left .procurement .add-pro")
let table = document.querySelector(".page .left .tables-two tbody")
let fields = document.querySelectorAll(".page .left .procurement .b-one .t")

add.addEventListener("click", function (ev) {
    ev.preventDefault()
    let allFields = true;

    fields.forEach(field => {
        if (field.value.trim() === "") {
            allFields = false
        }
    });

    if (!allFields) {
        console.log('ff')
    }else {
        table.innerHTML += `
        <tr>
                                         <td> ${one.value} </td>
                                         <td> ${two.value} </td>
                                         <td> ${three.value} </td>
                                         <td> ${four.value} </td>
                                         <td> ${six.value} </td>
                                         <td> ${seven.value} </td>
                                         <td> ${eight.value} </td>
                                         <td> ${five.value} </td>
                                         <td> ${once.value} </td>
                                         <td>
                                             <label>
                                                 <input class="toggle-checkbox" type="checkbox" checked>
                                                 <div class="toggle-switch"></div>
                                             </label>
                                         </td>
                                         <td>
                                             <label>
                                                 <input class="toggle-checkbox" type="checkbox">
                                                 <div class="toggle-switch"></div>
                                             </label>
                                         </td>
                                     </tr>
     `
     fields.forEach(field =>field.value = "")
    }
})


