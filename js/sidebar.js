const openMenuBtn = document.getElementById('openMenuBtn');

const closeMenuBtn = document.getElementById('closeMenuBtn');

const overlayMenu = document.getElementById('overlayMenu');

openMenuBtn.addEventListener('click', () => {
overlayMenu.style.display = 'flex';
});

closeMenuBtn.addEventListener('click', () => {
overlayMenu.style.display = 'none';
})
;
