import {BrowserRouter as Router, Outlet, Route, Routes} from 'react-router-dom';
import Header from "./components/Header.jsx";
import AlterarCliente from './pages/AlterarCliente.jsx';
import CriaCliente from "./pages/CriaCliente.jsx";
import InativarCliente from './pages/InativarCliente.jsx';
import AlterarSenha from './pages/AlterarSenha.jsx';
import ListaClientes from "./pages/ListaClientes.jsx";
import {ClienteContextProvider} from "./contexts/ClienteContext.tsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListaClientes />} />
          <Route path="/criacliente" element={<CriaCliente />} />
          <Route path="/alterarcliente" element={<AlterarCliente />} />
          <Route path="/inativarCliente" element={<InativarCliente/>}/>
          <Route path="/alterarSenha" element={<AlterarSenha/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

function Layout() {
  return (
    <div>
      <ClienteContextProvider>
        <Header />
        <Outlet />
      </ClienteContextProvider>
    </div>
  )
}

export default App;