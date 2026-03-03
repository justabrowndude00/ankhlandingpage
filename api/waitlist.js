import { kv } from '@vercel/kv'

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

        // Create the record
        const record = {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            role,
            timestamp: new Date().toISOString(),
        }

        // Store in Vercel KV
        // Use a list to store all signups, and a set for dedup by email
        const emailKey = `waitlist:email:${record.email}`
        const existing = await kv.get(emailKey)

        if (existing) {
            return res.status(409).json({ error: 'This email is already on the waitlist!' })
        }

        // Store the record keyed by email
        await kv.set(emailKey, JSON.stringify(record))

        // Add to the list of all signups
        await kv.lpush('waitlist:all', JSON.stringify(record))

        // Increment counters
        await kv.incr('waitlist:count:total')
        await kv.incr(`waitlist:count:${role}`)

        return res.status(200).json({ success: true })
    } catch (error) {
        console.error('Waitlist API error:', error)
        return res.status(500).json({ error: 'Something went wrong. Please try again.' })
    }
}
