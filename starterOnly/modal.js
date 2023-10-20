// DOM Elements
let modalbg = document.querySelector(".bground");
let modalBtn = document.querySelectorAll(".btn-signup");
let formData = document.querySelectorAll(".formData");
let closeCross = document.querySelectorAll(".close");
let closeBtn = document.querySelector(".btn-close")
let content = document.getElementById("modalContent")
let validationContent = document.querySelector(".validation")

// responsive var
let width800 = window.matchMedia("(max-width: 800px)")
let width420 = window.matchMedia("(min-width: 420px)")

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click",launchModal))

// launch modal function

function launchModal() {
  modalbg.style.display = "block";
}

//close modal events

closeCross.forEach((btn) => btn.addEventListener("click",()=>{

    if(validationContent.style.display === "flex") {
      validationContent.classList.replace("validation", "validation-r")
      modalbg.style.background = "transparent"
      setTimeout (closeModal, 400)
    }
    else {
      content.classList.replace("content", "reverse")
      modalbg.style.background = "transparent"
      setTimeout (closeModal, 400)   
    }
}))

closeBtn.addEventListener("click", () => {

  validationContent.classList.replace("validation", "validation-r")
  modalbg.style.background = "transparent"
  setTimeout (closeModal, 400)

})

modalbg.addEventListener("click", (event) => {

  if (event.target === modalbg) { 
    if(validationContent.style.display === "flex") {
      validationContent.classList.replace("validation", "validation-r")
      modalbg.style.background = "transparent"
      setTimeout (closeModal, 400)
    }
    else {
      content.classList.replace("content", "reverse")
      modalbg.style.background = "transparent"
      setTimeout (closeModal, 400)
    }
    
  }

})

// close modal function

function closeModal() {
  if(validationContent.style.display === "flex"){
    modalbg.style.display ="none"
    validationContent.classList.replace("validation-r", "validation")
    modalbg.style.background = "rgba(26, 39, 156, 0.4)"
  }
  else { 
    modalbg.style.display ="none"
    content.classList.replace("reverse", "content")
    modalbg.style.background = "rgba(26, 39, 156, 0.4)"
  }
 
}

