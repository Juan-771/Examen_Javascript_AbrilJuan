

document.getElementById("datica").addEventListener("submit", function (evento) {
    evento.preventDefault();
    console.log("el evento si a sucedido")
    const comidita = document.getElementById("busqueda").value

    localStorage.setItem("comida", comidita);
    console.log(comidita)
    if (comidita === "a"){

        }
    }
 )
 