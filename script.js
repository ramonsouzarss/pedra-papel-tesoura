// Função para obter a escolha do humano
function getHumanChoice() {
    const choice = prompt("Digite pedra, papel ou tesoura:");
    return choice.toLowerCase();
}

// Função para obter a escolha do computador
function getComputerChoice() {
    const choices = ["pedra", "papel", "tesoura"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Variáveis globais para a pontuação dos jogadores
let humanScore = 0;
let computerScore = 0;

// Função para jogar uma rodada
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("Empatou!");
    } else if (
        (humanChoice === "pedra" && computerChoice === "tesoura") ||
        (humanChoice === "papel" && computerChoice === "pedra") ||
        (humanChoice === "tesoura" && computerChoice === "papel")
    ) {
        humanScore++;
        console.log(`Você venceu! ${humanChoice} ganha de ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`Você perdeu! ${computerChoice} ganha de ${humanChoice}.`);
    }
}

// Função para jogar o jogo completo
function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Rodada ${i + 1}: Você: ${humanScore}, Computador: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Você ganhou o jogo!");
    } else if (computerScore > humanScore) {
        console.log("O computador ganhou o jogo!");
    } else {
        console.log("O jogo empatou!");
    }

    console.log(`Pontuação final - Você: ${humanScore}, Computador: ${computerScore}`);
}

// Jogar o jogo
playGame();
