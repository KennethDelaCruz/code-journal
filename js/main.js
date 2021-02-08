/* global data */
/* exported data */
var imgInput = document.querySelector('#new-post-img');

function imgPreview(event) {
  var imgPlaceHolder = document.querySelector('img');
  var newImage = event.target.value;

  imgPlaceHolder.setAttribute('src', newImage);
  if (imgPlaceHolder.getAttribute('src') === '') { imgPlaceHolder.setAttribute('src', 'images/placeholder-image-square.jpg'); }
}

imgInput.addEventListener('input', imgPreview);
