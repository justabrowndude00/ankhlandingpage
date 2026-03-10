import { motion } from 'framer-motion'

const GOOGLE_FORM_URL = 'https://forms.gle/zTX49TzUk28S9Qj56'

export default function WaitlistForm() {
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
                    <div className="waitlist__cta-content">
                        <div className="waitlist__cta-icon">✨</div>
                        <h3 className="waitlist__title">Ready to make a difference?</h3>
                        <p className="waitlist__subtitle">
                            Fill out our quick sign-up form to join as a volunteer or to request assistance. It only takes a minute!
                        </p>
                        <motion.a
                            href={GOOGLE_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary btn-glow waitlist__cta-btn"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Sign Up Now →
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
