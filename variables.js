// --- var ---
var x = 10;
var x = 20;
x = 30;

console.log("قيمة var:", x);

// --- let ---
let y = 15;
y = 25;

console.log("قيمة let:", y);

// --- const ---
const z = 200;

console.log("قيمة const:", z);

// --- Scope ---
if (true) {
    var a = "متغير var خارج الأقواس";
    let b = "متغير let داخل الأقواس";
    const c = "متغير const داخل الأقواس";

    console.log(b);
}

console.log(a);

// --- Assignment ---
let score = 80;
let studentName = "حنين";

score += 10;
score -= 5;

console.log("اسم الطالب:", studentName);
console.log("الدرجة النهائية:", score);

// --- Functions ---

function showVariables() {
    alert(
        "var = " + x +
        "\nlet = " + y +
        "\nconst = " + z
    );
}

function calculateScore() {
    let mark = Number(prompt("أدخل درجتك:"));
    let finalMark = mark + 5;

    alert("درجتك بعد الإضافة: " + finalMark);
}

function getStudentInfo() {
    let name = prompt("أدخل اسم الطالب:");
    let department = prompt("أدخل اسم القسم:");

    alert("مرحباً " + name + "\nالقسم: " + department);
}