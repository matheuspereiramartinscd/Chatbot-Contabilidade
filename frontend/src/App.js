import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState(""); // Para armazenar a entrada do usuário
  const [chatHistory, setChatHistory] = useState([]); // Para armazenar o histórico de conversa
  const [loading, setLoading] = useState(false); // Para mostrar o estado de carregamento

  const handleInputChange = (event) => {
    setUserInput(event.target.value); // Atualiza o valor da entrada do usuário
  };

  const sendMessage = async () => {
    if (userInput.trim() === "") return; // Impede envio vazio

    setLoading(true); // Marca o carregamento
    setChatHistory([...chatHistory, { sender: "Você", message: userInput }]); // Atualiza histórico com a entrada do usuário

    try {
      // Envia a mensagem para o backend Flask
      const response = await axios.post("http://127.0.0.1:5000/chat", {
        message: userInput,
      });

      // Atualiza o histórico com a resposta do chatbot
      setChatHistory([
        ...chatHistory,
        { sender: "Você", message: userInput },
        { sender: "Bot", message: response.data.response },
      ]);
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      setChatHistory([
        ...chatHistory,
        { sender: "Bot", message: "Desculpe, ocorreu um erro." },
      ]);
    } finally {
      setLoading(false); // Marca o fim do carregamento
    }
    setUserInput(""); // Limpa o campo de entrada após o envio
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li>Início</li>
          <li>Histórico</li>
          <li>Configurações</li>
        </ul>
      </div>
      <div className="chat-container">
        <h1>Chatbot Contábil</h1>
        <div className="chat-box">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={chat.sender === "Você" ? "user-msg" : "bot-msg"}
            >
              <strong>{chat.sender}: </strong>
              {chat.message}
            </div>
          ))}
          {loading && <div className="loading">Carregando...</div>}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Digite sua pergunta..."
          />
          <button onClick={sendMessage}>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
