import { useState } from 'react';
import './GuestbookForm.css';

function GuestbookForm({ onMessageSubmit }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Call the function passed from the parent component
    await onMessageSubmit({ name, message });

    setName('');
    setMessage('');
  };

  return (
    <form className="guestbook-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Leave a friendly message"
          required
        ></textarea>
      </div>
      <button type="submit" className="submit-button">
        Sign Guestbook
      </button>
    </form>
  );
}

export default GuestbookForm;
