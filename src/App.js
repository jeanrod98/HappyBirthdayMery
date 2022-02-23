import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Hoja_1 from "./components/Hoja1";
import DetalleOculto from "./components/DetalleOculto";


function App() {
  return (
    <Router>
      <Routes>
      {/* happyBirthdayMaria */}
        <Route path="/"  element={<Inicio/>} />
        <Route path="/24021979"  element={<Hoja_1/>} />
        <Route path="/detalleOculto"  element={<DetalleOculto/>} />
      </Routes>
    </Router>
  );
}

export default App;
