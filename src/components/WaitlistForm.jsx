import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WaitlistForm() {
    const [role, setRole] = useState('volunteer')
    const [submitted, setSubmitted] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name.trim() || !email.trim()) return

        setLoading(true)
        setError('')

        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name.trim(), email: email.trim(), role }),
            })

            const data = await res.json()

            if (!res.ok) {
                setError(data.error || 'Something went wrong. Please try again.')
                setLoading(false)
                return
            }

            setSubmitted(true)
        } catch (err) {
            setError('Network error. Please check your connection and try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="waitlist" className="waitlist">
            <div className="container">
                <h2 className="section-title">Join the Movement</h2>
                <p className="section-subtitle">
                    Sign up for early access. Whether you want to lend your eyes &amp; ears, or need a helping hand — we'd love to have you.
                </p>

                <motion.div
                    className="waitlist__card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="waitlist__toggle">
                                    <button
                                        className={`waitlist__toggle-btn ${role === 'volunteer' ? 'waitlist__toggle-btn--active' : ''}`}
                                        onClick={() => setRole('volunteer')}
                                        type="button"
                                    >
                                        🙋 I want to volunteer
                                    </button>
                                    <button
                                        className={`waitlist__toggle-btn ${role === 'user' ? 'waitlist__toggle-btn--active' : ''}`}
                                        onClick={() => setRole('user')}
                                        type="button"
                                    >
                                        💙 I need assistance
                                    </button>
                                </div>

                                <form className="waitlist__form" onSubmit={handleSubmit}>
                                    <input
                                        id="waitlist-name"
                                        className="waitlist__input"
                                        type="text"
                                        placeholder="Your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                    <input
                                        id="waitlist-email"
                                        className="waitlist__input"
                                        type="email"
                                        placeholder="Your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                    <button
                                        id="waitlist-submit"
                                        type="submit"
                                        className={`btn-primary waitlist__submit ${loading ? 'waitlist__submit--loading' : ''}`}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                {role === 'volunteer' ? 'Sign Up as Volunteer' : 'Sign Up for Assistance'} →
                                            </>
                                        )}
                                    </button>

                                    {error && (
                                        <motion.div
                                            className="waitlist__error"
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            {error}
                                        </motion.div>
                                    )}
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                className="waitlist__success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="waitlist__success-icon">🎉</div>
                                <h3>You're on the list!</h3>
                                <p>
                                    Thanks {name}! We'll reach out to <strong>{email}</strong> when Ankh is ready for you.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}
