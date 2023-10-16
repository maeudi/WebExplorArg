

function sendMail(){
    var email = "contacto@ExplorArg.com";
    var subject = "asunto";
    var msgBody = "Gracias por enviarnos un mail, nos pondremos en contacto en cuanto sea posible.";
    window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
  }
