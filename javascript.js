btn=document.querySelector(".switch");
clr=document.querySelector(".main");

function alertFunction() {
    clr.classList.toggle("light-mode");
  }

  btn.addEventListener("click", alertFunction);