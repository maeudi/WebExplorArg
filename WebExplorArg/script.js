//Enviar Formulario
function sendMail(){
    var email = "contacto@ExplorArg.com";
    var subject = "asunto";
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
var f1= fecha_ida (Date)
var f2 = fecha_vuelta (Date)
if(f1 < f2){
  console.log("Fecha Correcta");
}
if(f1 > f2){
  console.log("Fecha Incorrecta");
  window.MessageEvent("La fecha de vuelta no puede ser menor")
}
