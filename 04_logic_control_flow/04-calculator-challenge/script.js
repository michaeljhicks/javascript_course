function michaelCalculator(num1, num2, operator) {
    switch (true) {
        case operator == '+':
            const sum = num1 + num2;
            console.log(`${num1} + ${num2} = ${sum}`);
            break;
        case operator == '-':
            const difference = num1 - num2;
            console.log(`${num1} - ${num2} = ${difference}`);
            break;
        case operator == '/':
            const quotient = num1 / num2;
            console.log(`${num1} / ${num2} = ${quotient}`);
            break;    
        case operator == '*':
            const product = num1 * num2;
            console.log(`${num1} * ${num2} = ${product}`);
            break;    
        default:
            console.log('Error: Please input valid operator');
            break;
    }
}

// michaelCalculator(6, 4,'*');

// Brad Solution
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;    
        case '-':
            result = num1 - num2;
            break;    
        case '*':
            result = num1 * num2;
            break;    
        case '/':
            result = num1 / num2;
            break;    
        default:
            result = 'Invalid Operator'
            break;
    }

    console.log(result);
    return result;
}

calculator(5, 2, '5')