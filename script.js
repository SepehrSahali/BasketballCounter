let homeValue = 0
document.getElementById("number1").textContent = homeValue
let awayValue = 0
document.getElementById("number2").textContent = awayValue
function oneMoreH() {
    homeValue += 1
    document.getElementById("number1").textContent = homeValue
}
function oneMoreA() {
    awayValue += 1
    document.getElementById("number2").textContent = awayValue
}
function twoMoreH(){
    homeValue += 2
    document.getElementById("number1").textContent = homeValue
}
function twoMoreA(){
    awayValue += 2
    document.getElementById("number2").textContent = awayValue
}
function threeMoreH(){
    homeValue += 3
    document.getElementById("number1").textContent = homeValue
}
function threeMoreA(){
    awayValue += 3
    document.getElementById("number2").textContent = awayValue
}

function reset() {
    awayValue=0
    document.getElementById("number2").textContent = awayValue
    homeValue=0
    document.getElementById("number1").textContent = homeValue
}