// Seleciona no HTML o elemento com id "pokemon-container"
// É dentro dele que os cards dos Pokémon serão exibidos.
const container = document.getElementById("pokemon-container");


// Objeto que relaciona cada tipo de Pokémon com uma cor.
const cores = {
fire:"#F08030",
water:"#6890F0",
grass:"#78C850",
electric:"#F8D030",
psychic:"#F85888",
ice:"#98D8D8",
dragon:"#7038F8",
dark:"#705848",
fairy:"#EE99AC",
fighting:"#C03028",
poison:"#A040A0",
ground:"#E0C068",
flying:"#A890F0",
bug:"#A8B820",
rock:"#B8A038",
ghost:"#705898",
steel:"#B8B8D0",
normal:"#A8A878"
};


// Função que procura uma estatística específica do Pokémon.
// Se ela não existir, retorna 0.
function getStat(stats, nome){

// Procura dentro do vetor "stats" o objeto que possui
// o nome da estatística informado.
return stats.find(s => s.stat.name === nome)?.base_stat ?? 0;

}


// Função responsável por criar um card de Pokémon.
function criarCard(info){

// Obtém o primeiro tipo do Pokémon.
const tipoPrincipal = info.types[0].type.name;

// Procura a cor correspondente ao tipo.
// Caso não exista, utiliza a cor cinza.
const cor = cores[tipoPrincipal] ?? "#555";

// Obtém a imagem oficial do Pokémon.
// Caso não exista, utiliza a imagem padrão.
// Se nenhuma existir, retorna uma string vazia.
const imagem =
info.sprites?.other?.["official-artwork"]?.front_default ||
info.sprites?.front_default ||
"";

// Cria uma nova div.
const card = document.createElement("div");

// Adiciona a classe "card".
card.classList.add("card");

// Define o fundo do card utilizando um gradiente.
card.style.background = `linear-gradient(135deg, ${cor}, ${cor}CC)`;

// Insere todo o conteúdo HTML do card.
card.innerHTML = `

<img src="${imagem}" alt="${info.name}">
<!-- Exibe a imagem do Pokémon. -->

<h2>${info.name}</h2>
<!-- Exibe o nome do Pokémon. -->

<div class="tipo">
${info.types.map(t => t.type.name).join(" • ")}
</div>
<!-- Exibe todos os tipos do Pokémon separados por "•". -->

<div class="info">

<p>❤️ HP: ${getStat(info.stats, "hp")}</p>
<!-- Exibe o HP. -->

<p>⚔️ Ataque: ${getStat(info.stats, "attack")}</p>
<!-- Exibe o ataque. -->

<p>🛡️ Defesa: ${getStat(info.stats, "defense")}</p>
<!-- Exibe a defesa. -->

<p>⚡ Velocidade: ${getStat(info.stats, "speed")}</p>
<!-- Exibe a velocidade. -->

<p>📏 Altura: ${info.height / 10} m</p>
<!-- Converte a altura para metros. -->

<p>⚖️ Peso: ${info.weight / 10} kg</p>
<!-- Converte o peso para quilogramas. -->

</div>

`;

// Retorna o card criado.
return card;

}


// Função principal responsável por carregar os Pokémon.
async function carregarPokemons(){

// Exibe uma mensagem enquanto os dados estão sendo carregados.
container.innerHTML = "<p>Carregando...</p>";

try{

// Faz uma requisição para a PokéAPI buscando os 100 primeiros Pokémon.
const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");

// Verifica se a resposta da API foi bem-sucedida.
if(!resposta.ok){

// Caso ocorra erro, gera uma exceção.
throw new Error("Erro na API");

}

// Converte a resposta para JSON.
const dados = await resposta.json();

// Limpa a mensagem "Carregando...".
container.innerHTML = "";

// Cria um vetor de promessas para buscar os detalhes
// de cada Pokémon individualmente.
const promessas = dados.results.map(pokemon =>

fetch(pokemon.url).then(res => res.json())

);

// Aguarda todas as requisições terminarem.
const pokemons = await Promise.all(promessas);

// Percorre todos os Pokémon retornados.
pokemons.forEach(info => {

// Cria um card.
const card = criarCard(info);

// Adiciona o card ao container.
container.appendChild(card);

});

}catch(erro){

// Exibe o erro no console.
console.error("Erro ao carregar Pokémon:", erro);

// Exibe uma mensagem de erro na página.
container.innerHTML = "<h2>Erro ao carregar dados.</h2>";

}

}


// Chama a função para iniciar o carregamento dos Pokémon
// quando o arquivo JavaScript é executado.
carregarPokemons();