const numInput = document.getElementById("num-input")
const txtInput = document.getElementById("txt-input")
//const result = document.getElementById("result")
const buttonResult = document.getElementById("btn-result") 
const resultDiv = document.getElementById("result") 

console.log ("prueba: ", buttonResult)

let inputValue1 = ""
//podemos cualquiera de estados nomenclarutas para ejecutar () => {} o function () {} funcionando igual
numInput.addEventListener("change", () =>{
    
    inputValue1 = numInput.value
    console.log("Input Value", inputValue1)
})
let inputValue2 = ""

txtInput.addEventListener("change", () =>{
    
    inputValue2 = txtInput.value
    console.log("Input Value", inputValue2)
})

buttonResult.addEventListener("click", () =>{
    console.log(inputValue1)
    console.log(inputValue2 )

resultDiv.innerHTML = parseInt(inputValue1) + parseInt(inputValue2)
})


/*
let input1 = ""
let input2 = ""

numInput.addEventListener("change", (e) =>{
    input1 = numInput.value
    console.log("final2", input1)
    result.innerHTML += input1
})

txtInput.addEventListener("change", (e) => {
    input2 = txtInput.value
    console.log("final1", input2)
    result.innerHTML += input2
})*/