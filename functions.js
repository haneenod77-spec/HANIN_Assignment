// --- Function ---

function showMessage() {
    alert("مرحباً بك في تطبيق الدوال!");
}

// --- Function ---

function showDate() {
    let today = new Date();

    alert("تاريخ اليوم: " + today.toLocaleDateString());
}

// --- Function ---

function addTask() {
    let taskName = prompt("أدخل اسم المهمة:");

    if (taskName != null && taskName != "") {
        let newTask = document.createElement("li");

        newTask.textContent = taskName;

        document.getElementById("taskList").appendChild(newTask);
    }
}

// --- Function ---

function hideTasks() {
    document.getElementById("taskList").innerHTML = "";
}