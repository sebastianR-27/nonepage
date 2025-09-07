function openModal(element) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalCaption = document.getElementById("modal-caption");

    const img = element.querySelector("img");
    const caption = element.querySelector(".overlay").innerText;

    modalImg.src = img.src;
    modalCaption.innerText = caption;

    // Verificar si la foto tiene la clase 'photoespecial'
    if (element.classList.contains("photoespecial")) {
        modalImg.classList.add("photoespecial");  // Solo agregar el borde arcoíris si es una foto especial
    }

    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    // Quitar la clase 'photoespecial' al cerrar el modal
    modalImg.classList.remove("photoespecial");

    modal.style.display = "none";
}
