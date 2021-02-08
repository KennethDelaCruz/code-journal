/* global data */
/* exported data */
var imgInput = document.querySelector('#new-post-img');

function imgPreview(event) {
  var imgPlaceHolder = document.querySelector('img');
  imgPlaceHolder.setAttribute('src');
}

imgInput.addEventListener('input', imgPreview);
