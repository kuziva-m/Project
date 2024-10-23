import { NextResponse } from 'next/server';
import { createConnection } from 'mysql2/promise';

export async function POST(request: Request) {
  const { identifier, password } = await request.json();

  // Database connection
  let connection;
  try {
    connection = await createConnection({
      host: 'localhost', // Change this to your local DB host if needed
      user: 'root',
      password: 'KuzivasMysql@2003',
      database: 'Zim_Tour',
    });

    // Check if the identifier is an email or username
    const [rows]: any = await connection.execute(
      'SELECT * FROM users WHERE (email = ? OR username = ?) AND password = ?',
      [identifier.toLowerCase(), identifier.toLowerCase(), password] // Use lowercase identifier
    );

    if (rows.length > 0) {
      const user = rows[0]; // Get the first matching user
      
      // Return user data without formatting
      return NextResponse.json({ success: true, userId: user.user_id, ...user }); // Return user ID and raw user data
    } else {
      return NextResponse.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ success: false, message: 'Server error' });
  } finally {
    if (connection) {
      await connection.end(); // Close the database connection
    }
  }
}
