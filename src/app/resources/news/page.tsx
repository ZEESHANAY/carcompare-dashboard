
import Link from 'next/link';

export default function NewsPage() {
    const articles = [
        { title: "2027 Porsche Taycan: Everything We Know", date: "Jan 28, 2026", category: "New Releases" },
        { title: "Global Semiconductor Shortage Finally Eases", date: "Jan 27, 2026", category: "Industry Trends" },
        { title: "Critical Recall: 50,000 Luxury SUVs Impacted", date: "Jan 26, 2026", category: "Recalls & Safety" },
        { title: "Solid-State Batteries: The Next Frontier", date: "Jan 25, 2026", category: "Technology" },
        { title: "Price Drop: Electric Sedans Become Affordable", date: "Jan 24, 2026", category: "Market Updates" },
        { title: "The Best Family Cars of 2026 Revealed", date: "Jan 23, 2026", category: "New Releases" },
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Hero News */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="card bento-full p-0 overflow-hidden flex flex-col md:flex-row">
                        <div style={{ flex: 1, height: 400, background: 'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop) center/cover' }}></div>
                        <div style={{ flex: 1, padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span className="badge badge-accent mb-4">Breaking News</span>
                            <h1 className="text-display mb-4" style={{ fontSize: '32px' }}>Next-Gen Electric Supercar Shatters Nürburgring Record</h1>
                            <p className="text-secondary mb-6">A production-ready prototype has just completed the legendary circuit in under 6 minutes, signaling a new era for performance EVs.</p>
                            <Link href="#" className="btn btn-primary w-fit">Read Full Story</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content & Sidebar */}
            <section className="section">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: '1fr 300px', gap: 'var(--space-12)' }}>
                        {/* News Feed */}
                        <div>
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-title">Latest Updates</h2>
                                <div className="flex gap-2">
                                    {['All', 'New Releases', 'EVs', 'Safety'].map(tab => (
                                        <span key={tab} className={`badge ${tab === 'All' ? 'badge-accent' : ''}`} style={{ cursor: 'pointer' }}>{tab}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-2 gap-6">
                                {articles.map((art, i) => (
                                    <div key={i} className="card hover:border-accent transition-colors">
                                        <span className="text-caption text-accent mb-2 block">{art.category} • {art.date}</span>
                                        <h3 className="font-bold mb-3">{art.title}</h3>
                                        <p className="text-sm text-secondary mb-4 line-clamp-2">The automotive industry is seeing unprecedented shifts as manufacturers pivot towards sustainability and advanced AI integration.</p>
                                        <Link href="#" className="link text-sm">Read More →</Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="flex flex-col gap-8">
                            <div className="card bg-hover border-none">
                                <h4 className="font-bold mb-4 text-sm uppercase letter-spacing-wide">Trending Topics</h4>
                                <ul className="flex flex-col gap-3">
                                    {['EV Subsidies 2026', 'Hydrogen Fuel Cells', 'Autonomous Driving L3', 'Off-roading Gear'].map(topic => (
                                        <li key={topic}><Link href="#" className="text-sm text-secondary hover:text-primary transition-colors"># {topic}</Link></li>
                                    ))}
                                </ul>
                            </div>

                            <div className="card bg-primary text-surface" style={{ backgroundColor: 'var(--text-primary)', color: 'white' }}>
                                <h4 className="font-bold mb-2">The Weekly Shift</h4>
                                <p className="text-xs mb-4 text-muted">Join 50,000+ car enthusiasts getting the latest industry insights.</p>
                                <input type="email" placeholder="email@example.com" className="input mb-3 bg-white text-primary" style={{ height: 36, fontSize: 12 }} />
                                <button className="btn btn-secondary w-full btn-sm" style={{ color: 'var(--text-primary)' }}>Subscribe</button>
                                <p className="text-center text-caption mt-4" style={{ color: 'rgba(255,255,255,0.4)' }}>No spam, ever. Unsubscribe anytime.</p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
