const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    `;

  const completeBtn = taskItem.querySelector(".complete-btn");
  const deleteBtn = taskItem.querySelector(".delete-btn");

  completeBtn.addEventListener("click", completeTask);
  deleteBtn.addEventListener("click", deleteTask);

  pendingList.appendChild(taskItem);
  taskInput.value = "";
}

function completeTask(event) {
  const taskItem = event.target.parentElement;
  const taskText = taskItem.querySelector("span").textContent;

  const completedItem = document.createElement("li");
  completedItem.innerHTML = `
        <span class="completed">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

  const deleteBtn = completedItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteTask);

  completedList.appendChild(completedItem);
  taskItem.remove();
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.remove();
}
