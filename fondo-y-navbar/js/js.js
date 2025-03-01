document.getElementById("toggle-btn").addEventListener("click", function() {
    let sidebar = document.getElementById("sidebar");
    let menu = document.getElementById("menu");
    
    sidebar.classList.toggle("open"); // Alterna la clase open
  
    // Agregar un pequeño retraso en la transición de los items
    if (sidebar.classList.contains("open")) {
      setTimeout(() => menu.style.opacity = "1", 200);
    } else {
      menu.style.opacity = "0";
    }
});