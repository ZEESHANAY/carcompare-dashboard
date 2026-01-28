
import Link from 'next/link';

export default function BlogHubPage() {
    const posts = [
        { title: "5 Simple Ways to Extend Your Car's Life", category: "Maintenance", author: "Sarah Jenkins", time: "6 min read", summary: "Regular care doesn't have to be expensive. Here's how to double your vehicle's lifespan." },
        { title: "Demystifying ADAS: What's Actually on Your Dashboard?", category: "Technology", author: "Mike Ross", time: "8 min read", summary: "Lane keep assist, cruise control, and emergency braking explained in simple terms." },
        { title: "The Ultimate Road Trip Guide for EVs in 2026", category: "Travel", author: "Elena Gomez", time: "12 min read", summary: "Charging networks have evolved. Here's how to cross the country without 'range anxiety'." },
        { title: "Winter Battery Care: Your Cold Weather Handbook", category: "Maintenance", author: "Sarah Jenkins", time: "5 min read", summary: "Don't get stranded. A few simple steps to keep your battery healthy when the mercury drops." },
        { title: "Circular Economy: The Future of Auto Manufacturing", category: "Sustainability", author: "Jane Doe", time: "7 min read", summary: "How brands are shifting towards 100% recyclable materials and closed-loop systems." },
        { title: "The Art of Negotiation: Tips from a Former Dealer", category: "Buying Tips", author: "Tom Miller", time: "10 min read", summary: "Go behind the scenes and learn the psychological triggers used in showrooms." },
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Blog Hero */}
            <section className="section bg-surface text-center">
                <div className="container">
                    <span className="badge badge-accent mb-4">Ownership & Lifestyle</span>
                    <h1 className="text-display mb-6" style={{ fontSize: '48px' }}>The CarCompare Blog</h1>
                    <p className="text-body-lg text-secondary mb-10" style={{ maxWidth: 650, margin: '0 auto' }}>
                        Expert advice, ownership stories, and deep dives into the automotive world. We help you make the most of every mile.
                    </p>
                    <div className="flex justify-center" style={{ maxWidth: 550, margin: '0 auto' }}>
                        <div className="relative w-full">
                            <input type="text" placeholder="Search for tips, guides, and stories..." className="input pl-12 w-full" style={{ height: 56, borderRadius: 28 }} />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">🔍</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="section">
                <div className="container">
                    <div className="card bento-full p-0 overflow-hidden flex flex-col md:flex-row shadow-sm border-none bg-canvas">
                        <div style={{ flex: 1.4, height: 450, background: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop) center/cover' }}></div>
                        <div style={{ flex: 1, padding: 'var(--space-10)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span className="text-caption text-accent mb-4 block uppercase font-bold letter-spacing-wide">Featured Insight</span>
                            <h2 className="text-title mb-4" style={{ fontSize: '30px', lineHeight: 1.2 }}>The Real Cost of ICE vs. EV in 2026</h2>
                            <p className="text-secondary mb-8 text-lg">Infrastructure is catching up, and resale values are shifting. We break down the true numbers every prospective buyer needs to see.</p>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="testimonial-avatar" style={{ background: 'var(--accent-primary)', width: 44, height: 44 }}>SJ</div>
                                <div>
                                    <p className="text-sm font-bold">Sarah Jenkins</p>
                                    <p className="text-caption text-secondary">Maintenance Editor • 15 min read</p>
                                </div>
                            </div>
                            <Link href="#" className="btn btn-primary w-fit">Read Full Article</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories & Feed */}
            <section className="section">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: '1fr 280px', gap: 'var(--space-12)' }}>
                        <div>
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="text-2xl font-bold">Latest Posts</h3>
                                <div className="flex gap-2">
                                    <button className="badge badge-accent">Recent</button>
                                    <button className="badge">Trending</button>
                                </div>
                            </div>
                            <div className="grid grid-2 gap-x-8 gap-y-12">
                                {posts.map((post, i) => (
                                    <article key={i} className="flex flex-col gap-4 group cursor-pointer">
                                        <div className="aspect-video bg-hover rounded-2xl overflow-hidden shadow-sm">
                                            <div style={{ width: '100%', height: '100%', background: `linear-gradient(135deg, hsl(${i * 60}, 40%, 95%), hsl(${i * 60}, 20%, 85%))`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.5s ease' }} className="group-hover:scale-105">
                                                <span className="text-4xl">{['🔧', '📱', '🛣️', '❄️', '♻️', '🤝'][i]}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold uppercase text-accent mb-2 block">{post.category}</span>
                                            <h4 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors leading-tight">{post.title}</h4>
                                            <p className="text-sm text-secondary mb-4 line-clamp-2">{post.summary}</p>
                                            <div className="flex justify-between items-center">
                                                <p className="text-caption text-muted">{post.author} • {post.time}</p>
                                                <Link href="#" className="link text-xs font-bold">Read More</Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                            <div className="mt-16 text-center">
                                <button className="btn btn-secondary px-12">Load More</button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="flex flex-col gap-10">
                            <div>
                                <h4 className="font-bold mb-6 text-sm uppercase letter-spacing-wide pb-2 border-bottom">Navigation</h4>
                                <nav className="flex flex-col gap-3">
                                    {['Maintenance', 'Technology', 'Travel Hub', 'Sustainability', 'Buying Strategy', 'Ownership Stories'].map(cat => (
                                        <Link key={cat} href="#" className="text-sm text-secondary hover:text-accent flex justify-between items-center group">
                                            {cat}
                                            <span className="text-muted group-hover:text-accent">→</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            <div className="card p-6 border-none bg-hover">
                                <h4 className="font-bold mb-6 text-sm uppercase letter-spacing-wide">Popular Tags</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['EVLife', 'Hybrid', 'SUV', 'MaintenanceTips', 'CarCare', 'FutureTech', 'ResaleValue'].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white rounded-full text-xs text-secondary border border-subtle cursor-pointer hover:border-accent hover:text-accent transition-all">#{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="card p-6 bg-accent-light border-none">
                                <h4 className="font-bold mb-3 text-accent">Write for Us</h4>
                                <p className="text-xs text-secondary mb-4 leading-relaxed">Have a car story or expertise to share with 1M+ readers? We're looking for passionate gearheads.</p>
                                <button className="btn btn-secondary btn-sm w-full">Apply Now</button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
