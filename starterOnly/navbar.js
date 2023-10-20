// Navbar responsive display

// DOM Elements

var x = document.getElementById("myTopnav");
var xx = document.getElementById("icon")
var xxx = document.getElementById("icon-link")
var main = document.querySelector("main")

// Nav function

function editNav() {
  
  if (x.className === "main-navbar") {
    x.className += " responsive";
    xx.style.color="white"
    xxx.style.background="rgb(255, 0, 27)"

  } else {
    x.className = "main-navbar";
    xx.style.color="rgb(255, 0, 27)"
    xxx.style.background="white"
  }
}

// Close navbar on click beside

main.addEventListener("click", (event) => {

  if(event.target!==x && x.className === "main-navbar responsive"){
    x.className = "main-navbar";
  xx.style.color="rgb(255, 0, 27)"
  xxx.style.background="white"
  }
  
})