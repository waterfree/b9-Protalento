const infoDiv = document.getElementById("user-info")

const btnLogout = document.getElementById("btn-logout")

const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

console.log(loggedUser)


infoDiv.innerHTML=`<span>BIENVENIDO ${loggedUser.email} A TU HOME BANKING</span>`

btnLogout.addEventListener("click", function() {
    localStorage.removeItem("loggedUser")
    window.location.href = "./index.html"
})