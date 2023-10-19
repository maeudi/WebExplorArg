//Enviar Formulario
function sendMail(){
    var email = "contacto@ExplorArg.com";
    var subject = "Asunto -Guia de Viaje";
    var msgBody = "Gracias por enviarnos un mail, nos pondremos en contacto en cuanto sea posible.";
    window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
  }

//Limpiar Formulario
  document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('form');
    formulario.addEventListener('submit', function() {
    formulario.reset();
    });
    });

//Validar Fechas
var f1
var f2
if(f1 < f2){
  console.log("Fecha Correcta");
}

if (f1 == f2){
  console.log("Son la misma fecha");
}

if(f1 > f2){
  console.log("Fecha Incorrecta");
  window.MessageEvent("La fecha de vuelta no puede ser anterior")
}
//Links de lista select
function destino() {
  var url = document.regiones.region.options[document.regiones.region.selectedIndex].value
  if (url != "...") {
    window.location = url;
  }
}
