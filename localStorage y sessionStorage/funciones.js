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

/*
//guardar la informacion en localStorage
//localStorage.setItem("cliente", JSON.stringify(datos));
let cliente = JSON.parse(localStorage.getItem("cliente"));
//mostrar informacion
cliente.forEach(dato => {
    document.write("nombre: " + dato.nombre + "<br>");
    document.write("telefono: " + dato.telefono + "<br>");
    document.write("<hr>");
    
});

*/

//variables globales

let cliente = document.querySelector(".cliente");
let producto = document.querySelector(".producto");
let precio = document.querySelector(".precio");
let imagen = document.querySelector(".imagen");
let observaciones = document.querySelector(".observaciones");
let botonGuardar = document.querySelector(".btn-pedido");
let tabla = document.querySelector(".table tbody");

//agregar evento al boton

botonGuardar.addEventListener("click", function(){
obtenerDatos();
});

//funcion para obtener los datos
function obtenerDatos(){
    if(cliente.value == "" || producto.value == "" || precio.value == "" || imagen.value ==  "" || observaciones.value == ""){
        alert("Los campos son obligatorios")
}else{
    let datosForm={
        cliente: cliente.value,
        producto: producto.value,
        precio: precio.value,
        imagen: imagen.value,
        observaciones: observaciones.value,
    }

    console.log(datosForm);
    guardarDatos(datosForm); 
    cliente.value = "";
    producto.value = "";
    precio.value = "";
    imagen.value = "";
    observaciones.value = "";
}

};

//funcioona para guardar datos
let claveLocal="pedidos";
function guardarDatos(objeto){
    let pedidos = [];
    let datosDeLocal= JSON.parse( localStorage.getItem(claveLocal));
    if(datosDeLocal!=null){
        pedidos = datosDeLocal;
    }
    
    pedidos.push(objeto)

    localStorage.setItem(claveLocal, JSON.stringify(pedidos))
    alert("lo guarde")
};

//funcion para mostrat datos

function mostrarDatos(){
    let pedidos = [];
    let datosDeLocal= JSON.parse( localStorage.getItem(claveLocal));
    if(datosDeLocal!=null){
        pedidos = datosDeLocal;
    }

    pedidos.forEach((dato, i) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td> ${i+1} </td>
            <td> ${dato.producto} </td>
            <td> ${dato.cliente} </td>
            <td> ${dato.precio} </td>
            <td> <imge src= ${dato.imagen} width="50%"></td>
            <td> ${dato.observaciones} </td>
            <td> 
                <span  onclick="editarPedido(${i})" class="btn btn-warning"> Editar </span>
                <span onclick="eliminarPedido(${i})"  class="btn btn-danger"> Eliminar </span>
            </td>

        `;
        tabla.appendChild(fila);
    });
    
    

}   

mostrarDatos();
