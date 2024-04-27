document.addEventListener('scroll', function() {
  const divs = document.querySelectorAll('.scroll-animation');
  const alturaVentana = window.innerHeight - 100;

  divs.forEach(function(div) {
    const posicionDivInicial = div.getBoundingClientRect().top;
    let posicionDiv = posicionDivInicial;

    if (posicionDiv < alturaVentana) {
      div.classList.add('mostrar');
    } else {
      div.classList.remove('mostrar');
    }

    posicionDiv = div.getBoundingClientRect().top;
  });
});
  