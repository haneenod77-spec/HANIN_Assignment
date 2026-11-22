// --- Array ---

let grades = [85, 90, 75, 95, 80];

// --- Display Array ---

function showGrades() {
    alert("الدرجات: " + grades);
}

// --- push ---

function addGrade() {
    let grade = Number(prompt("أدخل الدرجة الجديدة:"));

    grades.push(grade);

    alert("تمت إضافة الدرجة");
}

// --- pop ---

function removeGrade() {
    grades.pop();

    alert("تم حذف آخر درجة");
}

// --- shift ---

function removeFirstGrade() {
    grades.shift();

    alert("تم حذف أول درجة");
}

// --- reverse ---

function sortGrades() {
    grades.reverse();

    alert("الدرجات بعد عكس الترتيب: " + grades);
}

// --- Two Dimensional Array ---

let students = [
    ["سارة", 90],
    ["مريم", 85],
    ["أحمد", 95]
];

function showStudents() {
    let result = "";

    for (let i = 0; i < students.length; i++) {
        result += "الاسم: " + students[i][0] +
                  " - الدرجة: " + students[i][1] + "\n";
    }

    alert(result);
}