function myFunction(x) {
  if (x.matches) { // If media query matches
    console.log('  ');
  } 
  else {
    var thingToRemove = document.querySelectorAll(".drop")[0];

    thingToRemove.parentNode.removeChild(thingToRemove);
  }
}
x = window.matchMedia("(max-width: 550px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)

  
$(document).ready(() => {
  $('.down').on('click', () => {
      $('.drop').css('display', 'block');
  });
  $('.center').on('click', () => {
      $('.drop').css('display', 'none')
  });
});

var button = document.getElementById("btn");
button.innerHTML = 'Light mode';
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
button.setAttribute('onclick', 'swapStyle("light.css")');

function swapStyle(sheet){
  document.getElementById('MyLink').setAttribute('href', sheet);
  
  if (sheet === "light.css"){
      button.innerHTML = 'Dark mode';
      button.setAttribute('onclick', 'swapStyle("style.css")');
      
  }
  else if (sheet == "style.css"){
      button.innerHTML = 'Light mode';
      button.setAttribute('onclick', 'swapStyle("light.css")');
      
  }
  
}
function h1_h2() {
  //Change the innerHTMl of the h1 and the h2 tag when about is
  //clicked
}