alert('Bem vind@ ao joao do número secreto');
let min = 0;
let max = 100;
let numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

// enquanto
while (chute != numeroSecreto) {
    chute = prompt (`Escolha um número entre ${min} e ${max}`);
    //se o chute for igual ao numero secreto
    if (chute == numeroSecreto){
        break
    } else {
        if (numeroSecreto > chute){
            alert (`O número secreto é maior que ${chute}`);
        } else {
            alert (`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}
// operador ternario 
let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
alert (`Isso ai! você descobriu o número secret ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

    if(tentativas == 1){
        alert (`Isso ai! você descobriu o número secret ${numeroSecreto} com ${tentativas} tentativa`);
    }else {
        alert (`Isso ai! você descobriu o número secret ${numeroSecreto} com ${tentativas} tentativas`);
    }