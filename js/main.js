    const contenedorProductos = document.querySelector("#productos");
    const contenido = document.getElementById('contenido');
    const botones = document.getElementById('botones');
    const stock = "js/stock.json"


fetch(stock)
.then(respuesta => respuesta.json())
.then(productos =>{

    productos.forEach(producto =>{

         const casilla = document.createElement('section');

         const imagenProducto = document.createElement('img');
         imagenProducto.classList.add('imgProduct')
         imagenProducto.src = producto.img;

         const tituloProducto = document.createElement('h3');
         tituloProducto.textContent = producto.nombre;

         const precioProducto = document.createElement('h4');
         precioProducto.textContent = producto.precio  + "$";

         const descripcionProducto = document.createElement('h5')
         descripcionProducto.textContent = producto.descripcion;

         const btnFavorito = document.createElement('button');
         btnFavorito.textContent = "Ver más detalles";
         btnFavorito.onclick =  () => {
            agregarAFavorito(producto.id)
         };

         casilla.appendChild(imagenProducto);
         casilla.appendChild(tituloProducto);
         casilla.appendChild(precioProducto);
         casilla.appendChild(descripcionProducto);
         casilla.appendChild(btnFavorito);
         
         contenedorProductos.appendChild(casilla)

});

function hola(){
    console.log("hola")
}
})

   