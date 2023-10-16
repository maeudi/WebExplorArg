//verificar la fecha
//fecha_vuelta >= fecha_ida

//Datos del formulario
// document.querySelector('form')
//     form[0].addEventListener('submit', e=>{
//     e.preventDefault()
//     const data = Object.fromEntries(
//         new FormData(e.target)
//     )
//     alert(JSON.stringify(data))
//     }
//     )


    // let form = document.getElementById("form");
    // form[0].addEventListener("submit", e) ; {
    //     e.preventDefault()
    // }

    // let datos_personales = document.getElementById("datos_personales");
    // let nombre = document.getElementById("nombre");
    // let apellidos = document.getElementById("apellidos");
    // let celular = document.getElementById("celular");
    // let email = document.getElementById("email");
    // let viajero = document.getElementById("viajero");
    // let guias = document.getElementById("guias");
    // let adultos = document.getElementById("adultos");
    // let children = document.getElementById("children");
    // let presupuesto = document.getElementById("presupuesto");
    // let fecha_ida = document.getElementById("fecha_ida");
    // let fecha_vuelta = document.getElementById("fecha_vuelta");
    // let region_visita = document.getElementById("region_visita");
    // let intereses = document.getElementById("intereses");
    // let comentario = document.getElementById("comentario");
    // let comentario_rellenar = document.getElementById("comentario_rellenar");
    
//    function sendMail() {
//      var link = "mailto:contacto@ExplorArg.com"
//                + "?cc=myCCaddress@example.com"
//                 + "&subject=" + encodeURIComponent("Asunto")
//                + "&body=" + encodeURIComponent(document.getElementById('myText').value)
//          ;
        
//          window.location.href = link;
//   };

function sendMail(){
    var email = "contacto@ExplorArg.com";
    var subject = "asunto";
    var msgBody = "Gracias por enviarnos un mail, nos pondremos en contacto en cuanto sea posible.";
    window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
  }