import './App.css';
import GuestbookForm from './components/GuestbookForm';
import MessageList from './components/MessageList';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Digital Guestbook</h1>
        <p>Sign our guestbook and leave a message for everyone to see!</p>
      </header>
      <main>
        <GuestbookForm />
        <hr />
        <MessageList messages={[]} />
      </main>
    </div>
  );
}

export default App;
