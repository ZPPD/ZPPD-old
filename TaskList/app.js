//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//function to load all event listeners
loadEventListeners();

//load all event Listeners
function loadEventListeners() {
  //DOM event
  document.addEventListener('DOMContentLoaded', getTasks);
  //add task event
  form.addEventListener('submit', addTask);
  //remove task event
  taskList.addEventListener('click', removeTask);
  //clear task event
  clearBtn.addEventListener('click', clearTasks);
  //filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

//Get Tasks from Local Storage
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task) {
    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text node and append to it
    li.appendChild(document.createTextNode(task));
    //create new link element
    const link = document.createElement('a');
    //add class (secondary-content in materialize to be on the side)
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to the li
    li.appendChild(link);

    //append the li to ul
    taskList.appendChild(li);
  })
}

//add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  } else {
    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text node and append to it
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add class (secondary-content in materialize to be on the side)
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to the li
    li.appendChild(link);

    //append the li to ul
    taskList.appendChild(li);

    //Store in Local Storage
    storeTaskInLocalStorage(taskInput.value);

    //clear input
    taskInput.value = '';

    e.preventDefault();
  }
}

//store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
      //remove from Local Storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

//remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}
//clear Tasks
function clearTasks() {
  //one way to do it
  //taskList.innerHtml = '';

  //faster --  while there is still anything in the first child:
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  //https://jsperf.com/innerhtml-vs-removechild
  //clear form LS
  clearTasksFromLocalStorage();

}
//clear Tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

//filter Tasks
function filterTasks(e) {
  //to get what is being typed
  const text = e.target.value.toLowerCase();
  //querySelectorall returns a node list, so we can use foreach
  document.querySelectorAll('.collection-item').forEach(
    function(task) {
      const item = task.firstChild.textContent;

      if (item.toLowerCase().indexOf(text) != -1) {
        task.style.dysplay = 'block';
      } else {
        task.style.display = 'none';
      }
    });
}
