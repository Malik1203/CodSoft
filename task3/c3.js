const display = document.getElementById("display");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

const buttons = document.querySelectorAll(".digit, .operator");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (display.value === "0") {
            display.value = button.textContent;
        } else {
            display.value += button.textContent;
        }
    });
});

clearButton.addEventListener("click", () => {
    display.value = "0";
});

equalsButton.addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
});
