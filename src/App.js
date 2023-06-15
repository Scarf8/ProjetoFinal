import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cadastro from './pages/cadastro';
import Detalhes from './pages/detalhes';
import Header from './components/Header';
import Footer from "./components/Footer"
import RoutesConfig from './RoutesConfig';

function App() {
  return (
    <Router>    
      <Header />
      <RoutesConfig />
      <Footer />
    </Router>
  );
}

export default App;
