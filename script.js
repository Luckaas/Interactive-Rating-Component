const mainContainer = document.querySelector(".card1")
const thanksContainer = document.querySelector(".card2")
const btnSubmit = document.getElementById("submit")
const btnReturn = document.getElementById("return")
const btnRate = document.getElementById("returnValue")

btnSubmit.addEventListener("click", () => {
    mainContainer.style.display = "none"
    thanksContainer.classList.remove("hidden")

    let radios = document.getElementsByName("radios")
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            const value = radios[i].value
            document.getElementById("rating").innerHTML = value
        }
    }
})

btnReturn.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "block"
})

