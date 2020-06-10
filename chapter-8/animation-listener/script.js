var image, button;

(function() {
  'use strict';
  console.log('loaded');

  image = document.getElementById('image');
  image.addEventListener('animationend', reEnableButton);

  button = document.getElementById('button');
})();

function reEnableButton() {
  button.disabled = false;
  image.classList.remove('rotate');
}

function rotateImage() {
  image.classList.add('rotate');
  button.disabled = true;
}