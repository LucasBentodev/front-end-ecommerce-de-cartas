import {BrowserRouter as Router, Outlet, Route, Routes} from 'react-router-dom';
import Header from "./components/Header.tsx";
import AlterarCliente from './pages/AlterarCliente.jsx';
import CriaCliente from "./pages/CriaCliente.jsx";
import InativarCliente from './pages/InativarCliente.jsx';
import AlterarSenha from './pages/AlterarSenha.jsx';
import ListaClientes from "./pages/ListaClientes.jsx";
import {ClienteContextProvider} from "./contexts/ClienteContext.tsx";
import AlterarEndereco from './pages/AlterarEndereco.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListaClientes />} />
          <Route path="/criacliente" element={<CriaCliente />} />
          <Route path="/listaclientes" element={<ListaClientes />} />
          <Route path="/alterarcliente/:id" element={<AlterarCliente />} />
          <Route path="/inativarCliente" element={<InativarCliente/>}/>
          <Route path="/alterarSenha/:id" element={<AlterarSenha/>}/>
          <Route path="/alterarEndereco/:id" element={<AlterarEndereco/>}/>
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