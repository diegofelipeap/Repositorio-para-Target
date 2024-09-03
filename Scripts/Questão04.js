/**
 * Caso haja alguma falha, baixe e execute com a extensão Code Runner.
 * @returns {number} Próximo número ímpar.
 */
function nextOddNumber() {
    const sequence = [1, 3, 5, 7];
    const lastNumber = sequence[sequence.length - 1];
    return lastNumber + 2;
}

/**
 * @returns {number} Próximo número na sequência de potências de 2.
 */
function nextPowerOfTwo() {
    const sequence = [2, 4, 8, 16, 32, 64];
    const lastNumber = sequence[sequence.length - 1];
    return lastNumber * 2;
}

/**
 * @returns {number} Próximo quadrado perfeito.
 */
function nextPerfectSquare() {
    const sequence = [0, 1, 4, 9, 16, 25, 36];
    const lastIndex = sequence.length;
    return Math.pow(lastIndex, 2);
}

/**

 * @returns {number}
 */
function nextEvenSquare() {
    const sequence = [4, 16, 36, 64];
    const lastEvenNumber = Math.sqrt(sequence[sequence.length - 1]);
    const nextEvenNumber = lastEvenNumber + 2; 
    return Math.pow(nextEvenNumber, 2);
}

/**
 * @returns {number} Próximo número na sequência de Fibonacci.
 */
function nextFibonacciNumber() {
    const sequence = [1, 1, 2, 3, 5, 8];
    const length = sequence.length;
    const nextNumber = sequence[length - 1] + sequence[length - 2];
    return nextNumber;
}

/**
 * @returns {number} Próximo número sem o dígito '3'.
 */
function nextNumberExcludingThree() {
    const sequence = [2, 10, 12, 16, 17, 18, 19];
    let lastNumber = sequence[sequence.length - 1];

    while (true) {
        lastNumber++;
        if (!lastNumber.toString().includes('3')) {
            return lastNumber;
        }
    }
}

// Imprimindo os resultados
console.log(`a) Próximo número: ${nextOddNumber()}`);           // 9
console.log(`b) Próximo número: ${nextPowerOfTwo()}`);          // 128
console.log(`c) Próximo número: ${nextPerfectSquare()}`);       // 49
console.log(`d) Próximo número: ${nextEvenSquare()}`);          // 100
console.log(`e) Próximo número: ${nextFibonacciNumber()}`);     // 13
console.log(`f) Próximo número: ${nextNumberExcludingThree()}`); // 20
