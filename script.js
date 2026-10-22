const botonMenu = document.getElementById("menu-btn");
const navegacion = document.getElementById("navegacion");
const anio = document.getElementById("anio");

if (botonMenu && navegacion) {
    botonMenu.addEventListener("click", function () {
        const menuAbierto = navegacion.classList.toggle("abierta");

        botonMenu.setAttribute("aria-expanded", menuAbierto);
        botonMenu.setAttribute(
            "aria-label",
            menuAbierto ? "Cerrar menú" : "Abrir menú"
        );
        botonMenu.textContent = menuAbierto ? "✕" : "☰";
    });

    navegacion.querySelectorAll("a").forEach(function (enlace) {
        enlace.addEventListener("click", function () {
            navegacion.classList.remove("abierta");
            botonMenu.setAttribute("aria-expanded", "false");
            botonMenu.setAttribute("aria-label", "Abrir menú");
            botonMenu.textContent = "☰";
        });
    });
}

if (anio) {
    anio.textContent = new Date().getFullYear();
}
