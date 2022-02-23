import {React} from "react";
import {useNavigate} from 'react-router-dom'
import "../css/estilos.css";
import flor from "../image/flores-esquina3.png";
import marie from "../image/marie.png"
// import imagenM from "../image/letraM.png"
import wave from "../image/wave.png"
import flecha from "../image/flecha.svg"

import { animateScroll as scroll } from "react-scroll"

function Inicio() {
  const navigate = useNavigate()

//  para ir al final de la pagina al cargar
    scroll.scrollToBottom();
const goPage = (e) => {
  e.preventDefault();
  const fecha  =  document.getElementById("input-fecha").value;
  
  if(fecha === '1979-02-24'){
    navigate("/24021979")
  }else{
    console.log("Fecha Incorrecta");
  }
}



  return (
    <div className="inicio">
      {/* <div className="header">
        
      </div> */}
      {/* Flores esquina superior izquierda  */}
      <div className="flores">
        
        <img className="flor-2" src={flor} alt="flor estilo" />
        <img className="flor-1" src={flor} alt="flor estilo" />
      </div>

      
      
      {/* contenedor para formulario */}
      <div className="imagen-input">
        <img
          src={marie}
          alt="cumpleañera"
        />
        <div className="seccion-fecha">

        <input id="input-fecha" className="input-fecha" type="date" />
        {/* to='/240219796' */}
        <ion-icon onClick={goPage} src={flecha}  name="Go!" />
        </div>
        <label className="aviso">* Por favor ingrese la fecha de cumpleaños para continuar!!</label>
      </div >
        
        <div className="curvas-footer">

              {/* <img className="letraM" src={imagenM} alt="" /> */}
            <img className="svg" src={wave} alt="" />
        </div>

        {/* <div className="imagen-m">
          <img src={imagenM} alt="" />
        </div> */}


    </div>
  );
}

export default Inicio;
