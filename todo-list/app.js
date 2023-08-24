const taskInput = document.getElementById("todoInput");
const taskList = document.getElementById("todoList");

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

function addTask() {
    const item = taskInput.value.trim();

    if (item !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = item;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";

        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });

        listItem.classList.add("task-item");
        deleteButton.classList.add("delete-button");

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = "";
        taskInput.focus();
    }
}