// Mostrar el botón cuando el usuario haga scroll hacia abajo

window.onscroll = function () {
  var btn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 100) {
    btn.style.display = "block"; // Muestra el botón
    btn.style.transform = "translateY(0)"; // Aparece de manera fluida
  } else {
    btn.style.transform = "translateY(100px)"; // Se oculta hacia abajo
    btn.style.display = "none"; // Asegura que desaparezca del flujo
  }
};

// Función para desplazar hacia arriba cuando se hace clic en el botón

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document
  .getElementById("btn-enviar")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente
    alert("¡El formulario ha sido enviado exitosamente!");
  });
