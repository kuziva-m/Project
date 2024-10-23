import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Database connection config
const dbConfig = {
  host: 'localhost', // Use your host here
  user: 'root',
  password: 'KuzivasMysql@2003',
  database: 'Zim_Tour',
};

export async function GET() {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.query('SELECT * FROM tourist_attractions');
    await connection.end();

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
