import './App.css'
import Header from "./components/Header.jsx";
import AlterarCliente from './pages/AlterarCliente.jsx';
/* import CriaCliente from "./pages/CriaCliente.jsx"; */

function App() {
  return (
    <>
      <Header/>
      {/* <CriaCliente/> */}
      <AlterarCliente/>
  
    </>
  )
}

export default App
