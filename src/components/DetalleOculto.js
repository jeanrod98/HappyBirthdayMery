import React, { useState } from 'react'
import styled from 'styled-components'
import Cargando from './Cargando'
import Detalle from '../image/detalle.png'

function DetalleOculto() {
  //Inicia la pantalla al final para moviles
  // scroll.scrollToBottom();

//Ocultar Spinner en 3s
  const [estado, setEstado] = useState(true)

  setTimeout(() => {
    setEstado(false)
  }, 3000);

  return (
    <>
    { estado 
    ?
    <Cargando>

    </Cargando>
      :
    <Contenedor>
      <img src={Detalle} alt="" />
      <Contenido>
        {/* Palabras  */}
        <p>Mi negra, hoy en este día tan especial quiero que sepas lo orgulloso que es ser tu padre. <br/>
        Gracias por estar siempre pendiente de mí y por mantener siempre esa personalidad única,
        bonita y brillante que te caracteriza. <br/>Deseo con todo mi corazón que nunca
        cambies tu forma de pensar y de actuar, <br/>sin duda alguna eres el tesoro
        que todo padre desea tener y doy gracias a Dios que me dio una bendición como lo eres tú.<br/>
        Att<br/>
        El ángel que siempre te cuidará<br/>
        Máximo Choez</p>
      </Contenido>
    </Contenedor>
    }

    </>
  )
}

export default DetalleOculto

const Contenedor = styled.div`
  background: #e6e6e6;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  

  img{
    width: 300px;
    height: auto;
    // margin-bottom: 30px;
  }

  //animacion para que aparesca el pergamino de arriba hacia abajo
  animation: show 1s;

  @keyframes show{
    0%{
      transform: translateY(-150vh);
    }
  }

  @media screen and (max-width:810px) {
    padding-top: 10px;
    padding-bottom: 10px;

  }

  
`;
const Contenido = styled.div`
  width: 80%;
  height: 16rem;
  border-radius: 50px;
  background: #e6e6e6;
  box-shadow:  -24px 24px 48px #adadad,
              24px -24px 48px #ffffff;
              

  @media screen and (max-width:810px) {
    width: 90%;
    min-height: 25rem;
    padding: 5px;
    p{
      font-size: 14px;
    }
  }

  p{
    
    font-family: 'Redressed', cursive;
    font-style: center;
    font-size: 20px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;