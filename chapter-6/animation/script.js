var show = false;
var animationContainer;
var button;

(function() {
  console.log('loaded');
  animationContainer = document.getElementById('animationContainer');
  button = document.getElementById('button');
}());


function toggleAnimation() {
  if (show) {
    console.log('hide');
    hideContainer();
  } else {
    console.log('show');
    showContainer();
  }
  show = !show;
}

function showContainer() {
  button.innerText = 'Hide';
  animationContainer.classList.add('show');
}

function hideContainer() {
  animationContainer.addEventListener('animationend', cleanup);
  button.innerText = 'Show';
  animationContainer.classList.replace('show', 'close');
}

function cleanup() {
  animationContainer.classList.remove('close');
  animationContainer.removeEventListener('animationend', cleanup);
}