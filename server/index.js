import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Database Pool Setup
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Set the search_path for every client connection
pool.on('connect', (client) => {
  client.query('SET search_path TO guestbook');
});

// Test the database connection
try {
  const client = await pool.connect();
  console.log('Database connected successfully');
  const res = await client.query('SHOW search_path');
  console.log('Search path set to:', res.rows[0].search_path);
  client.release();
} catch (err) {
  console.error('Failed to connect to the database or set search_path.', err.stack);
  process.exit(1);
}

// Basic route to confirm server is running
app.get('/', (req, res) => {
  res.send('Guestbook API Server is running!');
});

// API routes will be added here
app.get('/api/entries', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM entries ORDER BY created_at DESC'
    );
    res.json(rows);
  } catch (err) {
    console.error('Error fetching entries:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});