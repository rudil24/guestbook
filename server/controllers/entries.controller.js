import db from '../db/index.js';
import axios from 'axios';

export const getAllEntries = async (req, res) => {
  try {
    const { rows } = await db.query(
      'SELECT * FROM entries ORDER BY created_at DESC'
    );
    res.json(rows);
  } catch (err) {
    console.error('Error fetching entries:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createEntry = async (req, res) => {
  const { name, message, token } = req.body;

  // 1. Verify reCAPTCHA token, skipping for test environment
  if (process.env.NODE_ENV !== 'test') {
    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error('RECAPTCHA_SECRET_KEY is not set.');
      return res.status(500).json({ error: 'Server configuration error.' });
    }

    try {
      const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
      );
      if (!response.data.success) {
        return res.status(400).json({ error: 'reCAPTCHA verification failed.' });
      }
    } catch (error) {
      console.error('reCAPTCHA verification error:', error);
      return res.status(500).json({ error: 'Failed to verify reCAPTCHA.' });
    }
  }

  // 2. Validate input
  if (
    !name || typeof name !== 'string' || name.trim() === '' ||
    !message || typeof message !== 'string' || message.trim() === ''
  ) {
    return res.status(400).json({ error: 'Name and message are required.' });
  }

  // 3. Insert into database
  try {
    const { rows } = await db.query(
      'INSERT INTO entries (name, message) VALUES ($1, $2) RETURNING *',
      [name.trim(), message.trim()]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error('Error creating entry:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
