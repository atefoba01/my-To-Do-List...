// Function to add new to-do items to the list
function addTask() {
    const newTaskText = document.getElementById("newTask").value.trim();
    if (newTaskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.textContent = newTaskText;
    newTask.addEventListener("click", () => {
        taskList.removeChild(newTask);
    });
    taskList.appendChild(newTask);

    // Clear the input field
    document.getElementById("newTask").value = "";
}

// Attach the addTask function to the "Add" button
document.getElementById("addButton").addEventListener("click", addTask);