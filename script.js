let addListBtn = document.getElementById('add-list-btn');
let guestList = document.getElementById('guest-list');

addListBtn.addEventListener('click', function() {
	let newGuestList = document.createElement('ol');
	newGuestList.id = 'guest-list';
	guestList.after(newGuestList);
	guestList = newGuestList;
});
