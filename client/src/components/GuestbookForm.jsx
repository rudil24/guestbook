import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './GuestbookForm.css';

function GuestbookForm({ onMessageSubmit }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState(null);
  const recaptchaRef = useRef();

  // Check if we are in a test environment
  const isTestEnv = process.env.NODE_ENV === 'test';

  const handleSubmit = async (event) => {
    console.log('Form submission handler called.');
    event.preventDefault();
    if (!isTestEnv && !token) {
      alert("Please verify you're not a robot.");
      return;
    }

    // Call the function passed from the parent component
    await onMessageSubmit({ name, message, token });

    // Reset form and reCAPTCHA after submission
    setName('');
    setMessage('');
    if (!isTestEnv) {
      setToken(null);
      recaptchaRef.current.reset();
    }
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
      {!isTestEnv && (
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={(value) => setToken(value)}
        />
      )}
      <button type="submit" className="submit-button">
        Sign Guestbook
      </button>
    </form>
  );
}

export default GuestbookForm;
