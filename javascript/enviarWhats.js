


document.addEventListener("DOMContentLoaded", function () {
    const botones = document.querySelectorAll(".botonWhats");

    botones.forEach((boton) => {
        boton.addEventListener("click", function () {
            const card = boton.closest(".card");

            const titulo = card.querySelector(".titulo").innerText.trim();

            const descripcionNode = card.querySelector(".descripcion");
            let descripcion = "";
            if (descripcionNode && descripcionNode.nextSibling) {
                descripcion = descripcionNode.nextSibling.textContent.trim();
            }

            const imagen = card.querySelector("img").src;

            const mensaje = `Hola, estoy interesado en este producto:\n\n*${titulo}*\n\n📝 Descripción: ${descripcion}\n🖼 Imagen: ${imagen}`;
            const numero = "50685154422";
            const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

            window.open(url, "_blank");
        });
    });
});

