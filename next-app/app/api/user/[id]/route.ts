import { NextResponse } from 'next/server';
import { createConnection } from 'mysql2/promise';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const userId = params.id;

  let connection;
  try {
    connection = await createConnection({
      host: 'localhost',
      user: 'root',
      password: 'KuzivasMysql@2003',
      database: 'Zim_Tour',
    });

    const [rows]: any = await connection.execute('SELECT first_name, last_name, username, email, bio, profile_picture FROM users WHERE user_id = ?', [userId]);

    if (rows.length > 0) {
      return NextResponse.json({ success: true, user: rows[0] });
    } else {
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  } finally {
    if (connection) {
      await connection.end(); // Close the database connection
    }
  }
}
