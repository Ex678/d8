(() => {
    'use strict';
  
    const getStoredTheme = () => localStorage.getItem('theme');
    const setStoredTheme = (theme) => localStorage.setItem('theme', theme);
  
    const setTheme = (theme) => {
      const icon = document.querySelector('#themeToggle i');
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-fill');
      } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill');
      }
    };
  
    document.addEventListener('DOMContentLoaded', () => {
      const storedTheme = getStoredTheme() || 'light';
      setTheme(storedTheme);
  
      document.getElementById('themeToggle').addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        setStoredTheme(newTheme);
        setTheme(newTheme);
      });
    });
  })();


//La mayor parte de este código javascript la extraje de la wiki de bootstrap para habilitar la posiblidad de cambiar entre tema oscuro y claro 