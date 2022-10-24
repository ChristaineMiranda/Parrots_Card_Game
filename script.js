let quantidadeCartas = 0;
let contador = 0;
let parescertos = 0;
let jogadas = 0;
let segundos = 0;
let pararRelogio;
const mostradorTempo = document.querySelector('.relogio');
const vetorTodasAsImagens = ["bobrossparrot.gif", "bobrossparrot.gif", "explodyparrot.gif","explodyparrot.gif","fiestaparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "metalparrot.gif", "revertitparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "tripletsparrot.gif", "unicornparrot.gif", "unicornparrot.gif"];   // todas as imagens duplicadas dois a dois
const vetorImagensAUsar = [];

function incrementa(){
    segundos++;
    mostradorTempo.innerHTML = `Tempo</br>${segundos}seg`;

}
//quando usuario escolhe quantas cartas, cria outro vetor com as n primeiras cartas do vetor de imagens
//depois embaralha
//encher a area das cartas com esse vetor embaralhado
//FUNÇÃO QUE EMBARALHA AS IMAGENS
function comparador() { 
	return Math.random() - 0.5; 
}

while((quantidadeCartas<4) || (quantidadeCartas>14) || (quantidadeCartas%2 != 0)){//obtendo quantidade de cartas
    quantidadeCartas = Number(prompt("Escolha a quantidade de cartas para jogar entre 4 e 14")); 
}
for(let i=0; i<quantidadeCartas; i++){
    vetorImagensAUsar.push(vetorTodasAsImagens[i]);//separa imagens a serem usadas
}
vetorImagensAUsar.sort(comparador);//embaralha imagens
console.log(vetorImagensAUsar);
//Preenchendo campo das cartas de acordo com quantidade escolhida pelo usuário
const areaCartas = document.querySelector('.campoCartas')//objeto para manipular área das cartas
for(let i=0; i<quantidadeCartas; i++){
    areaCartas.innerHTML = areaCartas.innerHTML + `<div class="carta" onclick="virarCarta(this)">
    <div class=" face verso"><img src="${vetorImagensAUsar[i]}"/></div>
    <div class="face frente"><img src="back.png"/></div>
</div>`
}//CAMPO CARTAS PREENCHIDO
pararRelogio = setInterval(incrementa, 1000);

//VIRA CARTA SELECIONADA E QUANDO A SEGUNDA CARTA É CLICADA, CHAMA COMPARAÇÃO
function virarCarta(cartaClicada){
    jogadas++;
    cartaClicada.classList.add("virada");
    cartaClicada.classList.add("aVerificar");
    contador++;
    if(contador == 2){
        compara();
        contador = 0;        
    }
}

//COMPARA UM PAR DE CARTAS
function compara(){
    const cartasviradas = document.querySelectorAll('.aVerificar');
    const cartaA = cartasviradas[0].innerHTML;
    const cartaB = cartasviradas[1].innerHTML;
    if(cartaA == cartaB){
        for(let i=0; i<cartasviradas.length; i++){
            cartasviradas[i].classList.add('acerto');
            cartasviradas[i].classList.remove('aVerificar');
            cartasviradas[i].setAttribute('onclick', '');       
        }
        parescertos = parescertos +2;
        if(parescertos === quantidadeCartas){
            clearInterval(pararRelogio);
            alert(`PARABÉNS! 
            Você ganhou em ${jogadas} jogadas e ${segundos} segundos!`);
        }
    }
    else{
        setTimeout(desvirar, 1000);
    }

}
//DESVIRA PAR SE CARTAS DIFERENTES
function desvirar (){
    const cartasviradas = document.querySelectorAll('.aVerificar');
    for(let i=0; i<cartasviradas.length;i++){
        cartasviradas[i].classList.remove('virada');
        cartasviradas[i].classList.remove('aVerificar');
    }
    
}
