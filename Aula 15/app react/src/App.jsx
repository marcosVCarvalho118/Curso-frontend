import CartaoPerfil from './components/CartaoPerfil.jsx'
import './App.css'
import Header from './components/Header.jsx'
function App() {
  return (
    <div className="app">
      <Header />
      <h1>Nossa Equipe</h1>
      <div className="grade">
        <CartaoPerfil />
        <CartaoPerfil />
        <CartaoPerfil />
      </div>
    </div>
  )
}

export default App
