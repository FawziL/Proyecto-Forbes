const boton = document.getElementById("buttonForm")
boton.addEventListener("click", warn)
const texto = document.getElementById("texto")

function warn(){
    texto.innerText = "El mensaje ha sido enviado."
}