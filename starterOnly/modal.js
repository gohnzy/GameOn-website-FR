// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".btn-signup");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close")
const content = document.getElementById("modalContent")
const respBr = document.querySelector(".responsive-br")

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click",launchModal))


// close modal event - button


closeBtn.addEventListener("click", () => {

  content.classList.replace("content", "reverse")
  modalbg.style.background = "transparent"
  setTimeout (closeModal, 400)

})

// close modal event - outside click

modalbg.addEventListener("click", (event) => {

  if (event.target === modalbg) { 

    content.classList.replace("content", "reverse")
    modalbg.style.background = "transparent"
    setTimeout (closeModal, 400)
  }

})

// Remove <br> for responsive

let width800 = window.matchMedia("(max-width: 800px)")
function removeBr(width800) {
  if (width800.matches) {
    respBr.classList.add("remove-br")
  }
}
removeBr(width800)

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form

function closeModal() {
  
  modalbg.style.display ="none"
  if (width800.matches)
  modalbg.style.background = "rgba(26, 39, 156, 0.4)"
  content.classList.replace("reverse", "content")

}

