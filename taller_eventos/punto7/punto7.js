 let contra = document.querySelector("#psw");
 let validad = document.querySelector("#message")
let letraMinus = document.querySelector("#letter");
let letraMayus = document.querySelector("#capital");
let numeros = document.querySelector("#number");
let caracteres = document.querySelector("#length")

let minus = /[a-z]/;
let nums = /[1-9]/;
let mayus = /[A-Z]/;



 contra.addEventListener("focus", function(){
    console.log("escribiendo")
    validad.style.display = "block";
 });
 contra.addEventListener("blur", function(){
    console.log("ya no escribiendo")
    validad.style.display = "none";
 });
 contra.addEventListener("keyup", function(){
    console.log("contraseña: " + contra.value)
    if (contra.value.match( minus )){
        letraMinus.classList.remove("invalid");
        letraMinus.classList.add("valid");
    }else{
        letraMinus.classList.remove("valid");
        letraMinus.classList.add("invalid");  
    }

 
    console.log("contraseña: " + contra.value)
    if (contra.value.match( mayus )){
        letraMayus.classList.remove("invalid");
        letraMayus.classList.add("valid");
    }else{
        letraMayus.classList.remove("valid");
        letraMayus.classList.add("invalid");  
    }
 
 
    console.log("contraseña: " + contra.value)
    if (contra.value.match( nums )){
        numeros.classList.remove("invalid");
        numeros.classList.add("valid");
    }else{
        numeros.classList.remove("valid");
        numeros.classList.add("invalid");  
    }
    

    if(contra.value.length >= 8) {
    caracteres.classList.remove("invalid");
    caracteres.classList.add("valid");
}else{
    caracteres.classList.remove("valid");
    caracteres.classList.add("invalid");  
}
 })