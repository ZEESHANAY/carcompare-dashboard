import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="navbar-logo">
                            CarCompare
                        </Link>
                        <p>
                            The smartest way to compare vehicles. Make informed decisions with comprehensive specs, warranty details, and market insights.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h4>Product</h4>
                        <ul className="footer-links">
                            <li><Link href="/compare">Compare Cars</Link></li>
                            <li><Link href="/cars">Browse All</Link></li>
                            <li><Link href="/features">Features</Link></li>
                            <li><Link href="/how-it-works">How It Works</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Resources</h4>
                        <ul className="footer-links">
                            <li><Link href="/resources/buying-guide">Buying Guide</Link></li>
                            <li><Link href="/resources/reviews">Car Reviews</Link></li>
                            <li><Link href="/resources/news">News</Link></li>
                            <li><Link href="/resources/blog">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/privacy">Privacy</Link></li>
                            <li><Link href="/terms">Terms</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 CarCompare. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-muted">Twitter</Link>
                        <Link href="#" className="text-muted">LinkedIn</Link>
                        <Link href="#" className="text-muted">GitHub</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
