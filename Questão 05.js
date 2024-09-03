/** Caso haja alguma falha, baixe e execute com a extensão Code Runner.
 * Este programa simula o problema dos três interruptores e três lâmpadas.
 * Ele demonstra como descobrir qual interruptor controla qual lâmpada usando apenas duas idas para as salas das lâmpadas.
 */

// Função para simular o problema dos interruptores e lâmpadas
function descobrirInterruptores() {
    // Inicialmente, todas as lâmpadas estão apagadas (false)
    let lampadaA = false;
    let lampadaB = false;
    let lampadaC = false;
    // Variáveis para armazenar o estado das lâmpadas (quente ou fria)
    let estadoLampadaA = 'fria';
    let estadoLampadaB = 'fria';
    let estadoLampadaC = 'fria';
    // Passo 1: Ligue o interruptor A e espere 5 minutos (simulado com um setTimeout)
    console.log("Ligue o interruptor A e aguarde 5 minutos...");
    lampadaA = true; // Lâmpada A está acesa e vai esquentar
    // Simulando os 5 minutos de espera
    setTimeout(() => {
        // Após 5 minutos, desligue o interruptor A
        console.log("Desligue o interruptor A.");
        lampadaA = false; // Lâmpada A apagada, mas quente
        estadoLampadaA = 'quente'; // Lâmpada A está quente

        // Passo 2: Ligue o interruptor B
        console.log("Ligue o interruptor B.");
        lampadaB = true; // Lâmpada B está acesa

        // Passo 3: Vá até a sala das lâmpadas (simulado por logs)
        console.log("Vá até a sala das lâmpadas.");

        // Passo 4: Verificar o estado de cada lâmpada
        if (lampadaB) {
            console.log("A lâmpada B está acesa, portanto o interruptor B controla esta lâmpada.");
        }

        if (estadoLampadaA === 'quente') {
            console.log("A lâmpada A está apagada, mas quente. O interruptor A controla esta lâmpada.");
        }

        if (!lampadaC && estadoLampadaC === 'fria') {
            console.log("A lâmpada C está apagada e fria, portanto o interruptor C controla esta lâmpada.");
        }

    }, 5000); // Simulando os 5 minutos com 5000ms de delay no código
}

// Chamada da função para iniciar a simulação
descobrirInterruptores();
