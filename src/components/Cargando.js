import React from 'react'
import styled from 'styled-components'

function Cargando() {
  return (
    <ContenedorCargando>
        <Spinner/>
        
        <p>Obteniendo Datos . . .</p>
    </ContenedorCargando>
  )
}

export default Cargando

const ContenedorCargando  = styled.div`
// @import url('https://fonts.googleapis.com/css2?family=Redressed&display=swap');
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 

    p{
        color: rgba(0,0,0,.5);
        font-family: 'Redressed', cursive;
        font-style: italic;
        font-size: 20px;
        font-weight: 600;
    }
`;

const Spinner = styled.div`
    width: 80px;
    height: 80px;
    border-top: 2px solid #722672;
    border-right: 2px solid transparent;
    border-radius: 50%; 
    margin-bottom: 20px;

    animation: spinner 0.7s ease infinite;
  
    @keyframes spinner{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`;