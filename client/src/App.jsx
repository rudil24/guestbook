import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GuestbookForm from './components/GuestbookForm';
import MessageList from './components/MessageList';
import Footer from './components/Footer';

// All API requests will be proxied by Vite's dev server
const API_URL = '/api/entries';

function App() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(API_URL);
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setError("Could not load messages. Please try refreshing the page.");
      }
    };

    fetchMessages();
  }, []);

  const handleMessageSubmit = async (newMessage) => {
    setError(null); // Clear previous errors on a new attempt
    try {
      const response = await axios.post(API_URL, newMessage);
      // Add the new message to the top of the list for an instant update
      setMessages([response.data, ...messages]);
    } catch (error) {
      console.error("Error posting message:", error);
      setError(error.response?.data?.error || "Failed to submit message. Please try again.");
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
        {error && <p className="error-message">{error}</p>}
        <hr />
        <MessageList messages={messages} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
