var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList;
var buttonList;

function inputLength() {
	return input.value.length;
}

function createDivSection() {
	var div = document.createElement("div");
	var li = createListElement();
	var btn = createButtonElement();

	div.classList.add("todo");
	
	div.appendChild(li);
	div.appendChild(btn);
	ul.appendChild(div);
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	loadListElements();
	return li;
}

function createButtonElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.classList.add("delete");
	loadButtonElements();
	return btn;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createDivSection();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createDivSection();
	}
}

function deleteItem(event) {
	var item = event.target;

	ul.removeChild(item.parentElement);
}

function toggleDone(event) {
	event.target.classList.toggle("done");
}

function loadListElements() {
	liList = document.getElementsByTagName("li");

	for (var i=0; i < liList.length; i++) {
		liList[i].addEventListener("click", toggleDone);
	}
}

function loadButtonElements() {
	buttonList = document.getElementsByClassName("delete");

	for (var i=0; i < buttonList.length; i++) {
		buttonList[i].addEventListener("click", deleteItem);
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

loadListElements();

loadButtonElements();