// --- for loop ---

function showMultiplication() {
    let number = Number(prompt("أدخل رقماً لعرض جدول ضربه:"));
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += number + " × " + i + " = " + (number * i) + "\n";
    }

    alert(result);
}

// --- while loop ---

function countDown() {
    let number = Number(prompt("أدخل رقم بداية العد التنازلي:"));

    while (number >= 1) {
        console.log(number);
        number--;
    }

    alert("انتهى العد التنازلي، راجع Console لرؤية النتائج.");
}

// --- do while loop ---

function calculateSum() {
    let number = 1;
    let sum = 0;

    do {
        sum += number;
        number++;
    } while (number <= 10);

    alert("مجموع الأعداد من 1 إلى 10 هو: " + sum);
}