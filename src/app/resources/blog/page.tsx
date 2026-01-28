
import Link from 'next/link';

export default function BlogHubPage() {
    const posts = [
        { title: "5 Ways to Extend Your Car's Life", category: "Maintenance", author: "Sarah Jenkins", time: "6 min read" },
        { title: "Understanding ADAS Technology", category: "Technology", author: "Mike Ross", time: "8 min read" },
        { title: "The Best Road Trips for EVs in 2026", category: "Travel", author: "Elena Gomez", time: "12 min read" },
        { title: "Winter Care: Keeping Your Battery Healthy", category: "Maintenance", author: "Sarah Jenkins", time: "5 min read" },
        { title: "Why Sustainability is the Future of Auto", category: "Sustainability", author: "Jane Doe", time: "7 min read" },
        { title: "Negotiating Like a Pro at the Dealership", category: "Buying Tips", author: "Tom Miller", time: "10 min read" },
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Blog Hero */}
            <section className="section bg-surface text-center">
                <div className="container">
                    <h1 className="text-hero mb-4">The CarCompare Blog</h1>
                    <p className="text-body-lg text-secondary mb-8" style={{ maxWidth: 600, margin: '0 auto' }}>
                        Daily tips, stories, and insights from the world of automotive ownership.
                    </p>
                    <div className="flex justify-center" style={{ maxWidth: 500, margin: '0 auto' }}>
                        <input type="text" placeholder="Search articles..." className="input" />
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="section">
                <div className="container">
                    <div className="card bento-full p-0 overflow-hidden flex flex-col md:flex-row shadow-lg">
                        <div style={{ flex: 1.5, height: 400, background: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop) center/cover' }}></div>
                        <div style={{ flex: 1, padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span className="badge badge-accent mb-4">Featured Post</span>
                            <h2 className="text-title mb-4" style={{ fontSize: '28px' }}>The Hidden Cost of Internal Combustion in 2026</h2>
                            <p className="text-secondary mb-6">As fuel prices fluctuate and maintenance costs for aging ICE platforms rise, we break down the true cost of ownership vs. electric alternatives.</p>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="testimonial-avatar" style={{ background: 'var(--accent-primary)' }}>SJ</div>
                                <div>
                                    <p className="text-sm font-bold">Sarah Jenkins</p>
                                    <p className="text-caption">Maintenance Specialist • 15 min read</p>
                                </div>
                            </div>
                            <Link href="#" className="link">Read Article →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories & Feed */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: '1fr 250px', gap: 'var(--space-12)' }}>
                        <div>
                            <h3 className="text-title mb-8">Latest Stories</h3>
                            <div className="grid grid-2 gap-8">
                                {posts.map((post, i) => (
                                    <div key={i} className="flex flex-col gap-4">
                                        <div className="aspect-video bg-hover rounded-xl overflow-hidden">
                                            <div style={{ width: '100%', height: '100%', background: `hsl(${i * 40}, 30%, 90%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                                                Article Image
                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge mb-2">{post.category}</span>
                                            <h4 className="font-bold mb-2 hover:text-accent cursor-pointer transition-colors">{post.title}</h4>
                                            <p className="text-caption">{post.author} • {post.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="flex flex-col gap-8">
                            <div>
                                <h4 className="font-bold mb-4 text-sm uppercase letter-spacing-wide">Categories</h4>
                                <ul className="flex flex-col gap-2">
                                    {['Maintenance', 'Technology', 'Travel', 'Sustainability', 'Buying Tips', 'Owner Stories'].map(cat => (
                                        <li key={cat}><Link href="#" className="text-sm text-secondary hover:text-primary">{cat}</Link></li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-4 text-sm uppercase letter-spacing-wide">Popular Tags</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['EV', 'Hybrid', 'SUV', 'Security', 'DIY', 'Future', 'Classic'].map(tag => (
                                        <span key={tag} className="badge cursor-pointer hover:bg-accent-light hover:text-accent transition-all">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Blog CTA */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="card bento-full text-center p-12 bg-hover border-none">
                        <h2 className="text-title mb-4">Have a story to share?</h2>
                        <p className="text-secondary mb-8">We're always looking for guest contributors to share their car ownership experiences.</p>
                        <button className="btn btn-secondary btn-lg">Apply as Contributor</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
