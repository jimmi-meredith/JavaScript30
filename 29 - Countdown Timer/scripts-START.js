let countdown
const timerDisplay = document.querySelector('.display__time-left')

const timer = seconds => {
  const now = Date.now()
  const then = now + seconds * 1000
  displayTimeLeft(seconds)
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    if (secondsLeft < 0) {
      clearInterval(countdown)
      return
    }
    displayTimeLeft(secondsLeft)
  }, 1000)
}

const displayTimeLeft = seconds => {
  const minutes = Math.floor(seconds / 60)
  const remainderSeconds = seconds % 60
  const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
  timerDisplay.textContent = display
}
