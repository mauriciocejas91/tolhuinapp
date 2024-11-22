// Variables
const sideMenu = document.getElementById('sideMenu');
const menuToggle = document.querySelector('.menu-toggle');
const loginModal = document.getElementById('loginModal');
const loginBtn = document.querySelector('.login-btn');
const closeModalBtn = document.querySelector('.close-modal');

window.addEventListener('load', function() {
    // Oculta el preloader después de que la página se cargue completamente
    document.getElementById('preloader').classList.add('preloader-hidden');
});

// Abrir y cerrar el menú lateral
function toggleMenu() {
    sideMenu.classList.toggle('open');
}

// Abrir el modal de login
function openLoginModal() {
    loginModal.classList.add('show');
}

// Cerrar el modal de login
function closeLoginModal() {
    loginModal.classList.remove('show');
}

// Cerrar el menú lateral si el usuario hace clic fuera
document.addEventListener('click', function(event) {
    // Si el clic no fue dentro del menú lateral ni del botón de menú
    if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        sideMenu.classList.remove('open');
    }
});

// Abre el modal de login al hacer clic en "Ingresar"
loginBtn.addEventListener('click', openLoginModal);

// Cierra el modal de login cuando se hace clic en la X
closeModalBtn.addEventListener('click', closeLoginModal);

// Prevenir que el clic en el modal lo cierre (no afecta al menú lateral)
loginModal.addEventListener('click', function(event) {
    event.stopPropagation();
});