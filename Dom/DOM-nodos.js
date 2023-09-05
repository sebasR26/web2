//DOM : document objet model

//forma antigua de seleccionar elementos







//forma nueco ecmascript 6
//seleccionar por nombre de eyiqieta

//let titulo = document.querySelector("h1");
//console.log(titulo);


//seleccionar por clase

//let titulo = document.querySelector(".t1");

// seleccionar por id

//let titulo = document.querySelector("#it1");

//selecionar por etiqueta dentro de otra

//let titulo = document.querySelector("div :nth-child(2)");

/*
let titulo = document.querySelectorAll("div h1");
console.log(titulo);
for(let i=0; i < titulo.length; i++){
    titulo[i].textContent = "hijo" + i;
    titulo[i].style.color = "red";
}

// titulo.textContent = "hijo";
// titulo.style.color = "red";

let parrafo = document.querySelectorAll("div p");
console.log(parrafo);
for (let x=0; x<titulo.length; x++){
    parrafo[x].style.color = "white";
    parrafo[x].style.backgroundColor = "green";
}
 */

/*
//crear etiqueta

let a = document.createElement("a");
//a.textContent = "ir a youtube";
let texto =  document.createTextNode("ir a youtube");

//ubicar algo dentro de una etiqueta

a.appendChild(texto);
let body = document.querySelector("body");
a.setAttribute("href","http://youtube.com")
a.setAttribute("target","_blank")
body.appendChild(a);
let titulo2 = document.querySelector("div h1:nth-child(2)");

titulo2.insertAdjacentElement("afterend",a);

//eliminar etiqueta

a.remove();

*/

let titulo = document.querySelector("h1");

/*
//agregar una clase ya tenga el elemento
titulo.classList.add("letra")

//quitar clase de un elemento
titulo.classList.remove("letra");

//agregar o quitar una clase

titulo.classList.toggle("letra");

//evaluca si el elemento contiene una clase

let existeclase = titulo.classList.contains("letra");
console.log("¿el elemento tiene clase? " + existeclase);
*/
