import { useState } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false); // Nuevo estado para controlar la visibilidad

  const handleNewUserMessage = (newMessage) => {
    addUserMessage(newMessage);

    // Lógica simple de respuesta (puedes personalizar esto según tus necesidades)
    setTimeout(() => {
      const response = 'Lo siento, soy un chatbot simple. No tengo mucha inteligencia.';
      addResponseMessage(response);
    }, 300);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 p-4">
      {/* Botón para abrir/cerrar el chat */}
      <button
        className="bg-blue-500 text-white rounded-full p-2"
        onClick={toggleChat}
      >
        {isChatOpen ? 'Cerrar Chat' : 'Abrir Chat'}
      </button>

      {/* Widget del Chat */}
      {isChatOpen && (
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="Chatbot"
          subtitle="¡Hola! ¿Cómo puedo ayudarte hoy?"
          fullScreenMode={false}
        />
      )}
    </div>
  );
};

export default Chatbot;
