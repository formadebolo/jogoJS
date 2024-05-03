alert('Boas vindas ao jogo do número secreto'); // exibe uma caixa de alerta com a mensagem "Boas vindas ao jogo do número secreto" quando o script é executado.
let numeroMaximo = 5000; //declara uma variável numeroMaximo e atribui a ela o valor 5000. Este valor representa o limite superior do intervalo de números nos quais o usuário pode chutar.
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //gerado um número aleatório entre 1 e numeroMaximo (inclusive) e é atribuído à variável numeroSecreto. A função Math.random() retorna um número pseudo-aleatório entre 0 (inclusive) e 1 (exclusive), que é então multiplicado por numeroMaximo e arredondado para o número inteiro mais próximo usando parseInt(). Adiciona-se 1 para garantir que o número gerado esteja dentro do intervalo especificado.
console.log(numeroSecreto); // imprime o número secreto no console do navegador para fins de depuração. É útil para verificar se o número gerado aleatoriamente está correto.
let chute; 
let tentativas = 1;
//Estas linhas declaram duas variáveis: chute, que será usada para armazenar a entrada do usuário, e tentativas, 
//que rastreará o número de tentativas que o usuário levou para adivinhar o número secreto. O número de tentativas começa em 1.

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) { //estrutura de repetição while.
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`); // exibe um prompt onde o usuário pode inserir um número.
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}
//Se o chute do usuário for igual ao número secreto, o loop é interrompido. Caso contrário, o código dentro do bloco else é executado. Se o chute for maior que o número secreto, o usuário recebe um alerta indicando que o número secreto é menor. Se for menor, o usuário recebe um alerta indicando que o número secreto é maior. O contador de tentativas tentativas é incrementado em 1 a cada vez que o usuário faz um chute.

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
//Depois que o usuário acertar o número secreto, este trecho de código determina se a palavra "tentativa" ou "tentativas" deve ser usada com base no número de tentativas. Em seguida, uma mensagem de alerta é exibida parabenizando o usuário por ter descoberto o número secreto, juntamente com o número secreto e o número de tentativas que levou para acertar.

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }
