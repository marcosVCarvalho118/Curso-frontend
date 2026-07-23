// ==============================
// CRIAÇÃO DOS ARRAYS
// ==============================

// Cria um array contendo três itens do tipo texto (strings).
const listaCompras = ["Tomate", "Cebola", "Farinha"];

// Cria um array com tipos de dados diferentes.
// String, número e valor booleano.
const misturado = ["Tomate", 8, true];


// ==============================
// ADICIONANDO ELEMENTOS
// ==============================

// Adiciona "Limão" ao final do array.
listaCompras.push("Limão");


// ==============================
// EXIBINDO O ARRAY
// ==============================

// Mostra todos os elementos do array.
console.log(listaCompras);

// Mostra a quantidade de elementos existentes no array.
console.log(listaCompras.length);


// ==============================
// ALTERANDO ELEMENTOS
// ==============================

// Altera o primeiro elemento do array.
// O índice 0 deixa de ser "Tomate" e passa a ser "Abacate".
listaCompras[0] = "Abacate";

// Adiciona um elemento na posição 4.
// Caso essa posição não exista, o JavaScript cria automaticamente.
listaCompras[4] = "Limão";


// ==============================
// REMOVENDO ELEMENTOS
// ==============================

// Remove o último elemento do array e o exibe no console.
console.log(listaCompras.pop());

// Mostra o array após a remoção.
console.log(listaCompras);


// ==============================
// PERCORRENDO O ARRAY COM FOR
// ==============================

// Estrutura do for:
// início; condição; incremento
//
// let i = 0          -> começa no índice 0
// i < 3              -> executa até o índice 2
// i++                -> aumenta 1 a cada repetição

for (let i = 0; i < 3; i++) {

    // Exibe o índice e o elemento correspondente.
    console.log(`Index ${i}: ${listaCompras[i]}`);

}


// ==============================
// PERCORRENDO O ARRAY AO CONTRÁRIO
// ==============================

// Começa no último índice do array.
for (let i = listaCompras.length - 1; i >= 0; i--) {

    // Exibe os elementos do último para o primeiro.
    console.log(`Index ${i}: ${listaCompras[i]}`);

}


// ==============================
// FOR...OF
// ==============================

// Percorre todos os elementos do array.
// A variável "item" recebe cada elemento automaticamente.
for (const item of listaCompras) {

    console.log(item);

}


// ==============================
// INDEXOF()
// ==============================

// Procura o elemento "Abacate" dentro do array.
// Retorna o índice onde ele está.
// Caso não exista, retorna -1.
console.log(listaCompras.indexOf("Abacate"));


// ==============================
// WHILE
// ==============================

// Cria uma variável de controle.
let x = 0;

// Enquanto x for menor que 10,
// o bloco será executado.
while (x < 10) {

    // Exibe o valor atual de x.
    console.log(x);

    // Incrementa x em 1.
    // Sem este incremento o while entraria em um laço infinito.
    x++;

}