import 'dotenv/config';
import { Pool } from 'pg';

// Create a new connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Set the search_path for every new client connection
pool.on('connect', (client) => {
  client.query('SET search_path TO guestbook');
});

// Export a query function and the pool itself
export default {
  query: (text, params) => pool.query(text, params),
  pool,
};