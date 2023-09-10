
let titulo = document.querySelector("h1");
titulo.style.color = "red";
titulo.classList.add("cambiar")

let parrafo = document.querySelector("div :nth-child(3)");
parrafo.style.backgroundColor = "green";
parrafo.style.fontWeight = "bold"; 





var listaTareas = document.getElementById("listatareas");


var nuevaLista = document.createElement("ul");


while (listaTareas.firstChild) {
    nuevaLista.appendChild(listaTareas.firstChild);
}


nuevaLista.className = "mi-clase";


listaTareas.parentNode.replaceChild(nuevaLista, listaTareas);

//esto para eliminar
elimanarItem = document.querySelector("ul :nth-child(4)" )
elimanarItem.remove();


//esto para agregar
let agregar = document.createElement("li");
agregar.textContent = "Recoger niños";

nuevaLista.appendChild(agregar);

let agregarCumplido = document.querySelector("ul :nth-child(1)");
let agregarCumplido2 = document.querySelector("ul :nth-child(4)");
agregarCumplido.classList.add("cumplido");
agregarCumplido2.classList.add("cumplido");
agregarCumplido2.classList.add("fallido");

let agregarFallido = document.querySelector("ul :nth-child(2)")
agregarFallido.classList.add("fallido")

let agregarps = document.querySelectorAll("p.ps");

for (let x=0; x<agregarps.length; x++){
    agregarps[x].style.color = "green";
    agregarps[x].style.fontSize = "30px";
    
}

