//Caso haja alguma falha, baixe e execute com a extensão Code Runner.
function isFibonacci(number) {
    if (number < 0) return false;

    let a = 0;
    let b = 1;

    if (number === a || number === b) return true;

    let next = a + b;

    while (next <= number) {
        if (next === number) {
            return true;
        }
        a = b;
        b = next;
        next = a + b;
    }
    return false;
}

const inputNumber = 21;

if (isFibonacci(inputNumber)) {
    console.log(`${inputNumber} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${inputNumber} não pertence à sequência de Fibonacci.`);
}