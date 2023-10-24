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
let btnActualizar = document.querySelector(".btn-actualizar");
let tabla = document.querySelector(".table tbody");


//agregar evento al boton

botonGuardar.addEventListener("click", function(){
let datos = obtenerDatos();
guardarDatos(datos);
limpiarDatos();
mostrarDatos();
});

//evento para recargar el navegador
document.addEventListener("DOMContentLoaded" , function(){
    limpiarDatos();
    mostrarDatos();
})

//duncion para limpiar datos
function limpiarDatos(){
    let datosTabla = document.querySelectorAll(".table tbody tr")
    datosTabla.forEach((fila)=>{
        fila.remove();
    })
}

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
     
    cliente.value = "";
    producto.value = "";
    precio.value = "";
    imagen.value = "";
    observaciones.value = "";
    //retornar el objeto
    return datosForm;
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
            <td> <img src= "${dato.imagen}" width="30%"></td>
            <td> ${dato.observaciones} </td>
            <td> 
                <span  onclick="editarPedido(${i})" class="btn btn-warning"> Editar </span>
                <span onclick="eliminarDato(${i})"  class="btn btn-danger"> Eliminar </span>
            </td>

        `;
        tabla.appendChild(fila);
    });
    
    

}   

//funcion eliminar datos de localStorage
function eliminarDato(pos){
    let pedido = [];
    let datosDeLocal= JSON.parse( localStorage.getItem(claveLocal));
    if(datosDeLocal!=null){
        pedido = datosDeLocal;
    }
    let confirmar = confirm("deseas ELIMINAR este dato?")
    if(confirmar){
        pedido.splice(pos, 1);
       // console.log(pedido)
    }
    localStorage.setItem(claveLocal,JSON.stringify(pedido));
    alert("pedido eliminado con exito")
    limpiarDatos();
    mostrarDatos();
}

//editar pedido de localStorage
function editarPedido(pos){
    let pedido = [];
    let datosDeLocal= JSON.parse( localStorage.getItem(claveLocal));
    if(datosDeLocal!=null){
        pedido = datosDeLocal;
    }
    
    //pasar los datos al formulario para editarlos
    cliente.value = pedido[pos].cliente
    producto.value = pedido[pos].producto
    precio.value = pedido[pos].precio
    observaciones.value = pedido[pos].observaciones
    botonGuardar.classList.toggle("d-none");
    btnActualizar.classList.toggle("d-none");
    btnActualizar.addEventListener("click", function(){
        pedido[pos].cliente = cliente.value;
        pedido[pos].producto = producto.value;
        pedido[pos].precio = precio.value;
        pedido[pos].observaciones = observaciones.value;
        localStorage.setItem(claveLocal, JSON.stringify(pedido));
        alert("Pedido actualizado con exito");
        botonGuardar.classList.toggle("d-none");
        btnActualizar.classList.toggle("d-none");
        limpiarDatos();
        mostrarDatos();
        cliente.value = "";
    producto.value = "";
    precio.value = "";
    imagen.value = "";
    observaciones.value = "";

    })
}
