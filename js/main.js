/* global data */
/* exported data */
var imgInput = document.querySelector('#input-image');
var formRoute = document.querySelector('form');
var imgPlaceHolder = document.querySelector('#image-placeholder');

function imgPreview(event) {
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
  data.entries.push(postInfo);
  imgPlaceHolder.setAttribute('src', 'images/placeholder-image-square.jpg');
  formRoute.reset();
}

imgInput.addEventListener('input', imgPreview);
formRoute.addEventListener('submit', submitForm);

function generatePost(object) {
  var newListItem = document.createElement('li');

  var divRow = document.createElement('div');
  divRow.setAttribute('class', 'row');

  var divColumnHalf1 = document.createElement('div');
  divColumnHalf1.setAttribute('class', 'column-half');

  var divColumnHalf2 = document.createElement('div');
  divColumnHalf2.setAttribute('class', 'column-half');

  var imgElement = document.createElement('img');
  imgElement.setAttribute('src', object.imageURL);

  var h2Element = document.createElement('h2');
  h2Element.setAttribute('class', 'post-title');
  h2Element.textContent = object.title;

  var pElement = document.createElement('p');
  pElement.textContent = object.notes;

  divColumnHalf2.appendChild(h2Element);
  divColumnHalf2.appendChild(pElement);
  divColumnHalf1.appendChild(imgElement);
  divRow.appendChild(divColumnHalf1);
  divRow.appendChild(divColumnHalf2);
  newListItem.appendChild(divRow);
  return newListItem;
}

function postLoop(event) {
  var listRoute = document.querySelector('ul');
  var objectEntries = data.entries;
  for (var i = 0; i < objectEntries.length; i++) {
    var newPost = generatePost(objectEntries[i]);
    listRoute.prepend(newPost);
  }

}

document.addEventListener('DOMContentLoaded', postLoop);
