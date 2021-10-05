var ListadePecas = [
  "AB",
  "Peça2",
  "Peça3",
  "Peça4",
  "Peça5",
  "Peça6",
  "Peça7",
  "Peça8",
  "Peça9",
  "Peça10",
  "Peça11",
];
console.log("Quantidade de peças");
if (ListadePecas.length > 10) {
  console.log("Capacidade insuficiente");
} else {
  console.log("As peças podem ser cadastradas");
}
console.log("Quantidade de caracteres");
// Criamos a variavel contador =0, sempre que a variavel for menor que alista de peças, o contador ++ sempre adiciona mais 1.
for (var contador = 0; contador < ListadePecas.length; contador++) {
  var PecaAtual = ListadePecas[contador];
  if (PecaAtual.length < 3) {
    console.log(
      PecaAtual +
        ": a peça possui nome inferior a 3 caracteres e não pode ser cadastrada"
    );
  } else {
    console.log(PecaAtual + " a peça pode ser cadastrada");
  }
}
console.log("Peso da peça");
var PesodaPecaemGramas = 50;
if (PesodaPecaemGramas > 100) {
  console.log("peso insulficiente");
} else {
  console.log("peso suficiente");
}
