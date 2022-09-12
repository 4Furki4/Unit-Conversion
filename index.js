const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

btnEl.addEventListener("click", (event) => {
    const input = inputEl.value
    //Length conversion
    lengthEl.textContent = `${input} meters = ${(input*3.281).toFixed(3)} feet | ${input} feet = ${(input/3.281).toFixed(3)} meters`
    //volume conversion
    volumeEl.textContent = `${input} liters = ${(input*0.264).toFixed(3)} gallons | ${input} gallons = ${(input*4.546).toFixed(3)} liters`
    //mass conversion
    massEl.textContent = `${input} kilos = ${(input*2.204).toFixed(3)} pounds | ${input} pounds = ${(input/2.204).toFixed(3)} kilos`
})