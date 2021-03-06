window.addEventListener('load', () => {
  const pad__audio = document.querySelectorAll('.pad__audio')
  const pads__pad = document.querySelectorAll('.pads__pad')
  const bubbles = document.querySelector('.bubbles')
  const colors = [
    'lavender',
    'gold',
    'tomato',
    'palegreen',
    'antiquewhite',
    'yellow',
  ]

  const createBubbles = i => {
    const bubble = document.createElement('div')
    bubbles.appendChild(bubble)
    bubble.style.backgroundColor = colors[i]
    bubble.style.animation = 'jump 1s ease-in-out'
    bubble.addEventListener('animationend', function() {
      bubbles.removeChild(this)
    })
  }

  pads__pad.forEach((pad, i) => {
    pad.addEventListener('click', function() {
      pad__audio[i].currentTime = 0
      pad__audio[i].play()
    })

    createBubbles(i)
  })
})
