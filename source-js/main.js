/* Homework 5: Task */

var myListTask = [];

if ( localStorage.getItem('todoTaskList') != undefined ){

  myListTask = JSON.parse(localStorage.getItem('todoTaskList') );

  var lengthmyListTask = myListTask.length;

  for (var key = 0; key < lengthmyListTask; key++) {
    writeTaskListLocalStorage();
  }

}

var whatsupktaskWriteB = document.getElementById('taskWriteButton');

whatsupktaskWriteB.onclick = function() {

  var text = document.getElementById('task__write-input').value;//gets the value from the input field

  var itemObjectTask = {};//creates a temporary object for temporary storage of data

  itemObjectTask.itemTask = text;//inserts the received text from the input field into a temporary object

  itemObjectTask.itemStatus = false;//inserts the initial false status into a temporary object

  myListTask[myListTask.length] = itemObjectTask;

  console.log(myListTask);

  writeTaskList();//suppresses the function of generating a list item and writing them to a list

  localStorage.setItem('todoTaskList', JSON.stringify(myListTask));//write these files in myListTask in localStorage under the todoTaskList hub before converting data to a string.

};

/* write function to task list */

function writeTaskList () {

  var stringWriteTask = '';//the variable in which the empty string is assigned to which the text will be added

  /* СТВОРЮЮ checkbox */
  var checkbox = document.createElement('input');//the change which is assigned an empty string which is assigned a checkbox to which further text will be added
  checkbox.type = "checkbox";
  checkbox.className = 'task__one-item-checkbox';
  checkbox.value = 0;//gives the value of this element 0 means that the task has not yet been completed

  /* СТВОРЮЮ span */
  var dynamiTextSpan = document.createElement('span');//creates a span tag
  dynamiTextSpan.className = "task__text-part-item";//gives a class of tag that I created earlier

  var dynamiTag = document.createElement('li');//creates tag li

  dynamiTag.appendChild(checkbox);//inserts into the only created li previously created checkbox

  for (var key in myListTask) {

    if (myListTask[key].itemStatus === true) {
      dynamiTag.className = "task__one-item task__one-item--complete";//gives a class of tag that I created earlier
    } else {
      dynamiTag.className = "task__one-item";//gives a class of tag that I created earlier
    }

  }

  stringWriteTask = stringWriteTask + myListTask[key].itemTask;//is assigned the task text from the array of nested objects in the myListTask array

  dynamiTextSpan.appendChild(document.createTextNode(stringWriteTask));//inserts text from input to span

  dynamiTag.appendChild(dynamiTextSpan);

  var taskDynamicList = document.getElementById('task__list');//finds a place where it will be necessary in the future to deduce tasks

  taskDynamicList.appendChild(dynamiTag);//displays tasks in the task list on pages

}

/* The following function is intended to output tasks after reloading the page */

function writeTaskListLocalStorage () {

  var stringWriteTask = '';//variable in which the empty string is assigned to which the text will be added

  /* cteate checkbox */
  var checkbox = document.createElement('input');//the change which is assigned an empty string which is assigned a checkbox to which further text will be added

  checkbox.type = "checkbox";

  checkbox.className = 'task__one-item-checkbox';

  checkbox.value = 0;//gives the value of this element 0 - means that the task has not yet been completed

  /* create span */
  var dynamiTextSpan = document.createElement('span');////create span
  dynamiTextSpan.className = "task__text-part-item";//gives a class of tag that I created earlier

  var dynamiTag = document.createElement('li');//create tag li
  dynamiTag.appendChild(checkbox);//inserts into the only created li previously created checkbox

  if (myListTask[key].itemStatus === true) {
    dynamiTag.className = "task__one-item task__one-item--complete";//gives a class of tag that I created earlier
  } else {
    dynamiTag.className = "task__one-item";//gives a class of tag that I created earlier
  }

  stringWriteTask = stringWriteTask + myListTask[key].itemTask;//is assigned the task text from the array of nested objects in the myListTask array

  dynamiTextSpan.appendChild(document.createTextNode(stringWriteTask));//inserts text from input to span

  dynamiTag.appendChild(dynamiTextSpan);

  var taskDynamicList = document.getElementById('task__list');//finds a place where it will be necessary in the future to deduce tasks

  taskDynamicList.appendChild(dynamiTag);//displays tasks in the task list on pages

}

/* Delete the selected task */

var taskDeleteB = document.getElementById('taskDeleteButton');

taskDeleteB.onclick = function () {

  var selectionСheckboxTask = document.getElementsByClassName('task__one-item-checkbox');//refers to an element in its class

    for (var i = 0; i < selectionСheckboxTask.length; i++) {//the loop is designed to crawl the resulting array

      if (selectionСheckboxTask[i].checked) {//checks whether the checkbox is pressed
        var parentActiveСheckbox = selectionСheckboxTask[i].parentNode;
        parentActiveСheckbox.remove();

        myListTask = JSON.parse(localStorage.getItem('todoTaskList') );//converts a string located in localStorage into an array and assigns its empty array

        myListTask.splice(i, 1);//removes the checkbox task that was clicked

        localStorage.setItem('todoTaskList', JSON.stringify(myListTask));//converts the array back to the list and rewrites it in the localStorage

      } else {

      };

    }

};

/* Marking completed task selected */

var markCompletedTaskB = document.getElementById('markCompletedTask');

markCompletedTaskB.onclick = function () {

  var selectionСheckboxTask = document.getElementsByClassName('task__one-item-checkbox');

  for (var i = 0; i < selectionСheckboxTask.length; i++) {//the loop is designed to crawl the resulting array

    if (selectionСheckboxTask[i].checked) {//checks whether the checkbox is pressed

      var parentActiveСheckbox = selectionСheckboxTask[i].parentNode;

      parentActiveСheckbox.classList.add("task__one-item--complete");//add another class to the selected item

      myListTask = JSON.parse(localStorage.getItem('todoTaskList') );//converts a string located in localStorage into an array and assigns its empty array

      myListTask[i].itemStatus = true;//inserts the initial false status into a temporary object

      localStorage.setItem('todoTaskList', JSON.stringify(myListTask));//converts the array back to the list and rewrites it in the localStorage

    } else {

    };

   }

};

/* Cleaning the designation of the selected task */

var removeMarkCompletedTaskB = document.getElementById('markNotCompletedTask');

removeMarkCompletedTaskB.onclick = function () {

  var selectionСheckboxTask = document.getElementsByClassName('task__one-item-checkbox');

  for (var i = 0; i < selectionСheckboxTask.length; i++) {//the loop is designed to crawl the resulting array

    if (selectionСheckboxTask[i].checked) {//checks whether the checkbox is pressed

      var parentActiveСheckbox = selectionСheckboxTask[i].parentNode;

      parentActiveСheckbox.classList.remove("task__one-item--complete");//add another class to the selected item

      myListTask = JSON.parse(localStorage.getItem('todoTaskList') );//converts a string located in localStorage into an array and assigns its empty array

      myListTask[i].itemStatus = false;//inserts the initial false status into a temporary object

      localStorage.setItem('todoTaskList', JSON.stringify(myListTask));//converts the array back to the list and rewrites it in the localStorage

    } else {

    };

  }

};

/* Counting the number of selected tasks */

var numberSelectedTask = 0;

var blockTaskNumberSelected = document.getElementById('task__number-selected');

(function () {

  document.addEventListener('change', function (evt) {

    var el = evt.target;

    var val = el.value|0; // to int

    if (el.checked) {
      numberSelectedTask = numberSelectedTask + 1;
    } else {
      numberSelectedTask = numberSelectedTask - 1;
    }

    console.log(numberSelectedTask);

    blockTaskNumberSelected.innerHTML = numberSelectedTask;

    return numberSelectedTask;

  }, false);

  return numberSelectedTask;

})();

blockTaskNumberSelected.innerHTML = numberSelectedTask;

/* clear localStorage */

var clearListTaskB = document.getElementById('clearListTask');

clearListTaskB.onclick = function () {

  localStorage.clear()

};