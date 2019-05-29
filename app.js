//First let's connect our app
const appDiv = document.getElementById('app');

// This function creates a new task.
function newTask() {
  var item = document.getElementById('input').value;
  var ul = document.getElementById('tasks');
  var li = document.createElement('li');

  // Now using the li and item variable, we're going create
  // a new textNode with appendChild
  li.appendChild(document.createTextNode(item));

  // We then add item variable value to li
  ul.appendChild(li);
  document.getElementById('input').value = "";
  // Upon clicking the li, we remove it using a removeItem function
  li.onclick = removeItem;
};

// This function runs the newTask function when key 13(enter)
// is pressed.
document.body.onkeyup = function (e) {
  if (e.keyCode == 13) {
    newTask()
  };
};

// This function removes the task when clicked.
function removeItem(e) {
  e.target.parentElement.removeChild(e.target);
};

var d = new Date();
document.getElementById('date').innerHTML = d;
