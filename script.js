document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.menu').style.display = 
        document.querySelector('.menu').style.display === 'block' ? 'none' : 'block';
});
<script>
const hamburgerBtn = document.getElementById('hamburgerBtn');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const menuOverlay = document.getElementById('menuOverlay');

function openMenu() {
  hamburgerBtn.classList.add('open');
  hamburgerMenu.classList.add('open');
  menuOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  hamburgerBtn.classList.remove('open');
  hamburgerMenu.classList.remove('open');
  menuOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
hamburgerBtn.addEventListener('click', function() {
  if (hamburgerMenu.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});
menuOverlay.addEventListener('click', closeMenu);
// Optional: zavření menu po kliknutí na odkaz (na mobilu)
document.querySelectorAll('.hamburger-menu a').forEach(link =>
  link.addEventListener('click', closeMenu)
);
</script>
