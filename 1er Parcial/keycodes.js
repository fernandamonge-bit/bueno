// Seleccionamos elementos
const texto = document.getElementById("texto");
const imagen = document.getElementById("imagen");

// Detectar teclas
document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "1":
      texto.textContent = "🌞 Amanecer en la playa";
      imagen.src = "img/sol_largo.jpg";
      break;
    case "2":
      texto.textContent = "🌲 Bosque tranquilo";
      imagen.src = "img/bosque.jpg";
      break;
    case "3":
      texto.textContent = "🏔️ Montañas nevadas";
      imagen.src = "img/montanas.jpg";
      break;
    case "4":
      texto.textContent = "🌆 Ciudad iluminada";
      imagen.src = "img/ciudad.jpg";
      break;
    case "5":
      texto.textContent = "🌌 Cielo estrellado";
      imagen.src = "img/estrellas.jpg";
      break;
    default:
      texto.textContent = "Tecla no programada (usa 1, 2, 3, 4 o 5)";
      imagen.src = "img/inicio.png";
  }
});
