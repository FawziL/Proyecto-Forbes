const form = document.querySelector('#formMessage');
const confirmationMessage = document.querySelector('.confirmation-message');
form.addEventListener('submit', function() {
    confirmationMessage.style.display = 'block';
});
