import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Cadastro from './pages/cadastro';
import Detalhes from './pages/detalhes';
import Checkout from './pages/checkout';
import Login from './pages/login';

export default function RoutesConfig() {
    return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detalhes' element={<Detalhes />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
      </Routes>
    );
  }