import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  try {
    const dbUrl = process.env.DATABASE_URL;
    
    if (!dbUrl) {
      return res.status(400).json({ 
        status: 'error', 
        message: 'DATABASE_URL environment variable is missing in environment settings.' 
      });
    }

    const sql = neon(dbUrl);
    const result = await sql`SELECT NOW() as time, current_database() as database`;

    return res.status(200).json({
      status: 'success',
      message: 'Successfully connected to Neon PostgreSQL database!',
      databaseName: result[0].database,
      serverTime: result[0].time
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Failed to connect to Neon PostgreSQL',
      details: error.message
    });
  }
}
