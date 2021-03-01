const whitekeys = document.querySelectorAll(".whitekey")
const C3 = document.getElementById("C3")



C3.addEventListener("mouseover",(e)=>{
    console.log(e)
    C3.classList.add("white-hover")
})

function removeTransition(e){
    console.log(e)
}

whitekeys.forEach(key=>key.addEventListener("transitionend",removeTransition(e)
))