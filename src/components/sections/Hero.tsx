'use client';

import LottieAnimation from '../ui/LottieAnimation';
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
                    <LottieAnimation
                        src="https://assets2.lottiefiles.com/packages/lf20_kyu7xb1v.json"
                        size="xl"
                    />
                </div>
            </div>
        </section>
    );
}
