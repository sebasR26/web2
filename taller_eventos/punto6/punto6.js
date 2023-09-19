function mostrarResultado() {
    var select = document.querySelector(".nieve");
    var resultado = document.querySelector(".resultado");
    var saborSeleccionado = select.value;

    if (saborSeleccionado === "") {
        resultado.textContent = ""; 
    } else {
        resultado.textContent = "Sabor seleccionado: " + saborSeleccionado;
    }
}