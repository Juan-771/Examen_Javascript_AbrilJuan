

document.getElementById("datica").addEventListener("submit", function (a) {
    a.preventDefault();

    const comidita = document.getElementById("busqueda").value

    localStorage.setItem("comida", comidita);
    console.log(comidita)
    if (comidita == "a"){
        async function llamadaAPI(){
            let response = await fetch("www.themealdb.com/api/json/v1/1/search.php?f=a")
            let data = await response.json()
            console.log(data)
            mostrarComida(data)
        
        }
    }
 } )
