let countEl = document.getElementById("count")

console.log(countEl)

let count = 0

function increase() {
 count += 1
 countEl.innerHTML = count
}
let endEl = document.getElementById("end")
console.log(endEl)

function end() {
    let ltotal = count + " - "
    endEl.innerHTML += ltotal
    countEl.innerHTML = 0
    count = 0
}