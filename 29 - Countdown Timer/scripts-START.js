let countdown

const timer = seconds => {
  const now = Date.now()
  const then = now + seconds * 1000
  countdown = setInterval(() => {
    const secondsLeft = (then - Date.now()) / 1000
    if (secondsLeft < 0) {
      clearInterval(countdown)
    }
  }, 1000)
}
