// O nosso tabuleiro 3x3
let tabuleiro = [
    ["", "", ""], // Linha 0
    ["", "", ""], // Linha 1
    ["", "", ""]  // Linha 2
];

let jogadorAtual = "X"; // O jogo começa sempre com o X


function fazerJogada(linha, coluna) {
    // 1. Verificar se a posição na matriz já está ocupada
    if (tabuleiro[linha][coluna] !== "") {
        alert("Esta posição já está ocupada! Escolhe outra.");
        return; // Para a função aqui
    }

    // 2. Gravar o "X" ou "O" na matriz, na linha e coluna corretas
    tabuleiro[linha][coluna] = jogadorAtual;

    // 3. Atualizar o HTML para mostrar o X ou O na tela
    atualizarTela();

    // 4. Alternar o jogador (Se era X, vira O. Se era O, vira X)
    if (jogadorAtual === "X") {
        jogadorAtual = "O";
    } else {
        jogadorAtual = "X";
    }

    // Atualizar a mensagem na tela
    document.getElementById("mensagem").innerText = "Vez do jogador: " + jogadorAtual;
}

    if (tabuleiro[0][1] !== "" &&
        tabuleiro[1][0] === tabuleiro[0][1] &&
        tabuleiro[0][1] === tabuleiro[0][2]) {
        alert("O jogador " + tabuleiro[0][0] + " GANHOU!");
}
    if (tabuleiro[1][2] !== "" &&
        tabuleiro[2][1] === tabuleiro[0][1] &&
        tabuleiro[0][1] === tabuleiro[0][2]) {
        alert("O jogador " + tabuleiro[0][0] + " GANHOU!");
}
    if (tabuleiro[1][3] !== "" &&
        tabuleiro[3][1] === tabuleiro[0][1] &&
        tabuleiro[0][1] === tabuleiro[0][2]) {
        alert("O jogador " + tabuleiro[0][0] + " GANHOU!");
}

function atualizarTela() {
    // Pegamos todas as divs que têm a classe 'celula'
    const celulas = document.getElementsByClassName("celula");
    let indice = 0;

    // Percorremos a nossa matriz para atualizar o visual
    for (let l = 0; l < 3; l++) {
        for (let c = 0; c < 3; c++) {
            // Colocamos o valor da matriz ("X", "O" ou "") dentro da div correspondente
            celulas[indice].innerText = tabuleiro[l][c];
            indice++;
        }
    }
}