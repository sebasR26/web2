let boton = document.querySelector(".btn");
let resultado = document.querySelector(".resultados")
let urlPeticion = "http://localhost/archivos/pelicula.txt";

//evento para el boton
boton.addEventListener("click",function(){
    peticion(urlPeticion)
})

//con forma then y catch

//funcion para realizar la peticion al servidor
function peticion(url){
    fetch(url,{
        method: "GET",
        headers: {
            "content-type": "application/json"
        }

    }).then((datos)=>datos.json())
    .then((mensaje)=>{
        mensaje.Peliculas.forEach((peli,i)=>{
            resultado.innerHTML += `
            <p>Pelicula: ${peli.Name}</p>
            <p>Pelicula: ${peli.studio}</p>
            <p>Pelicula: ${peli.lanzamiento}</p>
            <hr>

            `
        })
        
    })
    .catch((error)=>console.log(error))
}