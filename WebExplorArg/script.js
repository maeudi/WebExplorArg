var adultos = Number.MIN_VALUE=0
var children = Number.MIN_VALUE=0

//verificar la fecha
//fecha_vuelta >= fecha_ida

//Datos del formulario
document.querySelector('form')
    form[0].addEventListener('submit', e=>{
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    alert(JSON.stringify(data))
    }
    )