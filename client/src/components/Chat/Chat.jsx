import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ChatRoom.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const connectWebSocket = () => {
      const socket = new WebSocket('ws://' + window.location.host.replace('5173', '8000') + '/ws/chat/');

      socket.onopen = () => {
        console.log('WebSocket connection opened');
      };

      socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        // Добавляем проверку на уникальность сообщения
        setMessages((prevMessages) => {
          // Проверяем, не существует ли уже это сообщение в списке
          if (!prevMessages.some(msg => msg.message === message.message)) {
            return [...prevMessages, message];
          }
          return prevMessages;
        });
      };

      socket.onclose = (event) => {
        console.log('WebSocket connection closed', event);
      };

      socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      setWs(socket);
    };

    connectWebSocket();

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (ws && inputValue.trim()) {
      const message = {
        message: inputValue,
      };
      ws.send(JSON.stringify(message));
      setInputValue('');
    }
  };

  return (
    <div className="chat-room">
      <h2>Чат</h2>
      <Link to="/">
        <button className="button-back">Назад</button>
      </Link>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
          className="chat-input"
        />
        <button onClick={sendMessage} className="chat-button">
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Chat;
