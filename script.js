function ejercicio1(event) {
    event.preventDefault();
    let nota = parseFloat(prompt("Ingrese su nota para el ejercicio 1"));
    let mensaje = "";
    if (nota < 75) {
        mensaje = "Usted Necesita Mejorar";
    } else if (nota < 80) {
        mensaje = "Bueno";
    } else if (nota < 91) {
        mensaje = "Muy Bueno";
    } else if (nota <= 100) {
        mensaje = "Usted está en Excelencia Académica";
    } else {
        mensaje = "Ingrese un valor válido";
    }
    alert(mensaje);
}

function ejercicio2(event) {
    event.preventDefault();
    let base = 2;
    let altura = 4;
    let area = (base * altura) / 2;
    let mensaje = "El área del triángulo es: " + area;
    alert(mensaje);
}

function ejercicio3(event) {
    event.preventDefault();
    const nota1 = 98;
    const nota2 = 88;
    const nota3 = 94;
    const nota4 = 90;
    const promedio = Math.round((nota1 + nota2 + nota3 + nota4) / 4);
    let mensaje = "El promedio de las 4 notas es de: " + promedio;
    alert(mensaje);
}

function ejercicio4(event) {
    event.preventDefault();
    let precio = parseFloat(prompt("Ingrese el precio del ticket"));
    let edad = parseFloat(prompt("Ingrese su edad para saber si tiene descuento"));
    let mensaje = "";

    if (edad <= 12) {
        let cantidad = precio * 0.40;
        let descuento = precio - cantidad;
        mensaje = "Ya que usted tiene menos de 12 obtiene un descuento del 40%, por lo tanto solo debe pagar " + descuento + "$";
    } else if (edad <= 21) {
        let estudiante = prompt("¿Usted es un estudiante? (si/no)").toLowerCase();
        if (estudiante === "si") {
            let canti = precio * 0.30;
            let des = precio - canti;
            mensaje = "Ya que usted tiene más de 13 y menos de 21 y es estudiante, obtiene un descuento del 30%, por lo tanto solo debe pagar " + des + "$";
        } else {
            mensaje = "Lo siento, pero usted no es estudiante, por lo tanto no puede obtener este descuento. Debe pagar el precio normal que es de " + precio + "$";
        }
    } else if (edad >= 60) {
        let cantid = precio * 0.60;
        let descu = precio - cantid;
        mensaje = "Ya que usted tiene más de 60, obtiene un descuento del 60%, por lo tanto solo debe pagar " + descu + "$";
    } else {
        mensaje = "Si usted no tiene menos de 21 o más de 60, no obtiene ningún descuento, por lo tanto debe pagar el ticket completo que sería " + precio + "$";
    }

    alert(mensaje);
}

function ejercicio5(event) {
    event.preventDefault();
    let lado1 = 4;
    let lado2 = 4;
    let area = lado1 * lado2;
    let mensaje = "El área del cuadrado es: " + area;
    alert(mensaje);
}

function ejercicio6(event) {
    event.preventDefault();
    let base = 2;
    let altura = 4;
    let perimetro = 2 * (base + altura);
    let mensaje = "El perímetro del rectángulo es: " + perimetro;
    alert(mensaje);
}

function ejercicio7(event) {
    event.preventDefault();
    let edad = parseFloat(prompt("Ingrese su edad"));
    let mensaje = "";
    if (edad >= 18) {
        mensaje = "Usted es mayor de edad";
    } else if (edad <= 17) {
        mensaje = "Usted es menor de edad";
    } else {
        mensaje = "Ingrese un valor válido";
    }
    alert(mensaje);
}

function ejercicio8(event) {
    event.preventDefault();
    let nombre = prompt("Ingrese su nombre");
    let asistencia = parseFloat(prompt("Ingrese su cantidad de asistencias"));
    let mensaje = "";
    if (asistencia >= 35) {
        mensaje = nombre + " usted es un estudiante de categoría A";
    } else if (asistencia > 21 && asistencia < 35) {
        mensaje = nombre + " usted es un estudiante de categoría B";
    } else if (asistencia >= 0 && asistencia < 21) {
        mensaje = nombre + " usted es un estudiante de categoría C";
    } else {
        mensaje = "Unidad no válida";
    }
    alert(mensaje);
}

function ejercicio9(event) {
    event.preventDefault();
    let basemayor = 2;
    let basemenor = 4;
    let altura = 4;
    let area = ((basemayor + basemenor) * altura) / 2;
    let mensaje = "El área del trapecio es: " + area;
    alert(mensaje);
}

function ejercicio10(event) {
    event.preventDefault();
    const tasaCambio = 24;
    const dolares = 1500;
    const convertir = dolares * tasaCambio;
    const mensaje = dolares + " dólares son " + convertir + " lempiras";
    alert(mensaje);
}

function ejercicio11(event) {
    event.preventDefault();
    let lempiras = 2000;
    let tasaCambio = 24;
    let conversion = lempiras / tasaCambio;
    let mensaje = lempiras + " lempiras son " + conversion + " dólares.";
    alert(mensaje);
}

function ejercicio12(event) {
    event.preventDefault();
    let celsius = 30;
    let fahrenheit = (celsius * 9 / 5) + 32;
    let mensaje = celsius + " grados Celsius son " + fahrenheit + " grados Fahrenheit.";
    alert(mensaje);
}

function ejercicio13(event) {
    event.preventDefault();
    let radio = 5;
    let area = Math.PI * radio * radio;
    let mensaje = "El área del círculo es: " + area;
    alert(mensaje);
}

function ejercicio14(event) {
    event.preventDefault();
    let radio = 5;
    let perimetro = 2 * Math.PI * radio;
    let mensaje = "El perímetro del círculo es: " + perimetro;
    alert(mensaje);
}

function ejercicio15(event) {
    event.preventDefault();
    let metros = 100;
    let centimetros = metros * 100;
    let mensaje = metros + " metros son " + centimetros + " centímetros.";
    alert(mensaje);
}