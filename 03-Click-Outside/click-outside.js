const btnLearnMore = document.querySelectorAll("button")
const modalOuter = document.querySelector(".modal-outer")
const modalInner = document.querySelector(".modal-inner")


btnLearnMore.forEach(btn => {
    btn.addEventListener("click", handleClickBtn)
})

function handleClickBtn(e) {
    let btn = e.currentTarget;
    let card = btn.closest(".card")
    console.log(card);
    showModal(card)

}

function showModal(card) {
    const img = card.querySelector("img")
    const description = card.dataset.description
    const title = card.querySelector("h2")
    modalInner.innerHTML = `
<img src="${img.src.replace("200", "400")}">
<h2>${title.textContent}</h2>
<p>${description}</p>
`
    modalOuter.classList.add("open")
}


function closeModal() {
    modalOuter.classList.remove("open")
}

// Prevent from click to propagate the child(modal-inner)
modalInner.addEventListener("click",(event)=> {
    event.stopPropagation()
})

modalOuter.addEventListener("click",closeModal)
window.addEventListener("keydown",ev => {
    if (ev.key === "Escape") {
        closeModal()
    }
})