import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Rodape from "./Components/Rodape"
import Inicio from "./Pages/Inicio"
import UncontrolledExample from "./Pages/Inicio/Carrosel"
import Contato from "./Pages/SubPages/Contato"
import Produtos from "./Pages/SubPages/Produtos"
import Sobre from "./Pages/SubPages/Sobre"
 
export default function AppRoute () {
    return(
        <Router>
            <UncontrolledExample/>
          <NavBar/>
            <Routes>
                <Route path='/' element={<Inicio/>}  />
                <Route path='/contato' element={<Contato/>}  />
                <Route path='/produtos' element={<Produtos/>}  />
                <Route path='/sobre' element={<Sobre/>}  />
            </Routes>
            <Rodape/>
        </Router>
    )
}