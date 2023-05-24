function toggleSubmenu(event) {
    event.preventDefault();
    var submenu = event.target.nextElementSibling;
    submenu.classList.toggle('show');
  }
  