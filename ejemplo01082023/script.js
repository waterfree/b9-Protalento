let prueba=document.getElementById("prueba")
let res = fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")

    .then((response)=> {
        return response.json()
    })
    .then((data)=>{
        console.log(data.drinks[0].strDrinkThumb)

        prueba.innerHTML = `<img src="${data.drinks[0].strDrink}" alt="drink">`
    })
console.log(res)