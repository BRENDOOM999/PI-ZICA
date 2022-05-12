
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./componentes/Menu";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import TelaInicial from './peiges/Deputados/TelaInicial';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DeputadosDetalhes from './peiges/Deputados/DeputadosDetalhes';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Menu/>
        <Container>
          <Routes>

            <Route path="/telainicial" element={<TelaInicial />} />
            <Route path="/detalhesdeputados/:id" element={<DeputadosDetalhes/>}/>

          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
