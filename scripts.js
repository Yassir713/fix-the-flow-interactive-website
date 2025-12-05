// zoek de button in de derde li op in het document
const likeButton = document.querySelector('.unliked-button');

// Met click op de button werkt de animatie
likeButton.addEventListener("click", toggleLike);

function toggleLike() {
	likeButton.classList.toggle("liked");
}