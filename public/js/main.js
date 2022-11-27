const contenedorProductos = document.querySelector("#productos");
const stock = "../stock.json"

fetch(stock)
.then(respuesta => respuesta.json())
.then(productos =>{

    productos.forEach(producto =>{

         const casilla = document.createElement('section');
         casilla.classList.add('productSection')

         const imagenProducto = document.createElement('img');
         imagenProducto.classList.add('imgProduct')
         imagenProducto.src = producto.img;

         const info = document.createElement('section');
         info.classList.add('productInfo')

         const tituloProducto = document.createElement('h3');
         tituloProducto.textContent = producto.nombre;

         const precioProducto = document.createElement('h4');
         precioProducto.textContent = producto.precio  + "$";

         const descripcionProducto = document.createElement('h5')
         descripcionProducto.textContent = producto.descripcion;

         const btnFavorito = document.createElement('button');
         btnFavorito.textContent = "Ver más detalles";
         btnFavorito.onclick =  () => {
            location = producto.location
        };
        info.appendChild(tituloProducto);
        info.appendChild(precioProducto);
        info.appendChild(descripcionProducto);

         casilla.appendChild(imagenProducto);
         casilla.appendChild(info);
         casilla.appendChild(btnFavorito);
         
         contenedorProductos.appendChild(casilla)

});

})

const welcomeButton = document.querySelector("#welcomeButton");
welcomeButton.onclick =  () => {
    location= `./pages/ventas.html`
    
};
/*fetch(stock)
  .then(response => {
      return console.log(response.json())
  })*/
   