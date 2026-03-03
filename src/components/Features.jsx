import { motion } from 'framer-motion'

const features = [
    {
        icon: '🎥',
        title: 'Live Video Calls',
        description:
            'Instantly connect with a trained volunteer who can describe the world around you in real time — like having a friend on speed dial.',
    },
    {
        icon: '📝',
        title: 'Real-Time Captions',
        description:
            'For those with auditory disabilities, live visual captions keep you in the conversation so you never miss a beat.',
    },
    {
        icon: '🏥',
        title: 'Hospital Wayfinding',
        description:
            'Partnered with Hamilton and Brampton hospitals to guide you step-by-step to your appointments — from the entrance to the waiting room.',
    },
    {
        icon: '🏛️',
        title: 'Historic Site Tours',
        description:
            'Explore local landmarks and historic sites with a volunteer guide who paints the picture for you through a live call.',
    },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Features() {
    return (
        <section id="mission" className="features">
            <div className="container">
                <h2 className="section-title">Our Mission</h2>
                <p className="section-subtitle">
                    We believe no one should navigate the world alone. Ankh bridges the gap between those who want to help and those who need it — starting in Hamilton &amp; Brampton.
                </p>
            </div>

            <motion.div
                className="features__grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
            >
                {features.map((f, i) => (
                    <motion.div key={i} className="feature-card" variants={cardVariants}>
                        <div className="feature-card__icon">{f.icon}</div>
                        <h3 className="feature-card__title">{f.title}</h3>
                        <p className="feature-card__description">{f.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
