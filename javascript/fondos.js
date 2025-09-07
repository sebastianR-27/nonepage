document.addEventListener("DOMContentLoaded", function () {
    // Obtiene la página actual de la URL
    let currentPage = window.location.pathname.split("/").pop();

    // Busca el enlace activo basado en el href
    let activeLink = document.querySelector(`.pagination a[href="${currentPage}"]`);

    if (activeLink) {
        let newBg = activeLink.getAttribute("data-bg"); // Obtiene la imagen de fondo
        document.body.style.backgroundImage = `url('${newBg}')`; // Cambia el fondo
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    }
});
