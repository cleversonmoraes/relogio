const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')


setInterval(() => {
    const atualDate = new Date()

    let hr = atualDate.getHours()
    let min = atualDate.getMinutes()
    let sec = atualDate.getSeconds()

    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (sec < 10) sec = '0' + sec

    hours.textContent = hr
    minutes.textContent = min
    seconds.textContent = sec
})