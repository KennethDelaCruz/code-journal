/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};
var allContainerDiv = document.querySelectorAll('.container');
var previousData = localStorage.getItem('data-model');

if (previousData !== null) {
  data = JSON.parse(previousData);
  allContainerDiv.forEach(hideDIV);
}

function hideDIV(object) {
  var viewType = object.getAttribute('data-view');
  if (viewType !== data.view) {
    object.setAttribute('class', 'container hidden');
  }
}

function saveLocal(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data-model', dataJSON);
}

window.addEventListener('beforeunload', saveLocal);
