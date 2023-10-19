// DOM Elements
let modalbg = document.querySelector(".bground");
let modalBtn = document.querySelectorAll(".btn-signup");
let formData = document.querySelectorAll(".formData");
let closeBtn1 = document.getElementById("closeFormCross");
let closeBtn2 = document.getElementById("closeValidationCross");
let content = document.getElementById("modalContent")

// responsive var
let width800 = window.matchMedia("(max-width: 800px)")
let width420 = window.matchMedia("(min-width: 420px)")
// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click",launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close validation modal
let closeV = document.querySelector(".btn-close")

function closeValidation(){

  modalbg.style.display ="none"
  modalbg.style.background = "rgba(26, 39, 156, 0.4)"
  content.classList.replace("validation-r", "validation")

}

closeV.addEventListener("click", () => {

  validation.classList.replace("validation", "validation-r")
  modalbg.style.background = "transparent"
  setTimeout (closeValidation, 400)

})

closeBtn2.addEventListener("click", () => {

  validation.classList.replace("validation", "validation-r")
  modalbg.style.background = "transparent"
  setTimeout (closeValidation, 400)

}) 
// close modal form

function closeModal() {
  
  modalbg.style.display ="none"
  if (width800.matches){
    content.classList.replace("reverse-resp", "content")
    modalbg.style.background = "transparent"

  }
  else {
    modalbg.style.background = "rgba(26, 39, 156, 0.4)"
    content.classList.replace("reverse", "content")
   }
 

}



// close modal event - button


closeBtn1.addEventListener("click", () => {

  if(width800.matches) {
    content.classList.replace("content", "reverse-resp")
  }

  content.classList.replace("content", "reverse")
  modalbg.style.background = "transparent"
  setTimeout (closeModal, 400)

})

// close modal event - outside click

modalbg.addEventListener("click", (event) => {

  if (event.target === modalbg) { 

    if(width800.matches) {
      content.classList.replace("content", "reverse-resp")
    }
    content.classList.replace("content", "reverse")
    modalbg.style.background = "transparent"
    setTimeout (closeModal, 400)
  }

})