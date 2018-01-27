// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one()
  two()  
  three()
  makeVisible()
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}



// CREATE FUNCTION two HERE
two = () => {
  var two = document.getElementById('two');

  two.classList.toggle('green');
}

// CREATE FUNCTION three HERE
three = () => {
  var three = document.getElementById('three');

  three.classList.toggle('purple');
}
// CREATE FUNCTION makeVisible HERE
makeVisible = () => {
  var invisibleFour = document.getElementsByClassName('invisible')[0];
  invisibleFour.classList.toggle('visible');
}