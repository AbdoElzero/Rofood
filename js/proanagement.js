let one = document.querySelector(".page .left .one")
let two = document.querySelector(".page .left .two")
let three = document.querySelector(".page .left .three")
let four = document.querySelector(".page .left .four")
let five = document.querySelector(".page .left .five")
let six = document.querySelector(".page .left .six")
let seven = document.querySelector(".page .left .seven")
let eight = document.querySelector(".page .left .eight")
let nine = document.querySelector(".page .left .nine")
let ten = document.querySelector(".page .left .ten")
let add = document.querySelector(".page .left .once")
let table = document.querySelector(".page .left .tables-three tbody")
let fields = document.querySelectorAll(".page .left .t")


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
    } else {
        table.innerHTML += `
            <tr>
                                        <td>
                                            <div class="input-two">
                                                <input type="checkbox" name="" id="1" checked>
                                                <label for="1"></label>
                                            </div>
                                        </td>
                                        <td> ${one.value} </td>
                                        <td> ${two.value} </td>
                                        <td> ${three.value} </td>
                                        <td> ${four.value} </td>
                                        <td> ${five.value} </td>
                                        <td> ${six.value} </td>
                                        <td> ${seven.value} </td>
                                        <td class="green"> ${eight.value} </td>
                                        <td> ${nine.value} </td>
                                        <td> ${ten.value} </td>
                                        <td>
                                            <img src="imgs/two/solar_pen-new-round-linear.png" alt="">
                                            <img src="imgs/two/solar_trash-bin-trash-outline.png" alt="">
                                        </td>
                                    </tr>
        `
        fields.forEach(field => field.value = "")
        let img_1 = document.querySelectorAll('.page .left .tables-three .responsive-table tbody td img:last-of-type')

        img_1.forEach(i => {

            i.addEventListener('click', function () {

                i.parentElement.parentElement.remove()

            })

        })

    }
})





const randomBack = document.querySelectorAll(".page .left .footer .foot-two ul li");

randomBack.forEach(a => {

    a.addEventListener("click", (e) => {

        handleActive(e)

    })

});

function handleActive(ev) {

    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");

    });
    // Add Active Class On Self
    ev.target.classList.add("active");

};


let img_1 = document.querySelectorAll('.page .left .tables-three .responsive-table tbody td img:last-of-type')

img_1.forEach(i => {

    i.addEventListener('click', function () {

        i.parentElement.parentElement.remove()

    })

})
