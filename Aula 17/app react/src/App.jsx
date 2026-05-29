import CartaoPerfil from './components/CartaoPerfil.jsx'
import './App.css'
import Header from './components/Header.jsx'
import funcionarios from './data/funcionarios.js'
import FormContato  from './components/FormContato.jsx'
import SecaoEquipe from './components/secaoEquipe.jsx'
// import Contador from './components/ExemploUseState.jsx'
/* const habilidades = ['JavaScript', 'JavaScript', 'JavaScript',]
const nome = "Diego Cezar"
const cargo = "Instrutor Senac RJ"
const bio = "Laura é uma criança" */



function App() {
  return (
    <div className="app">
      <Header />
      <h1>Nossa Equipe</h1>
  <SecaoEquipe/>
<h1> Formulário de Contato</h1>
<FormContato/>
  </div>  
  )
  }

export default App
