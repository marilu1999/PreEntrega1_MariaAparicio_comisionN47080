const psicologos = [
    { nombre: "Carolina", precioTurno: 5300 },
    { nombre: "Juan", precioTurno: 6000 },
    { nombre: "Gianella", precioTurno: 3500 },
    { nombre: "Laura", precioTurno: 4500 },
    { nombre: "William", precioTurno: 5500 },
];
let carrito = [];

function calcularPrecioConIVA(total) {
    const iva = 0.21;
    const precioConIVA = total + (total * iva);
    return precioConIVA;
}

let inicio = prompt("Bienvenido a nuestro servicio de generación de turnos con psicoterapeutas. ¿Estás listo para comenzar?");

if (inicio === "no") {
    alert("Muchas gracias por tu consulta, esperamos verte de vuelta pronto.");
} else {
    while (inicio !== "si" && inicio !== "no") {
        alert("Por favor, indícanos si o no");
        inicio = prompt("Por favor, indícanos si o no");
    }

    if (inicio === "si") {
        alert("¡Estos son nuestros psicoterapeutas disponibles:");
        let terapeutas = psicologos.map((terapeuta) => terapeuta.nombre + " - Precio por turno: $" + terapeuta.precioTurno);
        alert(terapeutas.join("\n"));
    } else if (inicio === "no") {
        alert("Gracias por visitarnos. ¡Esperamos verte pronto!");
    }

    while (inicio !== "no") {
        let terapeuta = prompt("Selecciona un psicoterapeuta para agendar un turno");
        let precioTurno = 0;

        // Validamos que el psicoterapeuta seleccionado esté en la lista
        const seleccionValida = psicologos.find((ter) => ter.nombre === terapeuta);

        if (seleccionValida) {
            // Obtenemos el precio del turno del terapeuta seleccionado
            precioTurno = psicologos.find((ter) => ter.nombre === terapeuta).precioTurno;

            let unidades = 1; // Suponemos que el usuario quiere agendar un turno por defecto

            carrito.push({ terapeuta, unidades, precioTurno });
            console.log(carrito);

            let respuesta = prompt("¿Deseas agendar otro turno? (si/no)");

            // Validamos la respuesta
            while (respuesta !== "si" && respuesta !== "no") {
                alert("Por favor, indícanos si o no");
                respuesta = prompt("¿Deseas agendar otro turno? (si/no)");
            }

            inicio = respuesta;
        } else {
            alert("Lo siento, el psicoterapeuta seleccionado no está disponible. Por favor, elige uno de la lista.");
        }
    }

    if (inicio === "no") {
        alert("Estamos agendando tu turno, por favor presiona aceptar.");
        carrito.forEach((item) => {
            console.log(`Psicoterapeuta: ${item.terapeuta}, Turnos: ${item.unidades}, Precio total: $${item.precioTurno}`);
        });

        const total = carrito.reduce((acc, el) => acc + el.precioTurno * el.unidades, 0);
        const precioFinalConIVA = calcularPrecioConIVA(total);
        console.log(`El precio total a pagar con IVA es: $${precioFinalConIVA}`);
        alert(`Hemos procesado tu solicitud de turno. El total a pagar es: $${precioFinalConIVA}. ¡Gracias por elegirnos!`);
    }
}
