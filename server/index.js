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
  connectionString: process.env.DATABASE_URL,
});

// Basic route to confirm server is running
app.get('/', (req, res) => {
  res.send('Guestbook API Server is running!');
});

// API routes will be added here

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});