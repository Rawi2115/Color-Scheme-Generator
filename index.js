const colorPickInput = document.getElementById("color-picker")
const getButton = document.getElementById("get-scheme") 
const selectDpDownMenu = document.getElementById("color-mode")
const form = document.getElementById("color-form")
const schemeShow = document.getElementById("scheme-show")
const colorNames = document.getElementById("color-names")


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    schemeShow.innerHTML = ''
    colorNames.innerHTML = ''
    let color = colorPickInput.value.replace(/#/g, "")
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${selectDpDownMenu.value}&count=5`).then(res => res.json()).then(data => {
    for(let item of data.colors){
        let colorDiv = document.createElement('div')
        colorDiv.style.backgroundColor = item.hex.value
        let colorHex = document.createElement('p')
        colorHex.textContent = item.hex.value
        colorNames.appendChild(colorHex)
        schemeShow.appendChild(colorDiv)
    }
})
})
document.addEventListener('click',(e)=>{
    if(e.target.parentNode.id == "color-names"){
        navigator.clipboard.writeText(e.target.textContent)
        let colorName = e.target.textContent
        e.target.textContent = "Copied"
        setTimeout(()=>{
            e.target.textContent = colorName
        },2000)
    }
})