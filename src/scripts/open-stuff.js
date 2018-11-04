const body = document.body;

// Open modal by pressing O
const modal = document.querySelector('.modal');
body.addEventListener("keyup", (event) => {
    if (event.key === 'o') {
        body.classList.add('modal-is-open');
        modal.classList.add('modal-is-open');
    }
});

// Close modal when clicking the x button
document.querySelector('.card-close-icon').addEventListener('click', () => {
    body.classList.remove('modal-is-open');
    modal.classList.remove('modal-is-open');
});