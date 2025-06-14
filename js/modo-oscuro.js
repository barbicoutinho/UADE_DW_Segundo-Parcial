document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const iconLuna = document.getElementById('icon-luna');
  const iconSol = document.getElementById('icon-sol');
  const htmlTag = document.documentElement;

  // Cargar tema guardado o usar 'light' por defecto
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlTag.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  });

  function setTheme(theme) {
    htmlTag.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);

    iconLuna.style.display = theme === 'dark' ? 'none' : 'inline';
    iconSol.style.display = theme === 'dark' ? 'inline' : 'none';
  }
});
