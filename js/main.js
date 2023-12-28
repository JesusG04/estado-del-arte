
    const contenedorArticulos = document.querySelectorAll('.articulos');
   
    contenedorArticulos.forEach(container => {
      const fila = container.querySelector('.articulos__slider');
      const botonAnterior = container.querySelector('.anterior');
      const botonSiguiente = container.querySelector('.siguiente');
     
  
      if (fila && botonAnterior && botonSiguiente) {
        botonSiguiente.addEventListener('click', () => {
          fila.scrollLeft += fila.offsetWidth;
        });
  
        botonAnterior.addEventListener('click', () => {
          fila.scrollLeft -= fila.offsetWidth;
        });
      } else {
        console.error('No se encontraron todos los elementos necesarios en el contenedor.');
      }
    });

    function CambiarTamaño(){
        const articulos = document.querySelectorAll('.articulo');

        const anchoPantalla= window.innerWidth;
        console.log(anchoPantalla);

        articulos.forEach(articulo => {
            if(anchoPantalla < 500){
            articulo.style.minWidth = '100%';
            }
            else if(anchoPantalla > 500 && anchoPantalla <  768 ){
            articulo.style.minWidth = '50%';
            }
            else if(anchoPantalla > 768 && anchoPantalla <  1000 ){
            articulo.style.minWidth = '33%';
            }
            else if(anchoPantalla > 1000 && anchoPantalla <  1200 ){
            articulo.style.minWidth = '25%';
            }
            else if(anchoPantalla > 1200 ){
                articulo.style.minWidth = '20%';
                }
        });
    }
    window.addEventListener('resize', CambiarTamaño);
    CambiarTamaño();
    

    
        
     
    
    

     
    





