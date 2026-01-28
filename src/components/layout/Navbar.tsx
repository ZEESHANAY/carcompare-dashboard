'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar-inner">
                <Link href="/" className="navbar-logo">
                    CarCompare
                </Link>

                <ul className="navbar-links">
                    <li>
                        <Link href="/compare" className="navbar-link">
                            Compare
                        </Link>
                    </li>
                    <li>
                        <Link href="/cars" className="navbar-link">
                            Browse Cars
                        </Link>
                    </li>
                    <li>
                        <Link href="/features" className="navbar-link">
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link href="/how-it-works" className="navbar-link">
                            How It Works
                        </Link>
                    </li>
                </ul>

                <div className="navbar-actions">
                    <Link href="/compare" className="btn btn-secondary">
                        Start Comparing
                    </Link>
                </div>
            </div>
        </nav>
    );
}
