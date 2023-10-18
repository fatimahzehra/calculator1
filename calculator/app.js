let result = "";

    function Result(value) {
      result += value;
      document.getElementById("result").value = result;
    }

    function clearResult() {
      result = "";
      document.getElementById("result").value = result;
    }

    function performOperation(operator) {
      result += operator;
      document.getElementById("result").value = result;
    }

    function calculateResult() {
      const operators = ['+', '-', '*', '/'];
      for (let operator of operators) {
        const parts = result.split(operator);
        if (parts.length === 2) {
          const num1 = parseFloat(parts[0]);
          const num2 = parseFloat(parts[1]);
          let operationResult;
          
          if (operator === '+') {
            operationResult = num1 + num2;
          } else if (operator === '-') {
            operationResult = num1 - num2;
          } else if (operator === '*') {
            operationResult = num1 * num2;
          } else if (operator === '/') {
            if (num2 !== 0) {
              operationResult = num1 / num2;
            } else {
              operationResult = 'Error: Division by zero';
            }
          }
          
          result = operationResult.toString();
          document.getElementById("result").value = result;
          break; // Exit the loop after performing the operation
        }
      }
    }


