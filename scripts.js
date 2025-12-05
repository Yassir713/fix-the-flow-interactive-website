// 1. Selecteer element en geef het een naam in js
const likeButton = document.querySelector('.unliked-button');

// 2. Klikken activeert de functie
likeButton.addEventListener("click", toggleLike);

// 3. Het kan aan en uit gezet worden
function toggleLike() {
	likeButton.classList.toggle("liked");
}