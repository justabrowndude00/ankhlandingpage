import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close menu on link click
    const closeMenu = () => setMenuOpen(false)

    return (
        <nav className="navbar" style={scrolled ? { boxShadow: '0 8px 40px rgba(0,0,0,0.1)' } : {}}>
            <a href="#" className="navbar__logo">
                <img
                    src="/ankh-text-logo.svg"
                    alt="Ankh logo"
                    className="navbar__logo-img"
                    style={{ height: '32px', width: 'auto' }}
                />
            </a>

            {/* Desktop links */}
            <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                <li><a href="#mission" onClick={closeMenu}>Mission</a></li>
                <li><a href="#community" onClick={closeMenu}>Community</a></li>
                <li><a href="#waitlist" onClick={closeMenu}>Waitlist</a></li>
            </ul>

            <div className="navbar__right">
                <div className="navbar__cta">
                    <a href="#waitlist" className="btn-primary">Join Waitlist ↓</a>
                </div>

                {/* Hamburger button */}
                <button
                    className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </nav>
    )
}
