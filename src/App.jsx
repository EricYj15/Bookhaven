import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Menu from './pages/Menu';


function App() {
  return (
  <div>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contato" element={<Contato/>}/>

          </Routes>
    </BrowserRouter>
  </div>
    )
}
export default App