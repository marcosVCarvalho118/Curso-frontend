// Importa o StrictMode da biblioteca React.
import { StrictMode } from 'react'

// Importa a função createRoot da biblioteca React DOM.
// Ela é responsável por renderizar a aplicação React no navegador.
import { createRoot } from 'react-dom/client'

// Importa o arquivo de estilos globais da aplicação.
import './index.css'

// Importa o componente principal da aplicação.
import App from './App.jsx'


// Procura no HTML o elemento com id="root",
// cria a raiz da aplicação React e renderiza o conteúdo.
createRoot(document.getElementById('root')).render(

<StrictMode>
{/* Ativa verificações e avisos durante o desenvolvimento.
Não altera o funcionamento da aplicação em produção. */}

<App />
{/* Exibe o componente principal da aplicação. */}

</StrictMode>,

)