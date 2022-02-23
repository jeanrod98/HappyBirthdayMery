import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Modal = ({
  children,
  estado,
  cambiarEstado,
  titulo = "Titulo",
  mostrarHeader,
  mostrarOverlay,
  posicionModal,
  paddingModal
}) => {

  const navigate = useNavigate();
  return (
    <>
      {estado && (
        <Overlay mostrarOverlay = {mostrarOverlay} posicionModal={posicionModal}>
          <ContenedorModal
          paddingModal={paddingModal}
          >
            {mostrarHeader && (
              <EncabezadoModal>
                <h3>{titulo}</h3>
              </EncabezadoModal>
            )}

          <EnlaceContenedor>
              <Enlace onClick={() => {navigate('/detalleOculto')}}></Enlace>
          </EnlaceContenedor>
            <BotonCerrar onClick={() => cambiarEstado(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </BotonCerrar>
            {/* Aqui va el contenido del modal  */}
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.mostrarOverlay ? 'rgba(0, 0, 0, 0.5);' : 'rgba(0, 0, 0, 0);'}
  display: flex;
  align-items: ${props  => props.posicionModal ? props.posicionModal : 'center'};
  justify-content: center;

    
  @media screen and (max-width:800px) {
    
    align-items: ${props  => props.posicionModal ?  'center' : props.posicionModal };

  }
  
  
`;
const ContenedorModal = styled.div`
  width: 44%;
  min-height: 100px;
  background: rgba(0, 0, 0, 0);
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: ${props => props.paddingModal ? props.paddingModal : '20px'}20px;

//animacion para que aparesca el pergamino de arriba hacia abajo
  animation: show 1s;

  @keyframes show{
    0%{
      transform: translateY(-150vh);
    }
  }

  @media screen and (max-width:810px) {
    width: 100%;
  }
  
`;
const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;

  h3 {
    font-weight: 600;
    font-size: 16px;
    color: #1766dc;
  }
`;
const BotonCerrar = styled.button`
  position: absolute;
  background: none;
  top: 10px;
  right: 40px;
  width: 68px;
  border: none;
  height: 68px;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #000;
  font-weight: 600;

  &:hover {
   
    color: #f2f2f2;
  }

  svg {
    width: 70%;
    height: 70%;
  }

  @media screen and (max-width:810px) {
    top: 15px;
    right: 30px;
    width: 38px;
    height: 38px;
  }
`;

const EnlaceContenedor = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  
  
`;
const Enlace = styled.div`
margin: 0;
padding: 0;
position: absolute;
width: 60%;
height: 13%;
background: rgba(0,0,0,0);
cursor: pointer;



`;
