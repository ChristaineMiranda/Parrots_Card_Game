let quantidadeCartas = 0;
while((quantidadeCartas<4) || (quantidadeCartas>14) || (quantidadeCartas%2 != 0)){
    quantidadeCartas = Number(prompt("Escolha a quantidade de cartas para jogar")); 
}
const areaCartas = document.querySelector('.campoCartas')
for(let i=0; i<quantidadeCartas; i++){
    areaCartas.innerHTML = areaCartas.innerHTML + `<div class="carta frente" onclick ="virarCarta(this)"><img src="back.png"/></div>`

}

function virarCarta(cartaClicada){
    cartaClicada.classList.add('verso');

}
