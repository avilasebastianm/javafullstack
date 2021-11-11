function obtenerCategoria() {
    var precioFinal;
    
    const  cat= document.getElementById("categoria").value;




    switch(cat) {
      case document.getElementById("estudiante").value:
           precioFinal= this.cantidad.value * 200 * (1-0.80);
      break;
      case document.getElementById("junior").value:
           precioFinal= this.cantidad.value * 200 * (1-0.15);
      break;
      case document.getElementById("trainee").value:
           precioFinal= this.cantidad.value * 200 * (1-0.5);
      break;
      default: alert("Debe ingresar la cantidad de entradas y seleccionar una categoria")  
    }
    document.getElementById("precio").innerHTML = parseInt (precioFinal);
  }



  function borrar(){
     document.getElementById("precio").innerHTML = (0);
  } 
















