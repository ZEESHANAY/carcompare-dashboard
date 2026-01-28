
import Link from 'next/link';

export default function NewsPage() {
    const articles = [
        { title: "2027 Porsche Taycan: Performance Specs Leaked", date: "Jan 28, 2026", category: "New Releases", summary: "Internal documents show a significant jump in range and a new 'Active Ride' suspension as standard." },
        { title: "Global Chip Shortage Finally Declared Over", date: "Jan 27, 2026", category: "Industry Trends", summary: "Supply chains have stabilized, leading to a projected 15% increase in dealer inventory for Q1." },
        { title: "Critical Safety Alert: 50,000 Electric SUVs Recalled", date: "Jan 26, 2026", category: "Safety", summary: "A battery management software glitch could lead to power loss in extreme cold temperatures." },
        { title: "Solid-State Battery Breakthrough in Lab Tests", date: "Jan 25, 2026", category: "Technology", summary: "New solid electrolyte allows for 1,000-mile charge in under 10 minutes, entering pilot production." },
        { title: "Price War: Luxury EV Sedans Hit New Lows", date: "Jan 24, 2026", category: "Market Updates", summary: "Market leaders slash prices by $5,000 to combat new competition from international brands." },
        { title: "The Most Reliable Family Cars of 2026 Ranked", date: "Jan 23, 2026", category: "Buying Advice", summary: "Consumer reports analyze 100,000 data points to find the real winners in long-term ownership." },
        { title: "Hydrogen Infrastructure Expansion Announced", date: "Jan 22, 2026", category: "Environment", summary: "A new network of 200 high-speed hydrogen fueling stations is planned for the West Coast." },
        { title: "Classic Barn Find: 1960s Prototypes Discovered", date: "Jan 21, 2026", category: "Culture", summary: "A collection of never-before-seen concepts from the mid-century found in a rural hangar." },
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Breaking News Hero */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="card bento-full p-0 overflow-hidden flex flex-col md:flex-row border-none shadow-sm">
                        <div style={{ flex: 1.2, height: 450, background: 'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop) center/cover' }}></div>
                        <div style={{ flex: 1, padding: 'var(--space-10)', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--bg-canvas)' }}>
                            <span className="badge badge-error mb-4">Live Updates</span>
                            <h1 className="text-display mb-4" style={{ fontSize: '36px', lineHeight: 1.1 }}>Next-Gen EV Shatters Nürburgring Record</h1>
                            <p className="text-secondary mb-8 text-lg">A production-ready prototype has just completed the legendary circuit in 5:58.2, making it the fastest road-legal electric vehicle in history.</p>
                            <div className="flex items-center gap-6">
                                <Link href="#" className="btn btn-primary">Read Exclusive</Link>
                                <span className="text-caption text-muted">Published 2 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main News Layout */}
            <section className="section">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: '1fr 320px', gap: 'var(--space-12)' }}>
                        {/* News Stream */}
                        <div>
                            <div className="flex justify-between items-center mb-10 pb-4 border-bottom">
                                <h2 className="text-title">Latest Headlines</h2>
                                <nav className="flex gap-4">
                                    {['All', 'Releases', 'EVs', 'Industry'].map(t => (
                                        <button key={t} className="text-sm font-medium text-secondary hover:text-primary transition-colors">{t}</button>
                                    ))}
                                </nav>
                            </div>
                            <div className="grid grid-2 gap-8">
                                {articles.map((art, i) => (
                                    <article key={i} className="flex flex-col gap-3 group cursor-pointer">
                                        <span className="text-caption flex items-center gap-2 text-accent">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                            {art.category} • {art.date}
                                        </span>
                                        <h3 className="font-bold text-xl group-hover:text-accent transition-colors">{art.title}</h3>
                                        <p className="text-sm text-secondary line-clamp-2 leading-relaxed">{art.summary}</p>
                                        <Link href="#" className="link text-xs font-bold uppercase letter-spacing-wide mt-2">Continue Reading</Link>
                                    </article>
                                ))}
                            </div>
                            <div className="mt-12 pt-8 border-top text-center">
                                <button className="btn btn-secondary px-10">Load More Stories</button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="flex flex-col gap-10">
                            {/* Trending */}
                            <div className="card bg-hover border-none p-6">
                                <h4 className="font-bold mb-6 text-sm uppercase letter-spacing-wide">Trending Right Now</h4>
                                <ul className="flex flex-col gap-5">
                                    {[
                                        { tag: 'EV Incentives', count: '12k reads' },
                                        { tag: 'Battery Tech', count: '8k reads' },
                                        { tag: 'Tokyo Auto Show', count: '5k reads' },
                                        { tag: 'Used Car Prices', count: '4k reads' },
                                    ].map(item => (
                                        <li key={item.tag} className="flex justify-between items-center">
                                            <Link href="#" className="text-sm font-semibold hover:text-accent transition-colors">#{item.tag}</Link>
                                            <span className="text-caption text-muted">{item.count}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Newsletter */}
                            <div className="card p-8" style={{ background: 'var(--text-primary)', color: 'white', position: 'sticky', top: 'calc(var(--header-height) + 20px)' }}>
                                <h4 className="text-xl font-bold mb-2">The Weekly Shift</h4>
                                <p className="text-sm mb-6 text-muted">The one email you need to stay ahead in the automotive world.</p>
                                <form className="flex flex-col gap-3">
                                    <input type="email" placeholder="you@example.com" className="input bg-white text-primary border-none" />
                                    <button className="btn btn-secondary w-full">Join 50,000+ Pros</button>
                                </form>
                                <p className="text-center text-caption mt-6" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px' }}>
                                    By subscribing, you agree to our Privacy Policy.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
