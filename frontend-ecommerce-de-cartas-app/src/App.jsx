import {BrowserRouter as Router, Outlet, Route, Routes} from 'react-router-dom';
import Header from "./components/Header.jsx";
import AlterarCliente from './pages/AlterarCliente.jsx';
import CriaCliente from "./pages/CriaCliente.jsx";
import {ClienteContextProvider} from "./contexts/ClienteContext";

function App() {
  return (
    <ClienteContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CriaCliente />} />
            <Route path="/criacliente" element={<CriaCliente />} />
            <Route path="/alterarcliente" element={<AlterarCliente />} />
          </Route>
        </Routes>
      </Router>
    </ClienteContextProvider>
  )
}

function Layout() {
  return (
    <div>
      <Header />
        <Outlet />
    </div>
  )
}

export default App;