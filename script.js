var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

button.addEventListener('click', onClick);
input.addEventListener('keypress', addElement);

liEvent();
buttonListElement();

function checkInputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement('li');
	var button = document.createElement('button');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild('li');
	li.appendChild(button);
	button.innerHTML = "delete";
	input.value = '';

	liEvent();
	buttonListElement();
}

function onClick() {
	if (checkInputLength() > 0) {
		createListElement();
	}
}

function addElement() {
	if (checkInputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function liEvent() {
	for (i = 0; i < li.length; i++) {
		li[i].addEventListener('click', changeClass);
	}
}

function changeClass() {
	this.classList.toggle('done');
}

function buttonListElement() {
	var button = document.querySelectorAll('li button');
	for (i = 0; i < button.length; i++) {
		button[i].addEventListener('click', clearElement);
	}
}

function clearElement() {
	for (i = 0; i < li.length; i++) {
		this.parentNode.remove();
	}
}

// 	function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var btn = document.createElement("button");
// 	btn.appendChild(document.createTextNode("Delete"));
// 	btn.onclick = removeParent;

// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	li.innerHTML = li.innerHTML + "";
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);

// ul.onclick=function(event) {
// 	var target = event.target;
// 	target.classList.toggle("done");
// }

// function listLength() {
// 	return listItems.length;
// }

// function deleteButton() {
// 	var btn = document.createElement("button");
// 	btn.appendChild(document.createTextNode("Delete!"));
// 	listItems[i].appendChild(btn);
// 	btn.onclick=removeParent;
// }

// for (i = 0; i < listLength; i++) {
// 	deleteButton();
// }

// function removeParent(event) {
// 	event.target.parentNode.remove();
// }