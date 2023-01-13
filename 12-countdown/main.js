const timeDays = document.querySelector('.days')
const timeHours = document.querySelector('.hours')
const timeMinutes = document.querySelector('.minutes')
const timeSeconds = document.querySelector('.seconds')

let newDate = new Date(2023, 1, 16, 0);

let inter = setInterval(() => {
    pintarDate(newDate);
}, 1000)

function controlador(dateGiven) {
    let now = new Date()
    let tiempo = (dateGiven - now) / 1000;

    let days = Math.floor(tiempo / (3600 * 24));
    let hours = `0${(Math.floor((tiempo / 3600) % 24))}`.slice(-2);
    let minutes = `0${Math.floor((tiempo / 60) % 60)}`.slice(-2);
    let seconds = `0${Math.floor((tiempo % 60))}`.slice(-2);

    return {
        tiempo,
        days,
        hours,
        minutes,
        seconds
    }
}

function pintarDate(dateGiven) {
    let tiempo = controlador(dateGiven);
    timeDays.innerHTML = tiempo.days;
    timeHours.innerHTML = tiempo.hours;
    timeMinutes.innerHTML = tiempo.minutes;
    timeSeconds.innerHTML = tiempo.seconds;
    if (tiempo.tiempo < 1) {
        clearInterval(inter);
        time.innerHTML = "<p>!El tiempo termino!</p>";
    }
}




