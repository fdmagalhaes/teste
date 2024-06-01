//Variaveis 
let min = 1;
let max = 100   0;
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo número secreto';

// let paragrafo = document.querySelector ('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10.';


function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2})
}

function exibirMensagemInicial(){
    exibirTextoTela('h1', 'Jogo número secreto' );
    exibirTextoTela('p',`Escolha um número entre ${min} e ${max}.`);    
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input ').value;

    // validar chute esta entre os minimo e maximo 
    if (isNaN(chute) || chute < min || chute > max) {
        exibirTextoTela('h1', `Por favor, insira um número entre ${min} e ${max}.`);
        return;
    }
    
    if (chute == numeroSecreto){
        // quando jogador acertar o numero 
        exibirTextoTela('h1', 'Parabéns, você acertou');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        // chute diferente do numero secreto 
        if (chute > numeroSecreto){
            exibirTextoTela('h1', 'Tente um número menor');
        }else {
            exibirTextoTela('h1', 'Tente um número maior');
        }
    }
    tentativas++;
    limparcampo()
}

function gerarNumeroAleatorio() {
    // let min = 0;
    // let max = 3;
    // Gera um número aleatório entre min e max (inclusive)
    let numeroEscolhido = Math.floor(Math.random() * (max - min + 1)) + min;
    let quantidadeDeElementosNaLista =listaDeNumerosSorteados.length;

    // Verifica a quantidade de elementos na lista
    if (quantidadeDeElementosNaLista == (max+1)){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        // Adiciona o número escolhido à lista
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparcampo() {
    chute =document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}