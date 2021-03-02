const whitekeys = document.querySelectorAll(".white-key")
const blackkeys = document.querySelectorAll(".black-key")

function removeTransition (e) {
    console.log(e.propertyName)
    if (e.propertyName!=="background-color") return;
    this.classList.remove("playing")
}

function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e.code}"]`)
    const key = document.querySelector(`div[data-key="${e.code}"]`)
    if (!audio) return;

    //rewind to start
    audio.currentTime = 0
    audio.play()

    key.classList.add("playing")

}

window.addEventListener('keydown', playAudio)

whitekeys.forEach(key=> key.addEventListener('transitionend', removeTransition))
blackkeys.forEach(key=> key.addEventListener('transitionend', removeTransition))