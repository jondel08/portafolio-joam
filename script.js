// Mostrar el botón cuando el usuario haga scroll hacia abajo
window.onscroll = function () {
  var btn = document.getElementById("scrollToTopBtn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btn.style.display = "block"; // Muestra el botón
  } else {
    btn.style.display = "none"; // Oculta el botón cuando está en la parte superior
  }
};

// Función para desplazar hacia arriba cuando se hace clic en el botón
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
