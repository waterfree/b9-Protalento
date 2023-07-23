const btnLogin = document.getElementById("btn-login")
const emailInput = document.getElementById("email-input")
const passInput = document.getElementById("pass-input")

const users = [
    {
        email:"nestora",
        password:"1234",
        balance:1000
    },
    {
        email:"sebas",
        password:"1234",
        balance:100
    },
    {
        email:"mary",
        password:"1234",
        balance:500
    },
]
btnLogin.addEventListener("click", function(event){
    event.preventDefault()
    let email = emailInput.value
    let password = passInput.value

    let loggedUser = users.find(
        (user) => user.email === email && user.password === password)
    
    if (loggedUser){
        //localStorage.setItem("loggedUser",loggedUser)
        //Asi se convierte un objero en una variable
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser))
        window.location.href = "./home.html"
    }else{
        alert("El usuario o la contraseña son incorrectos")
    }
    console.log(loggedUser)
    //window.location.href = "./home.html"
})