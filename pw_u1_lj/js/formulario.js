function guardar() {
  validar();
}

function validar() {
  const nombre = document.getElementById("id_nombre").value;

  if (nombre === "") {
    console.log("ERROR no ha ingresado el nombre");
  } else {
    console.log("paso la validadcion del nombre");
  }

  /*las validaciones que hacemos en el negocio deben hacerse en el 
    nunca deben hacerse en el backend
    */

    /*etiquetamos con html y css (principalmente)*/ 
}
