const form = document.querySelector('#formMessage');
const confirmationMessage = document.querySelector('.confirmation-message');
form.addEventListener('submit', function() {
    confirmationMessage.style.display = 'block';
});

document.addEventListener('scroll', function() {
    let divs = document.querySelectorAll('.scroll-animation');
    divs.forEach(function(div) {
      let posicionDiv = div.getBoundingClientRect().top;
      let alturaVentana = window.innerHeight;
      if (posicionDiv < alturaVentana) {
        div.classList.add('mostrar');
      }
    });
  });
  