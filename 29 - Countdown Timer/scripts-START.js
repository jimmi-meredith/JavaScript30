let countdown

const timer = seconds => {
  const now = Date.now()
  const then = now + seconds * 1000
  setInterval(() => {
    const secondsLeft = (then - Date.now()) / 1000
    if (secondsLeft <= 0) return
  }, 1000)
}
