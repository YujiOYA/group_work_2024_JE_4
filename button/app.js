const submitButton = document.querySelector(".submit-button")
submitButton.addEventListener("click",onClickSubmitButton)
function onClickSubmitButton(e) {
    e.preventDefault()
    submitButton.classList.remove("is-appearing")
    submitButton.classList.add("is-pressed")
    clearInterval(intervalId)
}

const intervalId = setInterval(function(){
    submitButton.classList.toggle("is-appearing")
},1500)