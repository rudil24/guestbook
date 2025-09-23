import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import db from './db/index.js';
import entriesRouter from './routes/entries.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Explicitly configure dotenv to load the .env file from the server directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors({
  // Allow requests from the Vite frontend development server
  origin: 'http://localhost:5173'
}));
app.use(express.json()); // for parsing application/json

// Rate limiting to prevent spam and abuse
const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 15, // Limit each IP to 15 requests per window
	message: 'Too many submissions from this IP, please try again after 15 minutes.',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all API routes
app.use('/api/', apiLimiter);

// Test the database connection
try {
  const client = await db.pool.connect();
  console.log('Database connected successfully');
  const res = await client.query('SHOW search_path');
  console.log('Search path set to:', res.rows[0].search_path);
  client.release();
} catch (err) {
  console.error('Failed to connect to the database or set search_path.', err.stack);
  process.exit(1);
}

// Mount the routers
app.use('/api/entries', entriesRouter);

// Health check endpoint for Render
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});