// Obtener elementos del DOM
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Evento de clic en el ícono del menú hamburguesa
menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active'); // Alternar la clase 'active' en el menú
});
