  const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
}; 

//All Operators
 const allCalculation = {
  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

  '=': (firstOperand, secondOperand) => secondOperand
};

function inputOperand(ourOperand) {
  const {
      displayValue,
      waitingForSecondOperand
  } = calculator;

  if (waitingForSecondOperand === true) {
      calculator.displayValue = ourOperand;
      calculator.waitingForSecondOperand = false;
  } else {
      calculator.displayValue = displayValue === '0' ? ourOperand : displayValue + ourOperand;
  }

  console.log(calculator);
}



function handleOperator(nextOperator) {
  const {
      firstOperand,
      displayValue,
      operator
  } = calculator
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
      calculator.operator = nextOperator;
      console.log(calculator);
      return;
  }

  if (firstOperand == null) {
      calculator.firstOperand = inputValue;
  } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = allCalculation[operator](currentValue, inputValue);

      calculator.displayValue = String(result);
      calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}

function updateDisplay() {
  const display = document.querySelector('.calc_all');
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calc_keys');
keys.addEventListener('click', (event) => {
  const {
      target
  } = event;
  if (!target.matches('button')) {
      return;
  }

  if (target.classList.contains('operator')) {
      handleOperator(target.value);
      updateDisplay();
      return;
  }
  inputOperand(target.value);
  updateDisplay();
});  