//Inicializando as variáveis conforme o código original
let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;

    //Vai exibir o valor de K e SOMA em cada iteração.
    console.log(`Iteração com K = ${K}, SOMA = ${SOMA}`);
}

//Exibirá o valor final. Caso haja alguma falha, baixe e execute com a extensão Code Runner.
console.log(`O valor final de SOMA é: ${SOMA}`);
