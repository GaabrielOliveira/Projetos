const horas = document.querySelector("#horas")
const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")

const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let seg = dateToday.getSeconds()

    if(hr < 10) hr = '0' + hr

    if(min < 10) min = '0' + min

    if(seg < 10) seg = '0' + seg

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
    
    let body = document.body;

    if (hr >= 6 && hr < 12) {
        // Manhã
        body.className = 'morning';
    } else if (hr >= 12 && hr < 18) {
        // Tarde
        body.className = 'afternoon';
    } else {
        // Noite
        body.className = 'night';
    }
})
