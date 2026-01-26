'use client';


import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content animate-fadeIn">
                    <h1 className="text-display hero-title">
                        Find Your Perfect Drive
                    </h1>
                    <p className="text-body-lg hero-subtitle">
                        Compare horsepower, torque, warranty, and more. Make informed decisions with comprehensive vehicle data and side-by-side comparisons.
                    </p>
                    <div className="hero-actions">
                        <Link href="/compare" className="btn btn-primary btn-lg">
                            Start Comparing
                        </Link>
                        <Link href="/cars" className="btn btn-secondary btn-lg">
                            Browse All Cars
                        </Link>
                    </div>
                </div>

                <div className="hero-visual animate-fadeIn stagger-2">
                    <img
                        src="/hero-visual.png"
                        alt="Car Comparison Dashboard"
                        style={{
                            width: '100%',
                            maxWidth: '1000px',
                            height: 'auto',
                            borderRadius: 'var(--radius-xl)',
                            boxShadow: 'var(--shadow-lg)',
                            backgroundColor: 'white'
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
