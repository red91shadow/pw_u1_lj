function guardar() {
  validar();
}

function validar() {
  const nombre = document.getElementById("id_nombre").value.trim();  // el trim se utiliza para eliminar los espacios blancos 
  const apellido = document.getElementById("id_apellido").value.trim();
  const fechaNacimiento = document.getElementById("id_fecha_nacimiento").value;
  const email = document.getElementById("id_email").value.trim();
  const password = document.getElementById("id_password").value;

  let valido = true;

  // Validar nombre
  if (nombre === "") {
    console.log("ERROR: No ha ingresado el nombre");
    valido = false;
  } else {
    console.log("OK: Validación del nombre pasada");
  }

  // Validar apellido
  if (apellido === "") {
    console.log("ERROR: No ha ingresado el apellido");
    valido = false;
  } else {
    console.log("OK: Validación del apellido pasada");
  }

  // Validar fecha de nacimiento
  if (fechaNacimiento === "") {
    console.log("ERROR: No ha ingresado la fecha de nacimiento");
    valido = false;
  } else {
    console.log("OK: Validación de la fecha de nacimiento pasada");
  }

  // Validar email (formato básico)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log("ERROR: Email no válido");
    valido = false;
  } else {
    console.log("OK: Validación del email pasada");
  }

  // Validar contraseña (mínimo 6 caracteres como ejemplo)
  if (password.length < 6) {
    console.log("ERROR: La contraseña debe tener al menos 6 caracteres");
    valido = false;
  } else {
    console.log("OK: Validación de la contraseña pasada");
  }

  if (valido) {
    console.log("Todos los campos son válidos. Puede continuar.");
    // Aquí puedes guardar los datos o enviar el formulario
  } else {
    console.log("Hay errores en el formulario. Corríjalos para continuar.");
  }
}
