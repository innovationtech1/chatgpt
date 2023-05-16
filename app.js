// Seleccionar elementos del DOM
const hamburguesa = document.querySelector('.hamburguesa');
const navbar = document.querySelector('.navbar');

// Agregar evento para abrir y cerrar el menú
hamburguesa.addEventListener('click', () => {
    navbar.classList.toggle('activo');
});