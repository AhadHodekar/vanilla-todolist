const submitButton = document.getElementById("submit-button");
const taskInput = document.getElementById("task");
const todos = document.getElementById("todos");

const addTask = () => {
   const task = taskInput.value;
   if (task.trim() !== "") {
      todos.innerHTML += `
            <div class="todo">
                <p>${task}</p>
                <input type="checkbox" name="task-status" class="task-status" id="${Date.now()}" />
            </div>`;
      taskInput.value = "";
   }
};

submitButton.addEventListener("click", addTask);
