// Function to load tasks from local storage
function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return storedTasks;
}

// Function to display tasks
function displayTasks() {
  const tasks = loadTasks();
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((taskText, index) => {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    // Add a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete"; // Add the "delete" class
    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasksToLocalStorage(tasks);
      displayTasks();
    });

    // Add an edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit"; // Add the "edit" class
    editButton.addEventListener("click", () => {
      const updatedTaskText = prompt("Edit the task:", taskText);
      if (updatedTaskText !== null) {
        tasks[index] = updatedTaskText;
        saveTasksToLocalStorage(tasks);
        displayTasks();
      }
    });

    newTask.appendChild(editButton);
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);
  });
}

// Function to save tasks to local storage
function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to add a new task
function addTask() {
  const newTaskText = document.getElementById("newTask").value.trim();
  if (newTaskText === "") {
    alert("Please enter a task.");
    return;
  }

  const tasks = loadTasks();
  tasks.push(newTaskText);
  saveTasksToLocalStorage(tasks);
  displayTasks();

  // Clear the input field
  document.getElementById("newTask").value = "";
}

// Attach the addTask function to the "Add" button
document.getElementById("addButton").addEventListener("click", addTask);

// Initial display of tasks from local storage
displayTasks();
