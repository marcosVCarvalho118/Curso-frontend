// Importa o componente CartaoPerfil.
// (Neste arquivo ele foi importado, mas não está sendo utilizado.)
import CartaoPerfil from './components/CartaoPerfil.jsx'

// Importa o arquivo de estilos da aplicação.
import './App.css'

// Importa o componente Header.
import Header from './components/Header.jsx'

// Importa o arquivo com os dados dos funcionários.
// (Também não está sendo utilizado neste arquivo.)
import funcionarios from './data/funcionarios.js'

// Importa o componente do formulário de contato.
import FormContato from './components/FormContato.jsx'

// Importa o componente que exibe a seção da equipe.
import SecaoEquipe from './components/secaoEquipe.jsx'

// Importação comentada.
// Caso seja descomentada, importará o componente Contador.
// import Contador from './components/ExemploUseState.jsx'


/* Código comentado (não será executado).

const habilidades = ['JavaScript', 'JavaScript', 'JavaScript',]
// Criaria um vetor de habilidades.

const nome = "Diego Cezar"
// Armazenaria o nome.

const cargo = "Instrutor Senac RJ"
// Armazenaria o cargo.

const bio = "Laura é uma criança"
// Armazenaria uma biografia.

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
{/* Título da seção da equipe. */}

<SecaoEquipe />
{/* Exibe o componente responsável por mostrar os membros da equipe. */}

<h1>Formulário de Contato</h1>
{/* Título da seção do formulário. */}

<FormContato />
{/* Exibe o formulário de contato. */}

</div>

)

}

// Exporta o componente App para ser utilizado em outros arquivos.
export default App