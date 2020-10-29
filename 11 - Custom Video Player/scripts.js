const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('player__slider')

const togglePlay = () => {
  const method = video.paused ? 'play' : 'pause'
  video[method]()
}

const updateButton = event => {
  const icon = event.target.paused ? '►' : '❚ ❚'
  toggle.textContent = icon
}

const skip = event => {
  video.currentTime += Number(event.target.dataset.skip)
}

const handleRangeUpdate = event => {
  video[event.target.name] = event.target.value
}

const handleProgress = () => {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

const scrub = event => {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)
progress.addEventListener('click', scrub)

skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))
