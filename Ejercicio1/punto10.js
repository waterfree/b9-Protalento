/*Un conocido portal de educación en tecnología está ofreciendo programas para aprender
a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada 
cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: 

Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN

Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento 
correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto 
gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses*/

alert("El programa educativo contempla 3 diferentes niveles, cada uno con un costo mensual de:\n \nCourse: $4999 MXN \nCarrera $3999 MXN \nMaster: $2999 MXN")

nivel = prompt("¿En que tipo de nivel desea capacitarse?")
beca = prompt("¿Con cual de estas becas cuenta? facebook, google, jesua o ninguna")

if (nivel == "course"){
    if (beca == "facebook"){
        alert(`El ${nivel} tiene una duracion de 2 meses y un costo de $4999 MXN mensuales para un total de $9998 MXN, con su decuento de ${beca} tendria que pagar unicamente $${4999-(4999*0.2)} MXN mensual para un total de $${(4999-(4999*0.2))*2} MXN`)
    }else if (beca =="google"){
        alert(`El ${nivel} tiene una duracion de 2 meses y un costo de $4999 MXN mensuales para un total de $9998 MXN, con su decuento de ${beca} tendria que pagar unicamente $${4999-(4999*0.15)} MXN mensual para un total de $${(4999-(4999*0.15))*2} MXN`)
    }else if (beca =="jesua"){
        alert(`El ${nivel} tiene una duracion de 2 meses y un costo de $4999 MXN mensuales para un total de $9998 MXN, con su decuento de ${beca} tendria que pagar unicamente $${4999-(4999*0.5)} MXN mensual para un total de $${(4999-(4999*0.5))*2} MXN`)
    }else if (beca =="ninguna"){
        alert(`El ${nivel} tiene una duracion de 2 meses y un costo de $4999 MXN mensuales para un total de $9998 MXN`)
    }
}else if (nivel == "carrera"){
    if (beca == "facebook"){
        alert(`El ${nivel} tiene una duracion de 6 meses y un costo de $3999 MXN mensuales para un total de $${3999*6} MXN, con su decuento de ${beca} tendria que pagar unicamente $${3999-(3999*0.2)} MXN mensual para un total de $${(3999-(3999*0.2))*6} MXN`)
    }else if (beca =="google"){
        alert(`El ${nivel} tiene una duracion de 6 meses y un costo de $3999 MXN mensuales para un total de $${3999*6} MXN, con su decuento de ${beca} tendria que pagar unicamente $${3999-(3999*0.15)} MXN mensual para un total de $${(3999-(3999*0.15))*6} MXN`)
    }else if (beca =="jesua"){
        alert(`El ${nivel} tiene una duracion de 6 meses y un costo de $3999 MXN mensuales para un total de $${3999*6} MXN, con su decuento de ${beca} tendria que pagar unicamente $${3999-(3999*0.5)} MXN mensual para un total de $${(3999-(3999*0.5))*6} MXN`)
    }else if (beca =="ninguna"){
        alert(`El ${nivel} tiene una duracion de 6 meses y un costo de $4999 MXN mensuales para un total de $${3999*6} MXN`)
    }
}else if (nivel == "master"){
    if (beca == "facebook"){
        alert(`El ${nivel} tiene una duracion de 12 meses y un costo de $2999 MXN mensuales para un total de $${2999*12} MXN, con su decuento de ${beca} tendria que pagar unicamente $${2999-(2999*0.2)} MXN mensual para un total de $${(2999-(2999*0.2))*12} MXN`)
    }else if (beca =="google"){
        alert(`El ${nivel} tiene una duracion de 12 meses y un costo de $2999 MXN mensuales para un total de $${2999*12} MXN, con su decuento de ${beca} tendria que pagar unicamente $${2999-(2999*0.15)} MXN mensual para un total de $${(2999-(2999*0.15))*12} MXN`)
    }else if (beca =="jesua"){
        alert(`El ${nivel} tiene una duracion de 12 meses y un costo de $2999 MXN mensuales para un total de $${2999*12} MXN, con su decuento de ${beca} tendria que pagar unicamente $${2999-(2999*0.5)} MXN mensual para un total de $${(2999-(2999*0.5))*12} MXN`)
    }else if (beca =="ninguna"){
        alert(`El ${nivel} tiene una duracion de 12 meses y un costo de $4999 MXN mensuales para un total de $${2999*12} MXN`)
    }
}

