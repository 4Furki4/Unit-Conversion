const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const copyFeetBtn = document.getElementById("copy-feet-btn")
const copyMeterBtn = document.getElementById("copy-meter-btn")
const copyGallonBtn = document.getElementById("copy-gallon-btn")
const copyLiterBtn = document.getElementById("copy-liter-btn")
const copyPoundBtn = document.getElementById("copy-pounds-btn")
const copyKiloBtn = document.getElementById("copy-kilos-btn")

function Convert() {
    
    const input = inputEl.value
    if (input > 0) { // Input boş gelirse butonu çalıştırma
        //Length conversion
    lengthEl.innerHTML = `${input} meters = <span id="feet-conversion">${(input*3.281).toFixed(3)}</span> feet | ${input} feet = <span id="meter-conversion">${(input/3.281).toFixed(3)}</span> meters`
    //volume conversion
    volumeEl.innerHTML = `${input} liters = <span id="gallon-conversion">${(input*0.264).toFixed(3)}</span> gallons | ${input} gallons = <span id="liter-conversion">${(input*3.785).toFixed(3)}</span> liters`
    //mass conversion
    massEl.innerHTML = `${input} kilos = <span id="pound-conversion">${(input*2.204).toFixed(3)}</span> pounds | ${input} pounds = <span id="kilo-conversion">${(input/2.204).toFixed(3)}</span> kilos`
    }
}
Convert()

copyFeetBtn.addEventListener("click", function() {
    let copyText = document.getElementById("feet-conversion").innerText
    navigator.clipboard.writeText(copyText)
})

copyMeterBtn.addEventListener("click", function() {
    let copyText = document.getElementById("meter-conversion").innerText
    navigator.clipboard.writeText(copyText)
})
copyGallonBtn.addEventListener("click", function() {
    let copyText = document.getElementById("gallon-conversion").innerText
    navigator.clipboard.writeText(copyText)
})
copyLiterBtn.addEventListener("click", function() {
    let copyText = document.getElementById("liter-conversion").innerText
    navigator.clipboard.writeText(copyText)
})
copyPoundBtn.addEventListener("click", function() {
    let copyText = document.getElementById("pound-conversion").innerText
    navigator.clipboard.writeText(copyText)
})
copyKiloBtn.addEventListener("click", function() {
    let copyText = document.getElementById("kilo-conversion").innerText
    navigator.clipboard.writeText(copyText)
})

inputEl.addEventListener("click", (event) => {
    if (inputEl.value == 1) { // sadece input kısmında 1 varken input kısmı silinmesi için bunu yapmalıyız yoksa her tıklamada inputu boşaltıyor
        inputEl.value = null;
    } else {

    }
})