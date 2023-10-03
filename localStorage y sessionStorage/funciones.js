//variable de datos
//let nombre = "armando paredes";
// guardar la informacion en localStorage
//localStorage.setItem("cliente", nombre);
//extraer informacion del localeStorage
//let cliente = localStorage.getItem("cliente");
//document.write("cliente: " + cliente);

//claar
//removeItem()
//localStorage.removeItem("cliente");

//variable de datos
/*
let datos = [
    {"nombre":"pepito","telefono":123456789},
    {"nombre":"rosa","telefono":789546432},
    {"nombre":"elias","telefono":456123748},
];
*/

//guardar la informacion en localStorage
//localStorage.setItem("cliente", JSON.stringify(datos));
let cliente = JSON.parse(localStorage.getItem("cliente"));
//mostrar informacion
cliente.forEach(dato => {
    document.write("nombre: " + dato.nombre + "<br>");
    document.write("telefono: " + dato.telefono + "<br>");
    document.write("<hr>");
    
});