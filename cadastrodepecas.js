    var ListadePecas = ["AB" , "Peças 2", "Peças 3" , "Peças 4" , "Peças 5" , "Peças 6" , "Peças 7" , "Peças 8" , "Peças 9" , "Peças 10" , "Peças 11"]
    console.log("Quantidade de peças");
    //A linha de cima é uma informção apenas.

if (ListadePecas.length > 10 ){
    console.log("Capacidade insuficiente");

}else {
    console.log("As peças podem ser cadastradas")
}

console.log("Quantidade de caracteres");

// Criamos a variavel contador =0, sempre que a variavel for menor que alista de peças, o contador ++ sempre adiciona mais 1.
for (var contador = 0; contador < ListadePecas.length; contador++){
    var PecaAtual = ListadePecas[contador];

if (PecaAtual.length < 3){
console.log(PecaAtual + ": a peça possui nome inferior a 3 caracteres e não pode ser cadastrada");
}
else {
console.log(PecaAtual + " a peça pode ser cadastrada")
}
}
console.log("Peso da peça");

var PesodaPecaemGramas =50;

if (PesodaPecaemGramas >100){
    console.log("peso insulficiente");
} else{
    console.log("pelo suficiente")
}
