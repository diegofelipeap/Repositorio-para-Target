/**
 * Caso haja alguma falha, baixe e execute com a extensão Code Runner.
  @param {string} inputString
  @returns {object}
 */
function countLetterA(inputString) {
    if (typeof inputString !== 'string') {
        throw new Error('A entrada deve ser uma string.');
    }

    let count = 0;

    for (const char of inputString.toLowerCase()) {
        if (char === 'a') {
            count++;
        }
    }

    return {
        exists: count > 0,
        count: count
    };
}


const inputString = "A raposa marrom rápida salta sobre o cachorro preguiçoso.";
const result = countLetterA(inputString);

console.log(`A letra 'a'${result.exists ? ' está' : ' não está'} presente na string.`);
console.log(`Quantidade de vezes que 'a' aparece: ${result.count}`);
