import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost', // Connect to local database
  user: 'root', // Your local MySQL username
  password: 'KuzivasMysql@2003', // Your local MySQL password
  database: 'Zim_Tour', // Your local database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function POST(req: Request) {
  const body = await req.json();

  try {
    // Check if the username or email already exists
    const [existingUsers] = await pool.query<any[]>('SELECT * FROM users WHERE email = ? OR username = ?', [body.email, body.username]);

    if (existingUsers.length > 0) {
      const errorMessage = existingUsers.some((user) => user.email === body.email) ? 
        'Email is already taken.' : 'Username is already taken.';
      return NextResponse.json({ success: false, message: errorMessage });
    }

    // Insert new user
    const [result] = await pool.query<mysql.ResultSetHeader>(
      'INSERT INTO users (first_name, last_name, email, username, password) VALUES (?, ?, ?, ?, ?)',
      [body.first_name, body.last_name, body.email, body.username, body.password]
    );

    return NextResponse.json({ success: true, insertId: result.insertId });
  } catch (error: unknown) {
    let errorMessage = 'Error registering user';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error('Database error:', error);
    return NextResponse.json({ success: false, message: errorMessage });
  }
}
