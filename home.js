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

function hide() {
  var a = document.getElementById('dis');
  var b = document.getElementById('name');
  if (b.innerHTML = 'I am 14 years old'){
    b.innerHTML = 'Haard Majmudar';
  }
  if (a.innerHTML = 'I live in India. And I am learning Python, C/C++, HTML/CSS and Javascript') {
    a.innerHTML = 'Student and Aspiring Programmer';
  }
  
}
function about() {
  var a = document.getElementById('name');
  var b = document.getElementById('dis');
  
  a.innerHTML = 'I am 14 years old';
  b.innerHTML = 'I live in India. And I am learning Python, C/C++, HTML/CSS and Javascript';
  
}