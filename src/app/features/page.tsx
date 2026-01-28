
import Link from 'next/link';

export default function FeaturesPage() {
    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Hero Section */}
            <section className="section text-center">
                <div className="container">
                    <span className="badge badge-accent mb-4">Powerful Tools</span>
                    <h1 className="text-hero mb-4">
                        Everything you need to<br />
                        choose your perfect car
                    </h1>
                    <p className="text-body-lg text-secondary mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Compare vehicles side-by-side, analyze detailed specifications, and make data-driven decisions with our comprehensive suite of tools.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/compare" className="btn btn-primary btn-lg">
                            Start Comparing
                        </Link>
                        <Link href="/how-it-works" className="btn btn-secondary btn-lg">
                            How It Works
                        </Link>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-title mb-2">Platform Capabilities</h2>
                        <p className="text-secondary">Designed for enthusiasts and smart buyers alike</p>
                    </div>

                    <div className="grid grid-3 gap-6">
                        {/* Feature 1 */}
                        <div className="card feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Side-by-Side Comparison</h3>
                            <p className="feature-description">
                                Compare up to 3 vehicles simultaneously. Visualize differences in performance, dimensions, and features in a clean, easy-to-read table format.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="card feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Deep Technical Specs</h3>
                            <p className="feature-description">
                                Go beyond the basics. Access detailed data including horsepower curves, torque specs, 0-60 times, fuel economy ratings, and engine configurations.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="card feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Warranty coverage</h3>
                            <p className="feature-description">
                                Understand your protection. Compare basic, powertrain, and roadside assistance warranties to see which manufacturer stands behind their product.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="card feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Regional Availability</h3>
                            <p className="feature-description">
                                Don't fall for a car you can't buy. Check up-to-date regional pricing and inventory availability to ensure the car you want is purchasable near you.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="card feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Heritage & History</h3>
                            <p className="feature-description">
                                Know what you're buying. Explore brand heritage, model history, and legacy to understand the pedigree and long-term value of your investment.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="card feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Market Trends</h3>
                            <p className="feature-description">
                                Stay informed. Track pricing trends and market movements to decide the optimal time to buy, ensuring you get the best possible value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section">
                <div className="container">
                    <div className="bento-grid">
                        <div className="bento-item bento-md bg-hover">
                            <h3 className="text-title mb-4">Data You Can Trust</h3>
                            <p className="text-body text-secondary mb-6">
                                We aggregate data directly from manufacturer specifications, independent tests, and verified dealer inventories. Our database is updated weekly to ensure accuracy.
                            </p>
                            <ul className="text-secondary flex flex-col gap-2">
                                <li className="flex items-center gap-2">
                                    <span className="text-accent">✓</span> Verified Manufacturer Specs
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-accent">✓</span> Real-world Performance Testing
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-accent">✓</span> Daily Price Updates
                                </li>
                            </ul>
                        </div>

                        <div className="bento-item bento-md">
                            <h3 className="text-title mb-4">Precision Filtering</h3>
                            <p className="text-body text-secondary mb-4">
                                Find exactly what you need with our advanced filtering engine. Sort by any metric that matters to you.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="badge">0-60 Time</span>
                                <span className="badge">Horsepower</span>
                                <span className="badge">Price</span>
                                <span className="badge">Fuel Economy</span>
                                <span className="badge">Cargo Space</span>
                                <span className="badge">Drivetrain</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Experience */}
            <section className="section text-center bg-surface">
                <div className="container">
                    <div style={{ maxWidth: 600, margin: '0 auto' }}>
                        <h2 className="text-title mb-4">Seamless on Any Device</h2>
                        <p className="text-body-lg text-secondary mb-8">
                            Whether you're at the dealership or on the couch, CarCompare provides a fully optimized experience on mobile, tablet, and desktop.
                        </p>
                        <div className="flex justify-center gap-8 text-secondary">
                            <div className="flex flex-col items-center gap-2">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                <span className="text-caption">Mobile</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                <span className="text-caption">Tablet</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                <span className="text-caption">Desktop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="cta-section">
                        <h2 className="text-2xl font-bold mb-4">Ready to find your dream car?</h2>
                        <p className="mb-8">Join thousands of smart buyers making better decisions today.</p>
                        <Link href="/cars" className="btn btn-primary btn-lg">
                            Browse Vehicles
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
