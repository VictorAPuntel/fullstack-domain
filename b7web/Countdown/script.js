function updateTimer() {
  const endDate = new Date(2026, 11, 31, 23, 59, 59)
  let actualDate = new Date()

  let difference = endDate.getTime() - actualDate.getTime()

  let oneSecond = 1000
  let oneMinute = oneSecond * 60
  let oneHour = oneMinute * 60
  let oneDay = oneHour * 24

  let days = Math.floor(difference / oneDay)
  let hours = Math.floor((difference % oneDay) / oneHour)
  let minutes = Math.floor((difference % oneHour) / oneMinute)
  let seconds = Math.floor((difference % oneMinute) / oneSecond)

  document.querySelector('#cd-day').textContent = days > 0 ? days : 0
  document.querySelector('#cd-hour').textContent = hours > 0 ? hours : 0
  document.querySelector('#cd-min').textContent = minutes > 0 ? minutes : 0
  document.querySelector('#cd-sec').textContent = seconds > 0 ? seconds : 0
}

setInterval(updateTimer, 1000)
