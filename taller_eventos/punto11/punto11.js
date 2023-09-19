window.addEventListener('load', () => {
    const loadingIcon = document.getElementById('loadingIcon');
  
    // Mostrar el icono de carga
    loadingIcon.style.display = 'block';
  
    // Ocultar el icono de carga después de 3 segundos
    setTimeout(() => {
      loadingIcon.style.display = 'none';
    }, 3000);
  });
  