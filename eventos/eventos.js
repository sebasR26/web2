/* eventos

agregar acciones a las etiquetas

-en linea: como atributo en la etiqueta
-funcional: pasar el evento a una funcion
-addeventlistener: manejador de eventos

*/

/* foma en linea 
function cambiarTexto(){
    let p = document.querySelector("p");
    p.textContent = "okey";
}
function volverTexto() {
    let p = document.querySelector("p");
    p.textContent = "click aqui";
}

function cambiarColor() {
    let p = document.querySelector("p + p");
    p.style.color = "gold"
}


function volverColor() {
    let p = document.querySelector("p + p");
    p.style.color = "black";
    p.style.fontSize = "50px";
}

*/


//foma funcional
/*
let p1 = document.querySelector("p");
p1.onclick = function (){
    this.textContent = "felicidades le diste click cachondo"
    cambiarColor();
    
};

p1.ondblclick = function (){
    this.textContent = "click aqui"
    volverColor();
}

function cambiarColor() {
    let p = document.querySelector("p + p");
    p.style.fontSize = "50px";
}

function volverColor() {
    let p = document.querySelector("p + p");
    p.style.fontSize = "16px";
}

*/

//evento de forma con manejador de eventos

let p1 = document.querySelector("p");

//agregar evento
p1.addEventListener("click",saludo);

//quitar evento
//p1.removeEventListener("click",saludo);

function saludo(){
    //alert("le diste click desde addEventlistener")
   let div = document.querySelector("div");
   div.classList.toggle("ocultar");
 /* let clase = div.classList.contains("ocultar");

if(clase){
    div.classList.remove("ocultar");
}else{
    div.classList.add("ocultar");
} */
} 




