    var ListaDePecas = ["AB", "Peça 2", "peça 3", "peça 4", "peça 5", "peça 6", "peça 7", "peça 8", "peça 9", "peça 10", "peça 11"]
    console.log("quantidade de peças");
//A linha de cima é apenas um informação apenas.

if(ListaDePecas.length > 10 ){
    console.log ("capacidade insuficiente");
} else {
    console.log("as peças podem ser cadastradas")
}


console.log ("quantidade de caracteres");
//O USO DO [] serve apena para falar de uma aposição
for (var contador = 0; contador < ListaDePecas.length; contador++ ){
    var pecaAtual = ListaDePecas [contador];

    if (pecaAtual.length < 3 ) {
        console.log (pecaAtual + ": a peca possui nome inferior a 3 caracteres e não poder ser cadastrada")
    }
    else {
        console.log(pecaAtual + ": a peca pode ser cadastrada")
    }
}

console.log ("Peso da peça");

var PesoDaPecaEmGramas = 50;

    if (PesoDaPecaEmGramas > 100){
        console.log ("peso insuficiente");
    } else{ 
        console.log ("peso suficiente")
    }