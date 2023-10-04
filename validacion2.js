// --------------------------------------------------------
// Este código se encarga de validar  que los campos del 
// formulario cumplan ciertas condiciones antes de permitir
// su envío. Si alguna validación falla, se muestran 
// alertas al usuario y se detiene el proceso de envío del
// formulario.
// --------------------------------------------------------

// --------------------------------------------------------
// Se define una función llamada validarEnviar, que se 
// ejecuta cuando se presione "Enviar" en el formulario.
// --------------------------------------------------------
function validarEnviar() {
    // Validar el campo de nombre
    if (document.fvalida.nombre.value.length <= 5) {
        alert("Tiene que escribir su nombre");
        document.fvalida.nombre.focus();
        return;
    }

    // --------------------------------------------------------
    // Validar la edad. Debe ser un entero mayor que 18.
    // --------------------------------------------------------
    let edad = document.fvalida.edad.value;

    edad = validarEntero(edad);
    document.fvalida.edad.value = edad;

    if (edad == "") {
        alert("Tiene que introducir un número entero en su edad.");
        document.fvalida.edad.focus();
        return;
    } else {
        if (edad < 18) {
            alert("Debe ser mayor de 18 años.");
            document.fvalida.edad.focus();
            return;
        }
    }

    // --------------------------------------------------------
    // Validar DNI.
    // --------------------------------------------------------
    let dni = document.fvalida.dni.value;

    dni = validarEntero(dni);
    document.fvalida.dni.value = dni;

    if (dni == "") {
        alert("Tiene que introducir un número de 8 dígitos.");
        document.fvalida.dni.focus();
        return;
    } else {
        if (dni < 1000000 || dni >99999999) {
            alert("El nro de DNI debe tener 8 digitos.");
            document.fvalida.dni.focus();
            return;
        }
    }    

    // --------------------------------------------------------
    // Validar el campo de interés
    // --------------------------------------------------------
    if (document.fvalida.interes.selectedIndex == 0) {
        alert("Debe seleccionar un motivo de su contacto.");
        document.fvalida.interes.focus();
        return;
    }

    // --------------------------------------------------------
    // Si todas las validaciones pasan, se envía el formulario.
    // --------------------------------------------------------
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}


// --------------------------------------------------------
// validarEntero toma un valor como argumento. Esta función
// intenta convertir el valor a un número entero usando 
// parseInt. Si la conversión tiene éxito, devuelve el valor
// como número; de lo contrario, devuelve una cadena vacía.
// --------------------------------------------------------
function validarEntero(valor) {
    // Intentar convertir a entero.
    // Si era un entero no le afecta, si no lo era, lo intenta convertir.
    valor = parseInt(valor);

    // Comprobar si es un valor numérico
    if (isNaN(valor)) {
        // En caso de no ser un número, devuelve una cadena vacía
        return "";
    } else {
        // En caso de ser un número, devuelve el valor
        return valor;
    }
}