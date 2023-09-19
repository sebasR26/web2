window.addEventListener("scroll",function(){
let menu = document.querySelector("#div1");

     if (window.scrollY > 600 ){
        menu.style.backgroundColor = "red";
    }else{
        menu.style.backgroundColor = "blue";
    }

})

const menuButton = document.getElementById('myBtn');
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Mostrar/ocultar botón al hacer scroll hacia abajo/arriba
  if (scrollPosition > 0) {
    menuButton.style.display = 'block';
  } else {
    menuButton.style.display = 'none';
  }
});

menuButton.addEventListener('click', () => {
  // Ocultar el menú
  menuButton.style.display = 'none';
});

    



    





