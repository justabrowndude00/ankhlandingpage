import { neon } from '@neondatabase/serverless'

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const { name, email, role } = req.body

        // Validate inputs
        if (!name || !name.trim()) {
            return res.status(400).json({ error: 'Name is required' })
        }
        if (!email || !email.trim()) {
            return res.status(400).json({ error: 'Email is required' })
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' })
        }
        if (!['volunteer', 'user'].includes(role)) {
            return res.status(400).json({ error: 'Role must be "volunteer" or "user"' })
        }

        // Initialize Postgres connection
        if (!process.env.DATABASE_URL) {
            console.error('DATABASE_URL is missing. Please connect Neon in Vercel Storage.')
            return res.status(500).json({ error: 'Database is not configured yet.' })
        }

        const sql = neon(process.env.DATABASE_URL)

        // Ensure table exists - creates one automatically on the first request!
        await sql`
            CREATE TABLE IF NOT EXISTS waitlist (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                role VARCHAR(50) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `

        const cleanEmail = email.trim().toLowerCase()

        // Check for duplicates
        const existing = await sql`SELECT id FROM waitlist WHERE email = ${cleanEmail}`
        if (existing.length > 0) {
            return res.status(409).json({ error: 'This email is already on the waitlist!' })
        }

        // Insert exactly like a standard SQL table
        await sql`
            INSERT INTO waitlist (name, email, role)
            VALUES (${name.trim()}, ${cleanEmail}, ${role})
        `

        return res.status(200).json({ success: true })
    } catch (error) {
        console.error('Waitlist API error:', error)
        // Check for Postgres unique constraint violation
        if (error.code === '23505') {
            return res.status(409).json({ error: 'This email is already on the waitlist!' })
        }
        return res.status(500).json({ error: 'Something went wrong. Please try again.' })
    }
}
