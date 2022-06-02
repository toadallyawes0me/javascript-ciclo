let userEmail = prompt("Ingrese su correo electrónico");
let confirmUserEmail = prompt("Confirme su correo electrónico");

while ( userEmail != "" && confirmUserEmail != "") {
    if (userEmail == confirmUserEmail) {
        alert("El correo a sido guardado con éxito!");
        break;
    } else {
        alert("Los correos deben de ser iguales");

        userEmail = prompt("Ingrese su correo electrónico");
        confirmUserEmail = prompt("Confirme su correo electrónico");
    }
}