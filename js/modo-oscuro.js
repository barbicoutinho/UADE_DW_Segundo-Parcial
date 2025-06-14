// js/modo-oscuro.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const iconLuna = document.getElementById('icon-luna');
    const iconSol = document.getElementById('icon-sol');
    const htmlTag = document.documentElement;
  
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  
    themeToggle.addEventListener('click', () => {
      const newTheme = htmlTag.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    });
  
    function setTheme(theme) {
      htmlTag.setAttribute('data-bs-theme', theme);
      localStorage.setItem('theme', theme);
  
      if (theme === 'dark') {
        iconLuna.style.display = 'none';
        iconSol.style.display = 'inline';
        document.body.classList.add('modo-oscuro');
      } else {
        iconLuna.style.display = 'inline';
        iconSol.style.display = 'none';
        document.body.classList.remove('modo-oscuro');
      }
    }
  });
  