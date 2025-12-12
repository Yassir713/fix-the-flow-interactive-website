// 1. Selecteer alle elementen met dezelfde class
const likeButtons = document.querySelectorAll('.unliked-button');

// 2. Voor elk element apart een click-event toevoegen
likeButtons.forEach(button => {
    button.addEventListener("click", () => {
        // 3. Toggle de class op het geklikte element
        button.classList.toggle("liked");
    });
});
