// scripts.js

// Theme toggle function
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }
  
  // Search functionality
  function filterGames() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const links = document.querySelectorAll('#categories a');
    links.forEach(link => {
      if (link.textContent.toLowerCase().includes(input)) {
        link.style.display = 'inline-block';
      } else {
        link.style.display = 'none';
      }
    });
  }
  
  // Favorites functionality
  function toggleFavorite(gameName, linkElement) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.includes(gameName)) {
      localStorage.setItem(
        'favorites', 
        JSON.stringify(favorites.filter(game => game !== gameName))
      );
      linkElement.classList.remove('favorited');
    } else {
      favorites.push(gameName);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      linkElement.classList.add('favorited');
    }
  }
  
  function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesContainer = document.getElementById('favoriteGames');
    favoritesContainer.innerHTML = '';
    favorites.forEach(game => {
      const link = document.createElement('a');
      link.textContent = game;
      link.href = `#${game}`;
      favoritesContainer.appendChild(link);
    });
  }
  
  // About toggle functionality
  function toggleAbout() {
    const aboutSection = document.getElementById('about');
    aboutSection.style.display = 
      aboutSection.style.display === 'block' ? 'none' : 'block';
  }
  
  // Load favorites on page load
  window.onload = loadFavorites;
  