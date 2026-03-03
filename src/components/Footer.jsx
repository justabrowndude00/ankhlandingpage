export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__brand">Ankh</div>
                <span className="footer__copy">
                    &copy; {new Date().getFullYear()} Ankh. All rights reserved.
                </span>
                <div className="footer__links">
                    <a href="#features">Features</a>
                    <a href="#community">Community</a>
                    <a href="#waitlist">Waitlist</a>
                </div>
            </div>
        </footer>
    )
}
