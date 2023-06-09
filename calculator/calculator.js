var buttons = document.getElementsByClassName('gx-5');
var display = document.getElementById('screen');

var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) {
    return value == '+' || value == '-' || value == '*' || value == '/';
}

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = "";
        }
        else if (value == 'ac') {
            display.textContent = "";
        }
        else if (value == '+/-') {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        }
        else if (value == '.') {
            display.textContent = text + '.';
        }
        else if (value == '%') {
            operand1 = parseFloat(text);
            operand1 /= 100;
            display.textContent = operand1;
        }
        else if (value == '=') {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }
        else {
            display.textContent += value;
        }
    })
}

document.addEventListener("keydown", function (event) {
    var text = display.textContent.trim();
    if (event.key >= "0" && event.key <= "9") {
        // Code to execute when a numeric key is pressed
        //console.log(event.key);
        display.textContent += event.key;
    }
    else if (isOperator(event.key)) {
        operator = event.key;
        //console.log(operator);
        operand1 = parseFloat(text);
        //console.log(typeof(operand1));
        display.textContent = "";
    }
    else if (event.key === "Backspace") {
        display.textContent = "";
    }
    else if (event.key === "_") {
        operand1 = parseFloat(text);
        operand1 = -1 * operand1;
        display.textContent = operand1;
    }
    else if (event.key === ".") {
        display.textContent += '.';
    }
    else if (event.key === "%") {
        operand1 = parseFloat(text);
        operand1 /= 100;
        display.textContent = operand1;
    }
    else if (event.key === "=" || event.key === "Enter") {
        operand2 = parseFloat(text);
        //console.log(operand1);
        //console.log(operand2);
        var result = eval(operand1 + ' ' + operator + ' ' + operand2);
        if (result) {
            display.textContent = result;
            operand1 = result;
            operand2 = null;
            operator = null;
        }
    }
})