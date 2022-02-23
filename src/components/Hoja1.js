import React, { useState } from 'react'
import letter from "../image/carta.png"
import pergamino from "../image/pergamino.png"
import Modal from './Modal'
import styled from "styled-components";

function Hoja1() {

  // Estado para el modal 
  const [estadoModal, cambiarModal] = useState(false);

  return (
    <div className='Hoja1'>
        <div className="letter" onClick={() => cambiarModal(!estadoModal)}>

            <img src={letter} alt="" />

    
        </div>
        {/* Modal para redactar la carta  */}
        <Modal
        estado={estadoModal}
        cambiarEstado={cambiarModal} 
        titulo = 'Carta'
        mostrarHeader = {false}
        mostrarOverlay = {true}
        posicionModal = {'flex-start'}
        paddingModal = {'0px'}
        >
           {/* Aqui va el contenido  */}
           <Imagen src={pergamino} alt="" />

        </Modal> 

      

        

    </div>
  )

  
}

export default Hoja1

const Imagen = styled.img`
  width: 100%;
  height: auto;
  
`;

