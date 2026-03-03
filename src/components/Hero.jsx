import { motion } from 'framer-motion'

/* Floating particles — more variety */
function Particles() {
    const particles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 18 + 8,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.5 + 0.1,
        hue: Math.random() > 0.7 ? 200 : 220, // some teal, mostly blue
    }))

    return (
        <div className="hero__particles" aria-hidden="true">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="hero__particle"
                    style={{
                        left: `${p.x}%`,
                        width: p.size,
                        height: p.size,
                        opacity: p.opacity,
                        background: `hsl(${p.hue}, 80%, 65%)`,
                        boxShadow: `0 0 ${p.size * 2}px hsla(${p.hue}, 80%, 65%, 0.4)`,
                    }}
                    animate={{
                        y: [0, -900],
                        x: [0, (Math.random() - 0.5) * 60],
                        opacity: [0, p.opacity, p.opacity, 0],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: 'linear',
                    }}
                />
            ))}
        </div>
    )
}

export default function Hero() {
    return (
        <section className="hero">
            {/* Animated aurora mesh */}
            <div className="hero__aurora" aria-hidden="true">
                <div className="hero__aurora-blob hero__aurora-blob--1" />
                <div className="hero__aurora-blob hero__aurora-blob--2" />
                <div className="hero__aurora-blob hero__aurora-blob--3" />
            </div>

            {/* Dot grid pattern */}
            <div className="hero__dot-grid" aria-hidden="true" />

            {/* Floating particles */}
            <Particles />

            {/* Glow behind title */}
            <div className="hero__glow" aria-hidden="true" />

            {/* Light streaks */}
            <div className="hero__streaks" aria-hidden="true">
                <div className="hero__streak hero__streak--1" />
                <div className="hero__streak hero__streak--2" />
                <div className="hero__streak hero__streak--3" />
            </div>

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
