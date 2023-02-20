const list = document.getElementById('list');
const addBtn = document.getElementById('add-item-btn');
const newListBtn = document.getElementById('new-list-btn');
const deleteListBtn = document.getElementById('delete-list-btn');
const savePdfBtn = document.getElementById('save-pdf-btn');
const listTitleInput = document.getElementById('list-title');

// Load list from local storage if it exists
if (localStorage.getItem('listItems')) {
  list.innerHTML = localStorage.getItem('listItems');
}

// Save list to local storage
function saveList() {
  localStorage.setItem('listItems', list.innerHTML);
}

// Add item to list
function addItem() {
  const item = document.createElement('li');
  item.contentEditable = true;
  item.innerHTML = 'عنصر جديد';
  list.appendChild(item
