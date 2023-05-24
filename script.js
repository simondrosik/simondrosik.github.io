// Sélectionnez tous les éléments de menu ayant une classe "has-submenu"
const menuItems = document.querySelectorAll('.has-submenu');

// Ajoutez un gestionnaire d'événement au clic/toucher pour chaque élément de menu
menuItems.forEach(item => {
  // Écoutez l'événement "click" ou "touchstart"
  item.addEventListener('click', function(event) {
    // Empêchez le comportement par défaut du lien
    event.preventDefault();
    
    // Vérifiez si le sous-menu est déjà affiché
    const submenu = item.querySelector('.submenu');
    const isSubMenuVisible = submenu.style.display !== 'none';
    
    // Affichez ou masquez le sous-menu en fonction de son état actuel
    submenu.style.display = isSubMenuVisible ? 'none' : 'block';
  });
});
