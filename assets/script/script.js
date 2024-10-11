const modals = document.querySelectorAll('.js-navbar');
const modalsContent = document.querySelectorAll('.js-modal');
const closeButtons = document.querySelectorAll('.js-close');

function showModals(index) {
    if (modalsContent[index - 1].classList.contains('open')) {
        modalsContent[index - 1].classList.remove('open');
        modals[index - 1].classList.remove('select');
    } else {
        modalsContent.forEach(modalContent => modalContent.classList.remove('open'));
        modals.forEach(modal => modal.classList.remove('select'));
        modalsContent[index - 1].classList.add('open');
        modals[index - 1].classList.add('select');
    }
}

for (let i = 0; i < modals.length; i++) {
    modals[i].addEventListener('click', function() {
        showModals(i + 1);
    });
}

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        modalsContent.forEach(modalContent => modalContent.classList.remove('open'));
        modals.forEach(modal => modal.classList.remove('select'));
    });
});