/* global data */
/* exported data */
var imgInput = document.querySelector('#input-image');
var formRoute = document.querySelector('form');
var imgPlaceHolder = document.querySelector('img');

function imgPreview(event) {
  var imgPlaceHolder = document.querySelector('img');
  var newImage = event.target.value;

  imgPlaceHolder.setAttribute('src', newImage);
  if (imgPlaceHolder.getAttribute('src') === '') {
    imgPlaceHolder.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
}

function submitForm(event) {
  event.preventDefault();
  var postInfo = {
    title: formRoute.title.value,
    imageURL: formRoute.img.value,
    notes: formRoute.notes.value,
    entryID: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift(postInfo);
  imgPlaceHolder.setAttribute('src', 'images/placeholder-image-square.jpg');
  formRoute.reset();
}

imgInput.addEventListener('input', imgPreview);
formRoute.addEventListener('submit', submitForm);
