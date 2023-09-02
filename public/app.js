document.addEventListener("DOMContentLoaded", function () {
    const todoColumn = document.getElementById("todo-column");
    const doingColumn = document.getElementById("doing-column");
    const doneColumn = document.getElementById("done-column");
    const addTaskForm = document.getElementById("add-task-form");

    // Function to create a new task card
    function createTaskCard(title, description) {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");

        const taskTitle = document.createElement("h3");
        taskTitle.textContent = title;

        const taskDescription = document.createElement("p");
        taskDescription.textContent = description;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function () {
            // Open a modal for editing
            const modal = document.createElement("div");
            modal.classList.add("modal");

            const editForm = document.createElement("form");

            const titleLabel = document.createElement("label");
            titleLabel.textContent = "Edit Title:";
            const titleInput = document.createElement("input");
            titleInput.setAttribute("type", "text");
            titleInput.value = taskTitle.textContent;

            const descriptionLabel = document.createElement("label");
            descriptionLabel.textContent = "Edit Description:";
            const descriptionInput = document.createElement("textarea");
            descriptionInput.value = taskDescription.textContent;

            const saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            saveButton.addEventListener("click", function () {
                // Update task details with the new values
                taskTitle.textContent = titleInput.value;
                taskDescription.textContent = descriptionInput.value;

                // Close the modal
                modal.remove();
            });

            editForm.appendChild(titleLabel);
            editForm.appendChild(titleInput);
            editForm.appendChild(descriptionLabel);
            editForm.appendChild(descriptionInput);
            editForm.appendChild(saveButton);

            modal.appendChild(editForm);

            document.body.appendChild(modal);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            // Remove the task card
            taskCard.remove();
        });

        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskDescription);
        taskCard.appendChild(editButton);
        taskCard.appendChild(deleteButton);

        // Enable drag and drop for task cards
        taskCard.draggable = true;
        taskCard.addEventListener("dragstart", function (e) {
            e.dataTransfer.setData("text/plain", e.target.id);
        });

        return taskCard;
    }

    // Event listener for adding a new task
    addTaskForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const taskTitle = document.getElementById("task-title").value;
        const taskDescription = document.getElementById("task-description").value;

        if (taskTitle && taskDescription) {
            const newTaskCard = createTaskCard(taskTitle, taskDescription);
            todoColumn.appendChild(newTaskCard);
            addTaskForm.reset(); // Clear the form
        }
    });

    // Enable drag and drop between columns
    doingColumn.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    doingColumn.addEventListener("drop", function (e) {
        e.preventDefault();
        const taskId = e.dataTransfer.getData("text/plain");
        const taskCard = document.getElementById(taskId);
        doingColumn.appendChild(taskCard);
    });

    doneColumn.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    doneColumn.addEventListener("drop", function (e) {
        e.preventDefault();
        const taskId = e.dataTransfer.getData("text/plain");
        const taskCard = document.getElementById(taskId);
        doneColumn.appendChild(taskCard);
    });
});

// Function to initiate the drag operation
function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

// Function to allow a drop event
function allowDrop(event) {
    event.preventDefault();
}

// Function to handle the drop event
function drop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text/plain");
    const taskCard = document.getElementById(taskId);
    const targetColumn = event.target;

    // Check if the drop target is a column
    if (targetColumn.classList.contains("column")) {
        targetColumn.appendChild(taskCard);
    }
}
