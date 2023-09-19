let acordion = document.querySelectorAll(".accordion");
let panel = document.querySelectorAll(".panel");

for (let x = 0; x < acordion.length; x++) {

    acordion[x].addEventListener("click",function(){
       
      if ( panel[x].style.display == "block"){
        panel[x].style.display = "none";
      }else{
        panel[x].style.display = "block";
      }
    })

}