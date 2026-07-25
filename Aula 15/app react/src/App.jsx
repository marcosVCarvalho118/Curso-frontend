// Importa o componente CartaoPerfil.
import CartaoPerfil from './components/CartaoPerfil.jsx'

// Importa o arquivo de estilos da aplicação.
import './App.css'

// Importa o componente Header.
import Header from './components/Header.jsx'

// Importa o arquivo com os dados dos funcionários.
import funcionarios from './data/funcionarios.js'


/* Código comentado (não será executado).

const habilidades = ['JavaScript', 'JavaScript', 'JavaScript',]
// Cria um vetor de habilidades.

const nome = "Diego Cezar"
// Armazena o nome.

const cargo = "Instrutor Senac RJ"
// Armazena o cargo.

const bio = "Laura é uma criança"
// Armazena a biografia.

*/


// Cria o componente principal da aplicação.
function App() {

// Retorna os elementos que serão exibidos na tela.
return (

<div className="app">
{/* Container principal da aplicação. */}

<Header />
{/* Exibe o componente Header. */}

<h1>Nossa Equipe</h1>
{/* Título da página. */}

<div className="grade">
{/* Área onde os cartões dos funcionários serão exibidos. */}

{/* Percorre o vetor funcionarios. */}
{/* Para cada funcionário cria um componente CartaoPerfil. */}

{funcionarios.map(funcionarios => (

<CartaoPerfil

key={funcionarios.nome}
// Chave única utilizada pelo React.

imagem={funcionarios.img}
// Envia a imagem do funcionário.

nome={funcionarios.nome}
// Envia o nome do funcionário.

cargo={funcionarios.cargo}
// Envia o cargo.

bio={funcionarios.bio}
// Envia a biografia.

habilidades={funcionarios.habilidade}
// Envia o vetor de habilidades.

/>

))}

</div>

</div>

)

}

// Exporta o componente App para ser utilizado em outros arquivos.
export default App