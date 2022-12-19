var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList;
var buttonList;
var hrList;

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
	var btn = document.createElement("img");
	btn.src = "Bin.png";
	btn.classList.add("delete");
	btn.classList.add("right");
	loadButtonElements();
	return btn;
}

function createHr() {
	var hr = document.createElement("hr");
	loadHrElements;
	ul.appendChild(hr);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createHr();
		createDivSection();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createHr();
		createDivSection();
	}
}

function deleteItem(event) {
	var item = event.target;
	var num;

	for (var i=0; i < buttonList.length; i++) {
		if (buttonList[i] == item) {
			num = i;
			break;
		}
	}

	ul.removeChild(item.parentElement);
	ul.removeChild(hrList[num]);
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

function loadHrElements() {
	hrList = document.getElementsByTagName("hr");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

loadListElements();

loadButtonElements();

loadHrElements();