
  
  

  // Select the necessary HTML elements
  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const taskList = document.getElementById('taskList');
  
  // Function to handle task addition
  function addTask() {
    const task = taskInput.value;
    if (task) {
      const listItem = document.createElement('li');
      listItem.textContent = task;
      taskList.appendChild(listItem);
      taskInput.value = '';
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('deleteButton');
      listItem.appendChild(deleteButton);
  
      deleteButton.addEventListener('click', function () {
        listItem.remove();
      });
    }
  }
  
  // Event listener for the add button
  addButton.addEventListener('click', addTask);
  
  // Event listener for the enter key press
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
 
  