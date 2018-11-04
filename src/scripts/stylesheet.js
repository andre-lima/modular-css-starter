const body = document.body;
const testModal = document.querySelector('.testModal');

// Open modal by clicking button
document.querySelector('.modal-openButton').addEventListener('click', () => {
    console.log('adsf');
    body.classList.add('modal-is-open');
    testModal.classList.add('modal-is-open');
});

// Close modal when clicking the button
document.querySelector('.modal-closeButton').addEventListener('click', () => {
    console.log('adsf33333333333');
    body.classList.remove('modal-is-open');
    testModal.classList.remove('modal-is-open');
});