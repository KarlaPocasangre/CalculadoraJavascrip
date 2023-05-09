//Guia 10- Karla Estefany Hernandez Pocasangre
function mostrarmenu() {
    let opcion = prompt(
        "Menu \n1. Suma \n2. Resta \n3. Encontrar mayor entre dos numeros \n4. Es par \n5. Salir"
    );
    if (opcion == "1" || opcion == "2" || opcion == "3" || opcion == "4") {
        const num1 = parseInt(prompt("Primer número:"));
        const num2 = parseInt(prompt("Segundo número:"));
        if (opcion == "1") {
            let suma = num1 + num2;
            alert("El resultado de la suma es: " + suma);
        } else if (opcion == "2") {
            let resta = num1 - num2;
            alert("El resultado de la resta es: " + resta);
        } else if (opcion == "3") {
            let numMayor = Math.max(num1, num2);
            alert("El numero mayor es: " + numMayor);
        } else if (opcion == "4") {
            if (num1 % 2 === 0) {
                alert("Este numero es par : " + num1);
            } else {
                alert("Este numero es impar: " + num1);
            }
            if (num2 % 2 === 0) {
                alert("Este numero es par : " + num2);
            } else {
                alert("Este numero es impar: " + num2);
            }
        }
    } else if (opcion == 5) {
        let confirmacion = confirm("¿Desea salir?");
        if (confirmacion) {
            window.close();
            let confirmacion = window.close;
        } else {
            mostrarmenu();
        }
    }
}
mostrarmenu();
