
alert("Bienvenido al generador de turnos. Haga clic en aceptar para continuar.");

let continuar = true;

while (continuar) {
  alert("La consulta de Psicología tiene una duración de 1 hora y un costo de $4,000.");
  
  let nombre = prompt("Ingrese su nombre:");
  let apellido = prompt("Ingrese su apellido:");
  
  alert("Hola " + nombre + " " + apellido + ", a continuación te solicitaremos información adicional para generar el turno.");
  
  let dia = prompt("Ingresa el día de la semana en el que deseas atenderte (lunes a viernes):");
  let horario = prompt("Cuéntanos en qué turno te gustaría ser atendido (mañana o tarde):");
  
  function generadorTurno(nombre, apellido, dia, turno) {
    switch (dia){
                case "lunes":
                    return alert("Estimado"+" "+nombre+" "+ apellido+ " " +"su turno ha sido reservado para el dia"+" " + dia + " "+ "en el turno" + " "+ turno);
                    break;
                case  "martes":
                    return alert("Estimado"+" "+nombre+" "+ apellido+ " " +"su turno ha sido reservado para el dia"+" " + dia + " "+ "en el turno" + " "+ turno);
                    break;
                case "miercoles":
                    return alert("Estimado"+" "+nombre+" "+ apellido+ " " +"su turno ha sido reservado para el dia"+" " + dia + " "+ "en el turno" + " "+ turno);
                    break;
                case " jueves":
                    return alert("Estimado"+" "+nombre+" "+ apellido+ " " +"su turno ha sido reservado para el dia"+" " + dia + " "+ "en el turno" + " "+ turno);
                    break;
                case "viernes":
                    return alert("Estimado"+" "+nombre+" "+ apellido+ " " +"su turno ha sido reservado para el dia"+" " + dia + " "+ "en el turno" + " "+ turno);
                    break;
                default:
                    if (dia !== "lunes" || dia !== "martes" || dia !== "miercoles" || dia !== "jueves" || dia !== "viernes"){
                        alert ("ingrese un dia valido")
                    dia = prompt("ingrese un dia valido ejemplo lunes")
                    break;}}}
  generadorTurno(nombre, apellido, dia, horario);
  
  let comprobante = prompt("¿Enviarás el comprobante de pago al correo electrónico turnos@mipsicologoideal.com.ar? (sí/no)");
  
  if (comprobante == "si") {
    alert("Su turno ha sido agendado. Se verificará el comprobante de pago. ¡Gracias!");
  } else {
    alert("Su turno ha sido reservado, pero puede ser cancelado en cualquier momento. Por favor, genere el comprobante y envíelo al correo electrónico turnos@mipsicologoideal.com.ar para asegurar su turno. ¡Gracias!");
  } break;}
  







