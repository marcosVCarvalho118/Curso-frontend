// Declara uma variável que pode ter seu valor alterado.
let coisa = "alguma";

// Declara uma constante, cujo valor não pode ser alterado.
const Treco = "aquilo";

// Declara um vetor (array) com três elementos.
const VETOR = ["A", "B", "C"];

// Exibe no console o elemento da posição 2 do vetor.
// Lembre-se: a contagem começa em 0.
// Posição 0 = "A"
// Posição 1 = "B"
// Posição 2 = "C"
console.log(VETOR[2]);


// Declara uma matriz (array de arrays) chamada clientes.
const clientes = [
    ["Alan", 39, "Professor"],
    ["Beatriz", 27, "Tatuadora"],
    ["Carla", 51, "Cabeleireiro"]
];

// Exibe o elemento da linha 0 e coluna 0.
// Linha 0 = ["Alan", 39, "Professor"]
// Coluna 0 = "Alan"

console.log(clientes[0][0]);

// Estrutura da matriz:
//
// Linha 0 → ["Alan", 39, "Professor"]
// Linha 1 → ["Beatriz", 27, "Tatuadora"]
// Linha 2 → ["Carla", 51, "Cabeleireiro"]
//
// Colunas:
// Coluna 0 = Nome
// Coluna 1 = Idade
// Coluna 2 = Profissão
//
// Exemplos:
//
// clientes[1][0] → "Beatriz"
// clientes[1][1] → 27
// clientes[1][2] → "Tatuadora"
//
// clientes[2][0] → "Carla"
// clientes[2][1] → 51
// clientes[2][2] → "Cabeleireiro"