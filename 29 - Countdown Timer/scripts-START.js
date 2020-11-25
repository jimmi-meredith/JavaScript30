let countdown

const timer = seconds => {
  const now = Date.now()
  const then = now + seconds * 1000
  displayTimeLeft(seconds)
  countdown = setInterval(() => {
    const secondsLeft = (then - Date.now()) / 1000
    if (secondsLeft < 0) {
      clearInterval(countdown)
    }
    displayTimeLeft(seconds)
  }, 1000)
}

const displayTimeLeft = seconds => {
  const minutes = Math.floor(seconds / 60)
  const remainderSeconds = seconds % 60
  console.log(seconds)
}
