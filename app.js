const hour = document.querySelector(".hour")
const min = document.querySelector(".min")
const second = document.querySelector(".second")

function setTime() {
  const date = new Date()
  const seconds = date.getSeconds() * 6 + 90
  second.style.transform = `rotate(${seconds}deg)`

  const minute = date.getMinutes() * 6 + 90
  min.style.transform = `rotate(${minute}deg)`

  const hours = (date.getHours() + date.getMinutes() / 60) * 30 + 90
  hour.style.transform = `rotate(${hours}deg)`
}
setInterval(setTime, 1000)
