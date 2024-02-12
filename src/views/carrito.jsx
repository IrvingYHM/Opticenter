// Contenido.jsx
import { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import MiContenido from '../views/MiContenido'; // Importa tu nuevo componente

const tema = {
  fondo: '#f5f8fb',
  colorFondoCabecera: '#eb3449',
  colorTextoCabecera: '#fff',
  tamanoTextoCabecera: '20px',
  colorBurbujaBot: '#eb3449',
  colorTextoBot: '#fff',
  colorBurbujaUsuario: '#0cb3c9',
  colorTextoUsuario: '#fff',
};

export default class Contenido extends Component {
  render() {
    return (
    <ThemeProvider theme={tema}>
      <div className='mx-auto rounded-lg shadow-lg'>
        <div className='float-right'>
          <ChatBot
            steps={[
              {
                id: '1',
                message: '¡Hola! Soy tu asistente virtual de óptica. ¿Cómo te llamas?',
                trigger: '2',
              },
              {
                id: '2',
                user: true,
                validator: (value) => {
                  if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
                    return true;
                  } else {
                    return 'Por favor, ingresa un nombre válido.';
                  }
                },
                trigger: '3',
              },
              {
                id: '3',
                message: 'Hola {previousValue}, ¡encantado de conocerte! ¿En qué puedo ayudarte hoy?',
                trigger: '4',
              },
              {
                id: '4',
                message: '¿Necesitas algo de la óptica?',
                trigger: '5',
              },
              {
                id: '5',
                options: [
                  { value: 'y', label: 'Sí', trigger: '6A' },
                  { value: 'n', label: 'No', trigger: '6B' },
                ],
              },
              {
                id: '6A',
                message: '¡Genial! Cuéntame, ¿qué estás buscando en óptica?',
                trigger: 'seleccion',
              },
              {
                id: '6B',
                message: 'Lamento no poder ayudarte en este momento. ¿Hay algo más en lo que pueda asistirte?',
                end: true,
              },
              {
                id: 'seleccion',
                options: [
                  { value: 'f', label: 'Lentes de sol', trigger: '7A' },
                  { value: 'b', label: 'Lentes de lectura', trigger: '7B' },
                ],
              },
              {
                id: '7A',
                message: '¡Veo que te interesan los lentes de sol! ¿Buscas algún estilo en particular?',
                trigger: 'seleccionEstiloSol',
              },
              {
                id: '7B',
                message: '¡Veo que buscas lentes de lectura! ¿Necesitas una graduación específica?',
                trigger: 'seleccionGraduacionLectura',
              },
              {
                id: 'seleccionEstiloSol',
                options: [
                  { value: 'modernos', label: 'Modernos', trigger: '9Sol' },
                  { value: 'clasicos', label: 'Clásicos', trigger: '9Sol' },
                ],
              },
              {
                id: 'seleccionGraduacionLectura',
                options: [
                  { value: 'si', label: 'Sí', trigger: '9Lectura' },
                  { value: 'no', label: 'No', trigger: '9Lectura' },
                ],
              },
              {
                id: '9Sol',
                component: <MiContenido />, // Utiliza tu nuevo componente
                asMessage: true,
                trigger: 'preguntaVuelta',
              },
              {
                id: '9Lectura',
                component: <MiContenido />, // Utiliza tu nuevo componente
                asMessage: true,
                trigger: 'preguntaVuelta',
              },
              {
                id: 'preguntaVuelta',
                message: '¿Necesitas saber algo más?',
                trigger: 'respuestaVuelta',
              },
              {
                id: 'respuestaVuelta',
                options: [
                  { value: 'y', label: 'Sí', trigger: '6A' },
                  { value: 'n', label: 'No', trigger: '6B' },
                ],
              },
            ]}
          />
        </div>
      </div>
    </ThemeProvider>
    );
  }
}
