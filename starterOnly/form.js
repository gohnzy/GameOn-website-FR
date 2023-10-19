// DOM Elements
/// Form inputs
let first = document.getElementById("first")
let last = document.getElementById("last")
let email = document.getElementById("email")
let birthdate = document.getElementById("birthdate")
let nbTournaments = document.getElementById("quantity")
let locations = document.querySelectorAll("#locations input")
let conditions = document.getElementById("checkbox1")
let newsletter = document.getElementById("checkbox2")
let btnSubmit = document.getElementById("submitForm")
///Form divs
let formFirst = document.getElementById("formFirst")
let formLast = document.getElementById("formLast")
let formEmail = document.getElementById("formEmail")
let formBirthdate = document.getElementById("formBirthdate")
let formTournaments = document.getElementById("formTournaments")
let formLocation = document.getElementById("locations")
let formConditions = document.getElementById("formConditions")
// Gather location function

function itLocation() {
  let x = null
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      x = locations[i].value
    }
  }
  return x
}

// RegExp
  let textRegExp = new RegExp("^[a-zA-Z-' ]+$")
  let mailRegExp = new RegExp("^[a-z0-9.-_]+@[a-z0-9.-_]+\\.[a-z0-9.-_]+")
function calcAge () {
  let age = 0

  let date = new Date()

  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()

  let birthday = new Date(birthdate.value)

  let dDay = birthday.getDate()
  let birthMonth = birthday.getMonth()
  let birthYear = birthday.getFullYear()

  if (birthMonth > month) {

    age =  (year - birthYear) - 1
    
  }

  if (birthMonth === month) {

    if (dDay <= day) {

      age =  (year - birthYear)

    }

    if (dDay > day) {
      age =  (year - birthYear) - 1
    }
    
  }

  if (birthMonth < month) {
    age =  (year - birthYear)
  }

  return age
}
// Validate function
function validate() {
  let validate = true
  if(first.value.length < 2 || !textRegExp.test(first.value)) {
    formFirst.setAttribute("data-error-visible", "true")
    validate = false
  }
  else { formFirst.setAttribute("data-error-visible", "false") 
  }  
  if(last.value.length < 2 || !textRegExp.test(last.value)) {
    formLast.setAttribute("data-error-visible", "true")
    validate = false

  }
  else { formLast.setAttribute("data-error-visible", "false") 
  }  
  if (!mailRegExp.test(email.value)) {
    formEmail.setAttribute("data-error-visible", "true")
    validate = false

  }
  else { formEmail.setAttribute("data-error-visible", "false") 
  }  
  if (birthdate.value.length !== 10) {
    formBirthdate.setAttribute("data-error-visible", "true")
    validate = false
    
  }
  else { 
    if (calcAge() < 16 || calcAge() >= 76) {
      formBirthdate.setAttribute("data-error-visible", "true")
      formBirthdate.setAttribute("data-error", "Vous devez avoir plus de 16 ans et moins de 76 ans")
      validate = false
    }
    else { formBirthdate.setAttribute("data-error-visible", "false") }
  }
  if (nbTournaments.value.length === 0) {
    formTournaments.setAttribute("data-error-visible", "true")
    validate = false
  }
  else { formTournaments.setAttribute("data-error-visible", "false") 
  }
  if(itLocation() === null){
    formLocation.setAttribute("data-error-visible", "true")
    validate = false
    if(locations.checked) {
      formLocation.setAttribute("data-error-visible", "false")
    }
    else {
      formLocation.setAttribute("data-error-visible", "true")
    }
  }
  else { formLocation.setAttribute("data-error-visible", "false") }
  if (!conditions.checked) {
    formConditions.setAttribute("data-error-visible", "true")
    validate = false
  }
  else { formConditions.setAttribute("data-error-visible", "false") 
  }

  return validate

}

function validateLive() {
  let validate = true
  formFirst.addEventListener("input",()=>{

    if(first.value.length < 2 || !textRegExp.test(first.value)) {
      formFirst.setAttribute("data-error-visible", "true")
      validate = false
    }
    else { formFirst.setAttribute("data-error-visible", "false") 
    }  

  })
  formLast.addEventListener("input",()=>{
  if(last.value.length < 2 || !textRegExp.test(last.value)) {
    formLast.setAttribute("data-error-visible", "true")
    validate = false

  }
  else { formLast.setAttribute("data-error-visible", "false") 
  }  
})
formEmail.addEventListener("input",()=>{
  if (!mailRegExp.test(email.value)) {
    formEmail.setAttribute("data-error-visible", "true")
    validate = false

  }
  else { formEmail.setAttribute("data-error-visible", "false") 
  }  
})
formBirthdate.addEventListener("input",()=>{
  if (birthdate.value.length !== 10) {
    formBirthdate.setAttribute("data-error-visible", "true")
    validate = false
    
  }
  else { 
    if (calcAge() < 16 || calcAge() >= 76) {
      formBirthdate.setAttribute("data-error-visible", "true")
      formBirthdate.setAttribute("data-error", "Vous devez avoir plus de 16 ans et moins de 76 ans")
      validate = false
    }
    else { formBirthdate.setAttribute("data-error-visible", "false") }
  }  
})
  formTournaments.addEventListener("input",()=>{
  if (nbTournaments.value.length === 0) {
    formTournaments.setAttribute("data-error-visible", "true")
    validate = false

  }
  else { formTournaments.setAttribute("data-error-visible", "false") 
    }
  })
    formLocation.addEventListener("input",()=>{
  if(itLocation() === null){
    formLocation.setAttribute("data-error-visible", "true")
    validate = false
    if(locations.checked) {
      formLocation.setAttribute("data-error-visible", "false")
    }
    else {
      formLocation.setAttribute("data-error-visible", "true")
    }
  }
  else { formLocation.setAttribute("data-error-visible", "false") }
})
  formConditions.addEventListener("input",()=>{
  if (!conditions.checked) {
    formConditions.setAttribute("data-error-visible", "true")
    validate = false
  }
  else { formConditions.setAttribute("data-error-visible", "false") 
  }
  })
  return validate

}
validateLive()

let form = document.querySelector("form")

// Submit event

form.addEventListener("submit", (event) => {
  if (!validate() || !validateLive()) {
    event.preventDefault()
    
  } 
  else {
    event.preventDefault()
    console.log(first.value, last.value, email.value, birthdate.value,nbTournaments.value,itLocation(),conditions.checked)
  }
})