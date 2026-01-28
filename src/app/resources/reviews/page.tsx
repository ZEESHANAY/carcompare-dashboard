
import Link from 'next/link';

export default function CarReviewsPage() {
    const reviews = [
        {
            id: 1,
            name: 'BMW M4 Competition',
            image: 'https://images.unsplash.com/photo-1617814076367-b759c7d826c1?q=80&w=800&auto=format&fit=crop',
            rating: 9.2,
            summary: 'The ultimate driving machine gets a tech-heavy makeover that actually works.'
        },
        {
            id: 2,
            name: 'Tesla Model Y',
            image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800&auto=format&fit=crop',
            rating: 8.8,
            summary: 'Still the benchmark for practical electric family transport, despite growing competition.'
        },
        {
            id: 3,
            name: 'Toyota RAV4 Hybrid',
            image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=800&auto=format&fit=crop',
            rating: 8.5,
            summary: 'Reliability meets efficiency in a package that defines its segment.'
        }
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Hero */}
            <section className="section bg-surface">
                <div className="container">
                    <h1 className="text-hero mb-4">Expert Car Reviews</h1>
                    <p className="text-body-lg text-secondary mb-8">
                        Honest, data-driven assessments of the latest vehicles. We test them so you don't have to.
                    </p>
                    <div className="flex gap-4">
                        <div className="card p-4 border-none bg-hover">
                            <h4 className="font-bold text-sm">Our Methodology</h4>
                            <p className="text-caption">Every car undergoes 500 miles of real-world driving across city, highway, and backroads.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Reviews */}
            <section className="section">
                <div className="container">
                    <h2 className="text-title mb-8">Latest Featured Reviews</h2>
                    <div className="grid grid-3 gap-6">
                        {reviews.map(review => (
                            <div key={review.id} className="car-card">
                                <div className="car-card-image" style={{ height: 200, overflow: 'hidden' }}>
                                    <img src={review.image} alt={review.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="car-card-content">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-bold">{review.name}</h3>
                                        <span className="badge badge-accent">{review.rating} / 10</span>
                                    </div>
                                    <p className="text-sm text-secondary mb-4">{review.summary}</p>
                                    <Link href="#" className="btn btn-secondary btn-sm w-full">Read Full Review</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="section bg-surface">
                <div className="container">
                    <h2 className="text-title mb-8">Browse by Category</h2>
                    <div className="grid grid-3 gap-4">
                        {['Sedans', 'SUVs', 'Trucks', 'Electric Vehicles', 'Luxury', 'Budget-Friendly'].map(cat => (
                            <Link key={cat} href="#" className="card text-center hover:bg-hover transition-colors">
                                <span className="font-semibold">{cat}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scoring System */}
            <section className="section">
                <div className="container">
                    <h2 className="text-title mb-8 text-center">How We Score</h2>
                    <div className="grid grid-2 gap-12">
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4">
                                <div className="feature-icon" style={{ width: 40, height: 40 }}>1</div>
                                <div>
                                    <h4 className="font-bold">Performance</h4>
                                    <p className="text-sm text-secondary">Acceleration, handling, braking, and engine refinement.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="feature-icon" style={{ width: 40, height: 40 }}>2</div>
                                <div>
                                    <h4 className="font-bold">Comfort</h4>
                                    <p className="text-sm text-secondary">Ride quality, seat support, cabin noise, and ergonomics.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="feature-icon" style={{ width: 40, height: 40 }}>3</div>
                                <div>
                                    <h4 className="font-bold">Value</h4>
                                    <p className="text-sm text-secondary">MSRP vs features, fuel economy, and projected resale value.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4">
                                <div className="feature-icon" style={{ width: 40, height: 40 }}>4</div>
                                <div>
                                    <h4 className="font-bold">Technology</h4>
                                    <p className="text-sm text-secondary">Infotainment, driver assists, and connectivity features.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="feature-icon" style={{ width: 40, height: 40 }}>5</div>
                                <div>
                                    <h4 className="font-bold">Safety</h4>
                                    <p className="text-sm text-secondary">Crash test ratings and standard safety equipment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Template Preview */}
            <section className="section bg-surface">
                <div className="container" style={{ maxWidth: 800 }}>
                    <h2 className="text-title mb-6 text-center">Inside a CarCompare Review</h2>
                    <div className="card bento-full" style={{ border: '2px dashed var(--border-subtle)', background: 'transparent' }}>
                        <div className="flex flex-col gap-4">
                            <div className="h-4 bg-hover w-1/3 rounded"></div>
                            <div className="h-40 bg-hover w-full rounded"></div>
                            <div className="grid grid-2 gap-4">
                                <div className="h-20 bg-hover rounded"></div>
                                <div className="h-20 bg-hover rounded"></div>
                            </div>
                            <div className="h-4 bg-hover w-full rounded"></div>
                            <div className="h-4 bg-hover w-3/4 rounded"></div>
                        </div>
                        <p className="text-center mt-6 text-muted font-italic">Detailed specs, Pro/Con lists, and high-res gallery in every review.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="cta-section" style={{ backgroundColor: 'var(--bg-hover)', color: 'var(--text-primary)' }}>
                        <h2 className="text-2xl font-bold mb-4">Own a vehicle we haven't reviewed?</h2>
                        <p className="mb-8 text-secondary">Share your owner experience and help other buyers make informed decisions.</p>
                        <button className="btn btn-primary btn-lg">Submit User Review</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
