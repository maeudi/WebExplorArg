//Enviar Formulario
function sendMail(){
    var email = "contacto@ExplorArg.com";
    var subject = "Asunto -Guia de Viaje";
    var msgBody = "Gracias por enviarnos un mail, nos pondremos en contacto en cuanto sea posible.";
    window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
    input.addEventListener("keypress", function(event) {
      if (event.key === "Enviar") {
        event.preventDefault();
        document.getElementById("enviar").click();
      }
    });
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
//Lista "Viaja con nosotros"
//Abrir la lista
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Cerrar la lista
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
