//datos ficticios

let datos = [
     {
         nombre: "ironman",
         estudio: "Marvel",
         lanzamiento: 2008,
         genero: "Accion"
     },
     {
         nombre: "Rapido y furiosos",
         estudio: "Universal",
         lanzamiento: 2001,
         genero: "Accion"
     },
     {
         nombre: "Spiderman",
         estudio: "Sony",
         lanzamiento: 2002,
         genero: "Accion"
     }
]

function ObtenerPeliculas(pelicula) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pelicula.length != 0) {
                resolve(pelicula);
            } else {
                reject(new Error("Error no hay Peliculas"));
            }
        }, 500)
    })



}

//console.log(ObtenerPeliculas(datos));

//manejo de promesas then y catch
// catch captura errores en las promesas
//then captura los datos de las promesas

//todo lo que sea resolve declaras then

//ObtenerPeliculas(datos).then((pelicula)=> console.log(pelicula)).catch((error)=>console.log(error.message))

//mostrar then y catch
//forma 1
/*
ObtenerPeliculas(datos)
    .then((pelicula) => {
        pelicula.forEach((peli, i) => {
            document.write(
                `
        <p>peliculas: ${peli.nombre} <p>
        <p>peliculas: ${peli.estudio} <p>
        <p>peliculas: ${peli.lanzamiento} <p>
        <p>peliculas: ${peli.genero} <p>
        <hr>
        `
            );
        });
    })
    .catch((error)=>console.log(error.message));
    */

//forma 2 con async / await

async function Peliculas(datos){
    try{
        let peliculas = await ObtenerPeliculas(datos);
        peliculas.forEach((peli, i) => {
            document.write(
                `
        <p>peliculas: ${peli.nombre} <p>
        <p>peliculas: ${peli.estudio} <p>
        <p>peliculas: ${peli.lanzamiento} <p>
        <p>peliculas: ${peli.genero} <p>
        <hr>
        `
            );
        });
    }catch(error){
        console.log(error.message)
    }
}
