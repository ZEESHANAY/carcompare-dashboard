
import Link from 'next/link';

export default function CarReviewsPage() {
    const reviews = [
        {
            id: 1,
            name: 'BMW M4 Competition',
            image: 'https://images.unsplash.com/photo-1617814076367-b759c7d826c1?q=80&w=800&auto=format&fit=crop',
            rating: 9.2,
            summary: 'The ultimate driving machine gets a tech-heavy makeover that actually works.',
            reviewer: 'Emma Wilson'
        },
        {
            id: 2,
            name: 'Tesla Model Y',
            image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800&auto=format&fit=crop',
            rating: 8.8,
            summary: 'Still the benchmark for practical electric family transport, despite growing competition.',
            reviewer: 'Marcus Chen'
        },
        {
            id: 3,
            name: 'Toyota RAV4 Hybrid',
            image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=800&auto=format&fit=crop',
            rating: 8.5,
            summary: 'Reliability meets efficiency in a package that defines its segment.',
            reviewer: 'Sarah Miller'
        }
    ];

    const reviewers = [
        { name: 'Emma Wilson', role: 'Lead Track Tester', initial: 'EW' },
        { name: 'Marcus Chen', role: 'Daily Driver Specialist', initial: 'MC' },
        { name: 'Sarah Miller', role: 'EV & Tech Analyst', initial: 'SM' },
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Hero */}
            <section className="section bg-surface">
                <div className="container">
                    <span className="badge badge-accent mb-4">Expert Reviews</span>
                    <h1 className="text-display mb-4" style={{ fontSize: '48px' }}>Honest, Unbiased Assessments</h1>
                    <p className="text-body-lg text-secondary mb-8" style={{ maxWidth: 700 }}>
                        Every vehicle we review undergoes a rigorous 500-mile testing protocol across city streets, open highways, and demanding backroads. We don't just read the spec sheet; we live with the car.
                    </p>
                    <div className="card p-6 border-none bg-hover inline-block">
                        <div className="flex gap-4 items-center">
                            <div className="testimonial-avatar" style={{ width: 40, height: 40 }}>✓</div>
                            <div>
                                <h4 className="font-bold text-sm">Certified Methodology</h4>
                                <p className="text-caption text-secondary">Our testing process is 100% independent and manufacturer-neutral.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Reviews */}
            <section className="section">
                <div className="container">
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-title">Latest Reviews</h2>
                        <Link href="#" className="link text-sm">View All 500+ Reviews →</Link>
                    </div>
                    <div className="grid grid-3 gap-6">
                        {reviews.map(review => (
                            <div key={review.id} className="car-card">
                                <div className="car-card-image" style={{ height: 220 }}>
                                    <img src={review.image} alt={review.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div className="car-card-badge" style={{ top: 12, right: 12, background: 'var(--text-primary)', color: 'white' }}>
                                        {review.rating}
                                    </div>
                                </div>
                                <div className="car-card-content">
                                    <h3 className="font-bold mb-1">{review.name}</h3>
                                    <p className="text-caption text-secondary mb-4">Reviewed by {review.reviewer}</p>
                                    <p className="text-sm text-secondary mb-6">{review.summary}</p>
                                    <Link href="#" className="btn btn-secondary btn-sm w-full">Detailed Analysis</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="section bg-surface">
                <div className="container">
                    <h2 className="text-title mb-8">Browse by Segment</h2>
                    <div className="grid grid-6 gap-4">
                        {['Sedans', 'SUVs', 'Trucks', 'EVs', 'Luxury', 'Budget'].map(cat => (
                            <Link key={cat} href="#" className="card p-4 text-center hover:bg-hover transition-colors border-none bg-canvas">
                                <span className="text-sm font-semibold">{cat}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scoring System */}
            <section className="section">
                <div className="container">
                    <h2 className="text-title mb-12 text-center">Our 5-Pillar Scoring System</h2>
                    <div className="grid grid-5 gap-6">
                        {[
                            { title: 'Performance', desc: 'Acceleration, handling, and braking dynamics.', icon: '🏎️' },
                            { title: 'Comfort', desc: 'Ride quality, seating, and cabin quietness.', icon: '🛋️' },
                            { title: 'Tech', desc: 'Infotainment and driver assistance systems.', icon: '📱' },
                            { title: 'Value', desc: 'MSRP vs features and resale projection.', icon: '💰' },
                            { title: 'Safety', desc: 'Crash tests and active safety equipment.', icon: '🛡️' },
                        ].map((pillar, i) => (
                            <div key={i} className="card text-center flex flex-col items-center">
                                <div style={{ fontSize: 32, marginBottom: 'var(--space-2)' }}>{pillar.icon}</div>
                                <h4 className="font-bold mb-2">{pillar.title}</h4>
                                <p className="text-xs text-secondary">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Reviewers */}
            <section className="section bg-surface">
                <div className="container">
                    <h2 className="text-title mb-12 text-center">Meet the Review Team</h2>
                    <div className="flex justify-center gap-12">
                        {reviewers.map(r => (
                            <div key={r.name} className="flex flex-col items-center text-center">
                                <div className="testimonial-avatar mb-4" style={{ width: 64, height: 64, background: 'var(--text-primary)', color: 'white' }}>{r.initial}</div>
                                <h4 className="font-bold text-sm">{r.name}</h4>
                                <p className="text-caption text-secondary">{r.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="cta-section" style={{ background: 'var(--text-primary)', color: 'white', padding: 'var(--space-16)' }}>
                        <h2 className="text-3xl font-bold mb-4">Don't buy without a deep dive.</h2>
                        <p className="mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>Subscribe to get our weekly expert review delivered to your inbox.</p>
                        <div className="flex gap-2 max-w-md mx-auto">
                            <input type="email" placeholder="Email address" className="input" style={{ background: 'white', flex: 1 }} />
                            <button className="btn btn-secondary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
