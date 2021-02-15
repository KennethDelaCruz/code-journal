/* global data */
/* exported data */
var imgInput = document.querySelector('#input-image');
var formRoute = document.querySelector('form');
var imgPlaceHolder = document.querySelector('#image-placeholder');
var entriesNav = document.querySelector('#nav-button-entries');
var postButton = document.querySelector('#new-post-button');
var allContainerDiv = document.querySelectorAll('.container');
var formDiv = document.querySelector('#form-container');
var entriesDiv = document.querySelector('#entries');
var postList = document.querySelector('.post-entries');

allContainerDiv.forEach(hideDIV);

function imgPreview(event) {
  var newImage = event.target.value;

  imgPlaceHolder.setAttribute('src', newImage);
  if (imgPlaceHolder.getAttribute('src') === '') {
    imgPlaceHolder.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
}

function submitForm(event) {

  var postInfo = {
    title: formRoute.title.value,
    imageURL: formRoute.img.value,
    notes: formRoute.notes.value,
    entryID: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift(postInfo);
  imgPlaceHolder.setAttribute('src', 'images/placeholder-image-square.jpg');
  data.view = 'entries';
  formDiv.setAttribute('class', 'container hidden');
  entriesDiv.setAttribute('class', 'container');
  postList.prepend(generatePost(postInfo));

  formRoute.reset();
}

imgInput.addEventListener('input', imgPreview);
formRoute.addEventListener('submit', submitForm);

function generatePost(object) {
  var newListItem = document.createElement('li');
  newListItem.setAttribute('data-entry-id', object.entryID);

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

  var iconImg = document.createElement('img');
  iconImg.setAttribute('class', 'edit-icon');
  iconImg.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png');

  divColumnHalf2.appendChild(iconImg);
  divColumnHalf2.appendChild(h2Element);
  divColumnHalf2.appendChild(pElement);
  divColumnHalf1.appendChild(imgElement);
  divRow.appendChild(divColumnHalf1);
  divRow.appendChild(divColumnHalf2);
  newListItem.appendChild(divRow);
  return newListItem;
}

function postLoop(event) {
  var listRoute = document.querySelector('.post-entries');
  var objectEntries = data.entries;
  for (var i = 0; i < objectEntries.length; i++) {
    var newPost = generatePost(objectEntries[i]);
    listRoute.append(newPost);
  }
}

function hideDIV(object) {
  var viewType = object.getAttribute('data-view');
  if (viewType !== data.view) {
    object.setAttribute('class', 'container hidden');
  }

}

function navClick(event) {
  data.view = 'entries';
  allContainerDiv.forEach(hideDIV);
  entriesDiv.setAttribute('class', 'container');

}

function newPostClick(event) {
  data.view = 'entry-form';
  allContainerDiv.forEach(hideDIV);
  formDiv.setAttribute('class', 'container');

}

function test1(event) {
  var eventTarget = event.target.className;

  console.log(eventTarget);
  if (eventTarget === 'edit-icon') {
    var closestListItem = event.target.closest('li');
    var closestTitle = event.target.closest('h2');
    var closestH2 = event.target.closest('h2');
    console.log(closestTitle,closestListItem, closestH2);
  }
}

// this code above is incomplete. this should be finished to complete the third feature

postList.addEventListener('click', test1);
postButton.addEventListener('click', newPostClick);
entriesNav.addEventListener('click', navClick);
document.addEventListener('DOMContentLoaded', postLoop);
