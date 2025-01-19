function add(number1, number2) {
    return number1 + number2;
}

function add(number1, number2) {
    return number1 - number2;
}

function add(number1, number2) {
    return number1 * number2;
}

function add(number1, number2) {
    return number1 / number2;
}

const addBtn = document.getElementById('add-btn');
const subtractBtn = document.getElementById('subtract-btn');
const multiplyBtn = document.getElementById('multiply-btn');
const divideBtn = document.getElementById('divide-btn');

addBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = add(num1, num2);
    resultSpan.textContent = `Result: ${result}`;
  });
  
  subtractBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = subtract(num1, num2);
    resultSpan.textContent = `Result: ${result}`;
  });
  
  multiplyBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = multiply(num1, num2);
    resultSpan.textContent = `Result: ${result}`;
  });
  
  divideBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    try {
      const result = divide(num1, num2);
      resultSpan.textContent = `Result: ${result}`;
    } catch (error) {
      resultSpan.textContent = error.message;
    }
  });