import { motion } from 'framer-motion'


export default function Hero() {
    return (
        <section className="hero">

            {/* Centered content */}
            <div className="hero__content">
                <motion.div
                    className="hero__badge"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="hero__badge-dot" />
                    Now accepting early signups
                </motion.div>

                <motion.h1
                    className="hero__title"
                    initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <span className="hero__title-serif">Meet</span>{' '}
                    <span className="hero__title-sans">Ankh.</span>
                </motion.h1>

                <motion.p
                    className="hero__tagline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Your eyes &amp; ears, when you need them most.
                </motion.p>

                <motion.p
                    className="hero__subtitle"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                >
                    Live video calls, real-time captions, and hospital
                    wayfinding for people with visual and auditory disabilities.
                </motion.p>

                <motion.div
                    className="hero__actions"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a href="#waitlist" className="btn-primary btn-glow">
                        Join the Waitlist →
                    </a>
                    <a href="#mission" className="btn-secondary">
                        Learn More
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="hero__scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </motion.div>
        </section>
    )
}
