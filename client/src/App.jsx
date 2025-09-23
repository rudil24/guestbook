import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GuestbookForm from './components/GuestbookForm';
import MessageList from './components/MessageList';
import Footer from './components/Footer';

// The server is running on port 3001
const API_URL = 'http://localhost:3001/api/entries';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(API_URL);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleMessageSubmit = async (newMessage) => {
    try {
      const response = await axios.post(API_URL, newMessage);
      // Add the new message to the top of the list for an instant update
      setMessages([response.data, ...messages]);
    } catch (error) {
      console.error('Error posting message:', error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Digital Guestbook</h1>
        <p>Sign our guestbook and leave a message for everyone to see!</p>
      </header>
      <main>
        <GuestbookForm onMessageSubmit={handleMessageSubmit} />
        <hr />
        <MessageList messages={messages} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
