// lib/db.ts
import { createPool } from 'mysql2/promise';

// Create a pool of connections to the database
const pool = createPool({
  host: 'localhost', // Your database host
  user: 'root', // Your database user
  password: 'KuzivasMysql@2003', // Your database password
  database: 'Zim_Tour', // Your database name
});

// The query function to execute SQL queries
export const query = async <T = any>(sql: string, values?: any[]): Promise<T[]> => {
  const [rows] = await pool.execute(sql, values);
  return rows as T[]; // Ensure rows are returned as type T
};
