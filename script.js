let quantidadeCartas = 0;
let contador = 0;
let parescertos = 0;
let jogadas = 0;
const vetorTodasAsImagens = ["bobrossparrot.gif", "bobrossparrot.gif", "explodyparrot.gif","explodyparrot.gif","fiestaparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "metalparrot.gif", "revertitparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "tripletsparrot.gif", "unicornparrot.gif", "unicornparrot.gif"];   // todas as imagens duplicadas dois a dois
const vetorImagensAUsar = [];

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
    <div class=" face frente"><img src="${vetorImagensAUsar[i]}"/></div>
    <div class="face verso"><img src="back.png"/></div>
</div>`
}//CAMPO CARTAS PREENCHIDO

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
function compara(){
    const cartasviradas = document.querySelectorAll('.aVerificar');
    const cartaA = cartasviradas[0].innerHTML;
    const cartaB = cartasviradas[1].innerHTML;
    if(cartaA == cartaB){
        for(let i=0; i<cartasviradas.length; i++){
            cartasviradas[i].classList.add('acerto');
            cartasviradas[i].classList.remove('aVerificar');
            cartasviradas[i].setAttribute('onclick', '');
            //cartadavez.onclick = "alert(oi)";
            console.log("guardado em cartas viradas" +cartasviradas[i])            
        }
        parescertos = parescertos +2;
        console.log(parescertos);
        if(parescertos === quantidadeCartas){
            alert(`Você ganhou em ${jogadas} jogadas!`);
        }

    }
    else{
        setTimeout(desvirar, 1000);
    }

}

function desvirar (){
    const cartasviradas = document.querySelectorAll('.aVerificar');
    for(let i=0; i<cartasviradas.length;i++){
        cartasviradas[i].classList.remove('virada');
        cartasviradas[i].classList.remove('aVerificar');
    }
    
}
/*function desvirar(){
    const viradas = document.querySelectorAll(".virada");
    console.log(viradas);
    for(let i=0; i<viradas.length;i++){
        console.log(viradas[i]);
        viradas[i].classList.remove('virada');
    }
    contador = 0;
}


/*function desvirarCarta(){
    let virada = document.querySelector('.verso.aVerificar');
    virada.classList.remove('verso');
    virada = document.querySelector('.aVerificar');
    virada.classList.remove('aVerificar');
    //DESVIRAR CARTA QUE CONTEM AS CLASSES 'VERSO' E 'A VERIFICAR'
}
function compara(ultimo, atual){
    
    if(ultimo.innerHTML !== atual.innerHTML){
        desvirarCarta();
        desvirarCarta();
    }
    else{//se são cartas iguais
        ultimo.classList.add('acerto');
        ultimo.classList.remove('aVerificar');
        atual.classList.add('acerto');
        atual.classList.remove('aVerificar');
    }
}

function virarCarta(cartaClicada){
    const verificaSePrimeira = document.querySelector('.verso'); //procura se já tem carta virada
    if(verificaSePrimeira !=null){ //executa SE JÁ TEM CARTA VIRADA
        if(!(cartaClicada.classList.contains('verso'))){//SE O CLIQUE NÃO FOI NA MESMA CARTA, SE NÃO FOI ENTRA NO IF
            cartaClicada.classList.add('verso');
            cartaClicada.classList.add('aVerificar');

            compara(ultimoClique, cartaClicada);        
        }

        else{ alert("Escolha outra carta");}; //SE CLIQUE FOI NA MESMA CARTA        
    }
    //SE NÃO TEM CARTA VIRADA - PRIMEIRA CARTA DA JOGADA
    else{//virar a carta clicada - se primeira do par, fica virada até a segunda ser clicada
        cartaClicada.classList.add('verso');
        cartaClicada.classList.add('aVerificar');
        ultimoClique = cartaClicada;

    }
               
}*/
    
