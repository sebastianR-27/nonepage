document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle'); // Botón hamburguesa
    const menu = document.getElementById('menu'); // Menú

    // Alternar la clase "show" en el menú al hacer clic en el botón hamburguesa
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show'); // Añade o quita la clase 'show'
    });
});