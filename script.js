const TELA = document.querySelector('.tela');
const BOTAOADICIONAR = document.querySelector('.entrada #add');
const BOTAOORGANIZAR = document.querySelector('.entrada #organizar');
const NOVONUMERO = document.querySelector('.entrada input');
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

//Arruma a lista
function organizarLista() {
    //uma variável para o objeto atua e outro para o anterior, se o atual tiver um valor menor que o anterior, eles terão seus tamanhos trocados;
    let barraAnterior;
    let barraAtual;
    let barrasOrdem = document.querySelectorAll('.tela div')

    while (1) {

        let comparaLista = true;

        for (let contadora = 1; contadora <= lista.length; contadora++) {
            barraAnterior = lista[contadora - 2];
            barraAtual = lista[contadora - 1];

            if (barraAtual < barraAnterior) {
                lista[contadora - 2] = barraAtual;
                lista[contadora - 1] = barraAnterior;

                barrasOrdem[contadora - 2].style.height = (lista[contadora - 2] / (alturaMaximoBarras / 100)) + "%";
                barrasOrdem[contadora - 1].style.height = (lista[contadora - 1] / (alturaMaximoBarras / 100)) + "%";

                comparaLista = false;
            }
        }

        if (comparaLista == true) {
            break;
        }
    }
}

// verifica o valor do input assim que o botão é clicado
BOTAOADICIONAR.addEventListener('click', verificarNumeroNovo, false);

//organiza a lista
BOTAOORGANIZAR.addEventListener('click', organizarLista, false);