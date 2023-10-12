// Navbar responsive display

function editNav() {
    var x = document.getElementById("myTopnav");
    var xx = document.getElementById("icon")
    var xxx = document.getElementById("icon-link")
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