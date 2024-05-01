import ReactDOM from 'react-dom/client'
//import './index.css'
//importaçao router dom
import Rotas from './components/router/index.tsx'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Rotas />

  </Router>,
)
