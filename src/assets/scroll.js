const scrollTopButton = document.getElementById('scrollTopButton');

// Mostrar el botón al pasar cierta altura
window.addEventListener('scroll', () => {
  if (window.scrollY > 800) { // Ajusta la altura según lo necesites
    scrollTopButton.classList.remove('hidden');
  } else {
    scrollTopButton.classList.add('hidden');
  }
});

// Función para volver al inicio
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}