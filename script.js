const TELA = document.querySelector('.tela');
const BOTAO = document.querySelector('.adicionar button');
const NOVONUMERO = document.querySelector('.adicionar input');
var valorNovoNumero = NOVONUMERO.valueAsNumber;

var lista = new Array(3, 1, 2, 12, 10, 15, 14, 2);

var ladoBarras = 95 / lista.length;

// Descobre a barra que terá o maior valor
var alturaMaximoBarras;

function descobrirMaior() {

    let maiorNumeroDaLista = null;

    for (let contadora = 1; contadora <= lista.length; contadora++) {
        if (lista[contadora - 1] > maiorNumeroDaLista) {
            maiorNumeroDaLista = lista[contadora - 1];
        }
    }

    alturaMaximoBarras = maiorNumeroDaLista;
}

descobrirMaior();

// cria as barras no HTML
function criarBarras() {
    for (let contadora = 1; contadora <= lista.length; contadora++) {
        novaBarra = document.createElement('div')
        
        TELA.appendChild(novaBarra)

        novaBarra.style.height = (lista[contadora - 1] / (alturaMaximoBarras / 100)) + "%";
        novaBarra.style.width = ladoBarras + "%";

    }
}

criarBarras();

//Verifica o novo número e o coloca no arrey
function verificarNumeroNovo() {
    valorNovoNumero = NOVONUMERO.valueAsNumber;
    lista.push(valorNovoNumero);
    ladoBarras = 95 / lista.length;
    descobrirMaior();

    //tira todas as barras e as recria novamente com uma adição
    TELA.innerHTML = '';
    criarBarras();
}

// verifica o valor do input assim que o botão é clicado
BOTAO.addEventListener('click', verificarNumeroNovo, false);