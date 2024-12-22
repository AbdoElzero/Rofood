let grid1 = document.querySelector('.page .left .tables tbody tr td .i-one')
let grid2 = document.querySelector('.page .left .tables tbody tr td .i-two')
let grid3 = document.querySelector('.page .left .tables tbody tr td .i-three')

let li = []
li.unshift(grid1)
li.push(grid2)
li.push(grid3)

li.forEach(e => {
  e.addEventListener('click', function () {

    console.log(e.parentElement.parentElement.remove())

  })

})