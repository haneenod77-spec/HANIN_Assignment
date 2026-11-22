// --- if / else ---

function checkGrade() {
    let grade = Number(prompt("أدخل درجتك من 100:"));

    if (grade >= 90) {
        alert("التقدير: ممتاز");
    } else if (grade >= 80) {
        alert("التقدير: جيد جداً");
    } else if (grade >= 70) {
        alert("التقدير: جيد");
    } else if (grade >= 60) {
        alert("التقدير: مقبول");
    } else if (grade >= 0) {
        alert("التقدير: راسب");
    } else {
        alert("الدرجة غير صحيحة");
    }
}

// --- if / else ---

function checkNumber() {
    let number = Number(prompt("أدخل عدداً:"));

    if (number > 0) {
        alert("العدد موجب");
    } else if (number < 0) {
        alert("العدد سالب");
    } else {
        alert("العدد يساوي صفراً");
    }
}

// --- switch ---

function showCurrency() {
    let country = prompt("أدخل اسم الدولة: السعودية أو مصر أو اليمن");

    switch (country) {
        case "السعودية":
            alert("العملة: الريال السعودي");
            break;

        case "مصر":
            alert("العملة: الجنيه المصري");
            break;

        case "اليمن":
            alert("العملة: الريال اليمني");
            break;

        default:
            alert("الدولة غير موجودة في القائمة");
    }
}