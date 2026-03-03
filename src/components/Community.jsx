import { motion } from 'framer-motion'

const partners = [
    { emoji: '🏙️', label: 'City of Hamilton' },
    { emoji: '🏙️', label: 'City of Brampton' },
    { emoji: '🏥', label: 'Hamilton Health Sciences' },
    { emoji: '🏥', label: 'William Osler Health System' },
    { emoji: '🏛️', label: 'Local Heritage Sites' },
    { emoji: '🤝', label: 'Community Volunteers' },
]

export default function Community() {
    return (
        <section id="community" className="community">
            <div className="container">
                <h2 className="section-title">Our Community</h2>
                <p className="section-subtitle">
                    Ankh is being built hand-in-hand with hospitals and municipalities in Hamilton and Brampton to ensure accessibility is a right, not a privilege.
                </p>

                <motion.div
                    className="community__pills"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {partners.map((p, i) => (
                        <motion.div
                            key={i}
                            className="community__pill"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                        >
                            <span>{p.emoji}</span> {p.label}
                        </motion.div>
                    ))}
                </motion.div>

                <p className="community__description">
                    Working with local hospitals and city councils, we're setting up dedicated wayfinding
                    routes and guided tours so that navigating an appointment or exploring a landmark
                    is as seamless as a phone call.
                </p>
            </div>
        </section>
    )
}
