function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelector(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close")
const content = document.getElementById("modalContent")
const respBr = document.querySelector(".responsive-br")

// launch modal event

modalBtn.addEventListener("click", () => {

  launchModal()

})

// close modal event


closeBtn.addEventListener("click", () => {

  content.classList.replace("content", "reverse")
  modalbg.style.background = "transparent"
  setTimeout (closeModal, 400)

})

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form

function closeModal() {
  
  modalbg.style.display ="none"
  modalbg.style.background = "rgba(26, 39, 156, 0.4)"
  content.classList.replace("reverse", "content")

}

// remove <br> for mobile view

let width800 = window.matchMedia("(max-width: 800px)")

function removeBr(width800) {

  if (width800.matches) {

    respBr.classList.add("remove-br")

  }

}

removeBr(width800)