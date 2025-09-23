import './MessageList.css';

function MessageList({ messages }) {
  if (!messages || messages.length === 0) {
    return <p className="no-messages">No messages yet. Be the first to sign!</p>;
  }

  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div key={msg.id} className="message-item">
          <div className="message-header">
            <span className="message-name">{msg.name}</span>
            <span className="message-date">
              {new Date(msg.created_at).toLocaleString()}
            </span>
          </div>
          <p className="message-text">{msg.message}</p>
        </div>
      ))}
    </div>
  );
}

export default MessageList;