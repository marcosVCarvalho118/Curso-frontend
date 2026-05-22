import CartaoPerfil from './components/CartaoPerfil.jsx'
import './App.css'
import Header from './components/Header.jsx'
import funcionarios from './data/funcionarios.js'

/* const habilidades = ['JavaScript', 'JavaScript', 'JavaScript',]
const nome = "Diego Cezar"
const cargo = "Instrutor Senac RJ"
const bio = "Laura é uma criança" */



function App() {
  return (
    <div className="app">
      <Header />
      <h1>Nossa Equipe</h1>
      <div className="grade">
        {funcionarios.map(funcionarios =>(
          <CartaoPerfil
          key={funcionarios.nome}
          imagem = {funcionarios.img}
          nome ={funcionarios.nome}
          cargo = {funcionarios.cargo}
          bio = {funcionarios.bio}
          habilidades ={funcionarios.habilidade}
          />
        ))}
  </div>   
  </div>  
  )
  }

export default App
