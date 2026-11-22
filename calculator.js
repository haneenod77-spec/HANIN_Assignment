// --- Append Value ---

function appendValue(value) {
    document.getElementById("display").value += value;
}

// --- Clear Display ---

function clearDisplay() {
    document.getElementById("display").value = "";
}

// --- Calculate Result ---

function calculateResult() {
    let display = document.getElementById("display");

    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("العملية الحسابية غير صحيحة");
        display.value = "";
    }
}

// --- Handle Keyboard ---

function handleKeyPress(event) {
    if (event.key === "Enter") {
        calculateResult();
    } else if (event.key === "Escape") {
        clearDisplay();
    }
}

// --- Confirm ---

function confirmClear() {
    let answer = confirm("هل تريدين مسح جميع العمليات؟");

    if (answer) {
        clearDisplay();
    }
}

// --- Prompt ---

function getNumber() {
    let number = Number(prompt("أدخل رقماً:"));

    alert("الرقم الذي أدخلته هو: " + number);
}

// --- Keyboard Event ---

document.addEventListener("keydown", handleKeyPress);