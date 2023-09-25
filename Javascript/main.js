alert("Bienvenido al generador de turnos para continuar haga click en aceptar")
alert("La consulta Psicologia tiene una duración de 1 hora, para reservar su turno sera necesario completar el siguiente formulario y abonar la mitad del honario la consulta tiene un costo de:$4.000")

let nombre = prompt("Ingrese Su Nombre ")

let apellido = prompt( "Ingrese Su Apellido ")

alert("Hola"+" "+ nombre + " "+apellido + " " +"a continuación te solicitaremos informacion adicional para generar el turno")

let dia = prompt ("ingresa el dia de la semana de lunes a viernes en que deseas atenderte")

let horario = prompt ("cuentanos en que turno te gustaria ser atendido: mañana o tarde")

 function generadorTurno (nombre,apellido,dia,turno){
    switch (dia){
        case "lunes":
            return alert("Estimado"+" "+nombre+" "+ apellido+ " " +"su turno ha sido reservado para el dia"+" " + dia + " "+ "en el turno" + " "+ turno);
            break;
        case  "martes":
            return alert("Estimado"+" "+nombre+" "+ apellido+ " " +"su turno ha sido reservado para el dia"+" " + dia + " "+ "en el turno" + " "+ turno);
        case "miercoles":
            return alert("Estimado"+" "+nombre+" "+ apellido+ " " +"su turno ha sido reservado para el dia"+" " + dia + " "+ "en el turno" + " "+ turno);
        case " jueves":
            return alert("Estimado"+" "+nombre+" "+ apellido+ " " +"su turno ha sido reservado para el dia"+" " + dia + " "+ "en el turno" + " "+ turno);
        case "viernes":
            return alert("Estimado"+" "+nombre+" "+ apellido+ " " +"su turno ha sido reservado para el dia"+" " + dia + " "+ "en el turno" + " "+ turno);
        default:
            if (dia !== "lunes" || dia !== "martes" || dia !== "miercoles" || dia !== "jueves" || dia !== "viernes"){
                alert ("ingrese un dia valido")
            dia = prompt("ingrese un dia valido ejemplo lunes")
            break;}
          

    }
    
}   
 
generadorTurno(nombre,apellido,dia,horario);
 
alert ("Para continuar con la reserva debera ingresar el comprobante de pago")
let comprobante = prompt("¿Envio el comprobante al email turnos@mipsicologoideal.com.ar? ")

if (comprobante === "si"){
    
alert("Su turno ha sido agendado en el transcurso del dia se verificara y ante cualquier incoveniente nos estaremos comunicando Muchas gracias");
}else{
    alert( "Su turno ha sido reservado pero puede ser cancelado en cualquier momento por favor genere el comprobante y envielo al email: turnos@mipsicologoideal.com.ar para asegurar su turno Muchas gracias");
}


 







