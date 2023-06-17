// Obtener elementos del DOM
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Evento de clic en el ícono del menú hamburguesa
menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active'); // Alternar la clase 'active' en el menú
});

// Evento de clic en el documento
document.addEventListener('click', function(event) {
  const targetElement = event.target;
  // Comprobar si el clic se realizó fuera del menú
  if (!targetElement.closest('.menu') && !targetElement.closest('.menu-toggle')) {
    menu.classList.remove('active'); // Cerrar el menú si está abierto
  }
});