let soundeffect = new Audio('sound/growl.mp3')

document.addEventListener("click", () => {
    soundeffect.cloneNode().play()
})

