
import Link from 'next/link';

export default function AboutUsPage() {
    const values = [
        { title: 'Transparency', desc: 'No hidden agendas. We provide raw data and honest assessments, even when it cuts against industry hype.', icon: '🔍' },
        { title: 'Accuracy', desc: 'Our data is verified across multiple sources for 99.9% reliability. If we get it wrong, we fix it instantly.', icon: '🎯' },
        { title: 'User-First', desc: 'Every feature we build starts with a buyer pain point. We ignore vanity metrics to focus on real utility.', icon: '👤' },
        { title: 'Innovation', desc: 'Leveraging predictive AI and real-time market data to give you an edge in negotiations.', icon: '🚀' },
    ];

    const stats = [
        { label: 'Vehicles Tracked', value: '500+' },
        { label: 'Brands Covered', value: '50+' },
        { label: 'Data Points', value: '1M+' },
        { label: 'Trust Score', value: '4.9/5' },
    ];

    const team = [
        { name: 'Marcus Chen', role: 'Founder & CEO', bio: 'Former automotive engineer with a passion for data transparency.', initial: 'MC' },
        { name: 'Sarah Miller', role: 'Head of Data', bio: 'Data scientist who spent 10 years analyzing vehicle depreciation models.', initial: 'SM' },
        { name: 'David Park', role: 'Product Design', bio: 'UX specialist focused on making complex data simple to understand.', initial: 'DP' },
        { name: 'Emma Wilson', role: 'Lead Reviewer', bio: 'Professional test driver with over 1M miles under her belt.', initial: 'EW' },
        { name: 'James Carter', role: 'Engineering Lead', bio: 'Full-stack developer obsessed with performance and scalability.', initial: 'JC' },
        { name: 'Olivia Reed', role: 'Content Strategist', bio: 'Journalist specialized in making technical specs accessible to all.', initial: 'OR' },
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Mission Hero */}
            <section className="section bg-surface text-center relative overflow-hidden">
                <div style={{
                    position: 'absolute', top: '-50%', left: '50%', transform: 'translate(-50%, 0)',
                    width: '1000px', height: '1000px', background: 'radial-gradient(circle, var(--bg-hover) 0%, transparent 70%)', opacity: 0.5, pointerEvents: 'none'
                }} />
                <div className="container relative" style={{ maxWidth: 900 }}>
                    <span className="badge badge-accent mb-8">About CarCompare</span>
                    <h1 className="text-display mb-8" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.1 }}>
                        Democratizing car buying through <span style={{
                            background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>data-driven clarity.</span>
                    </h1>
                    <p className="text-body-lg text-secondary" style={{ maxWidth: 700, margin: '0 auto', fontSize: '1.25rem' }}>
                        Since 2024, our team has been on a singular mission to build the world's most transparent automotive research platform. We believe that clarity is the ultimate luxury in a complex market.
                    </p>
                </div>
            </section>

            {/* Combined Story & Values Section */}
            <section className="section overflow-hidden">
                <div className="container" style={{ maxWidth: 1100 }}>
                    {/* Origin Story */}
                    <div className="grid grid-2 gap-16 items-center mb-20 origin-section relative">
                        {/* Connecting Line */}
                        <div style={{ position: 'absolute', left: '50%', top: '100%', bottom: -100, width: 1, background: 'linear-gradient(to bottom, var(--border-subtle), transparent)', display: 'none' }} className="hidden md:block" />

                        <div className="flex flex-col gap-8 order-2 md:order-1">
                            <div>
                                <h2 className="text-title text-4xl mb-4">Our Origin Story</h2>
                                <p className="text-secondary text-lg leading-relaxed mb-6">
                                    It started with a simple frustration. Our founder, Marcus, was looking for a new family SUV and realized that finding actual, comparable specs across three different brands was nearly impossible without twenty browser tabs open and a custom spreadsheet.
                                </p>
                                <p className="text-secondary text-lg leading-relaxed mb-6">
                                    He realized the problem wasn't a lack of information—it was a lack of structure. CarCompare was built to solve that problem, creating a unified language for vehicle data that allows for true side-by-side analysis without the jargon.
                                </p>
                                <p className="text-secondary text-lg leading-relaxed font-medium">
                                    Today, we've grown from a weekend project into a leading resource for millions of car buyers.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="card border-none relative overflow-visible bg-transparent shadow-none p-0">
                                <div style={{
                                    background: 'linear-gradient(135deg, #F3F4F6 0%, #FFFFFF 100%)',
                                    borderRadius: '2rem',
                                    padding: '3rem',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)',
                                    transform: 'rotate(2deg)',
                                    border: '1px solid rgba(255,255,255,0.5)'
                                }}>
                                    <div className="text-center relative z-10">
                                        <div style={{ fontSize: 80, lineHeight: 1, marginBottom: 10 }}>📍</div>
                                        <div className="font-bold text-3xl mb-1 text-primary">Est. 2024</div>
                                        <div className="text-muted text-sm uppercase tracking-widest font-bold">San Francisco, CA</div>
                                    </div>
                                    {/* Decorative Blobs */}
                                    <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: 'var(--blue-100)', opacity: 0.5, filter: 'blur(20px)' }} />
                                    <div style={{ position: 'absolute', bottom: -20, left: -20, width: 100, height: 100, borderRadius: '50%', background: 'var(--purple-100)', opacity: 0.5, filter: 'blur(30px)' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Transition to Values */}
                    <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
                        <span className="badge badge-outline mb-4 bg-white">Our Philosophy</span>
                        <h2 className="text-title text-3xl">The Values That Drive Us</h2>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-2 md:grid-4 gap-6">
                        {values.map((v, i) => (
                            <div key={v.title} className="group relative">
                                <div className="card p-8 border-subtle h-full bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden rounded-2xl">
                                    <div style={{
                                        position: 'absolute', top: 0, left: 0, width: '100%', height: 4,
                                        background: i % 2 === 0 ? 'var(--blue-500)' : 'var(--purple-500)',
                                        opacity: 0, transition: 'opacity 0.3s ease'
                                    }} className="group-hover:opacity-100" />

                                    <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface group-hover:bg-primary/5 text-2xl transition-colors">
                                        {v.icon}
                                    </div>
                                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{v.title}</h3>
                                    <p className="text-sm text-secondary leading-relaxed">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section" style={{ background: '#111', color: 'white' }}>
                <div className="container">
                    <div className="grid grid-4 gap-12 text-center divide-x divide-white/10">
                        {stats.map(s => (
                            <div key={s.label} className="px-4">
                                <div className="text-display" style={{ fontSize: 56, marginBottom: '0.5rem', fontWeight: 800 }}>{s.value}</div>
                                <div className="text-sm uppercase tracking-widest text-white/60 font-bold">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section">
                <div className="container" style={{ maxWidth: 1200 }}>
                    <div className="text-center mb-20">
                        <h2 className="text-title text-3xl mb-4">Meet the Minds Behind the Data</h2>
                        <p className="text-secondary">Engineers, designers, and auto-enthusiasts.</p>
                    </div>
                    <div className="grid grid-3 gap-x-12 gap-y-20">
                        {team.map(member => (
                            <div key={member.name} className="flex flex-col items-center text-center group">
                                <div className="mb-6 relative">
                                    <div style={{
                                        width: 120, height: 120, borderRadius: '50%',
                                        background: 'var(--bg-surface)', color: 'var(--text-primary)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: 40, border: '1px solid var(--border-subtle)',
                                        position: 'relative', zIndex: 2
                                    }}>
                                        {member.initial}
                                    </div>
                                    <div style={{
                                        position: 'absolute', top: 5, left: 5, right: -5, bottom: -5,
                                        borderRadius: '50%', border: '1px solid var(--border-subtle)',
                                        zIndex: 1, opacity: 0.5
                                    }} />
                                </div>
                                <h4 className="font-bold text-2xl mb-1">{member.name}</h4>
                                <p className="text-primary text-xs font-bold mb-4 uppercase tracking-widest">{member.role}</p>
                                <p className="text-secondary leading-relaxed max-w-xs text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section bg-surface">
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div className="cta-section text-center p-24 bg-white border border-subtle rounded-[3rem] relative overflow-hidden">
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: 'linear-gradient(90deg, var(--text-primary), transparent)' }} />
                        <h2 className="text-5xl font-bold mb-8 tracking-tight">Join us in making car buying smarter</h2>
                        <p className="mb-12 text-secondary text-xl" style={{ maxWidth: 640, margin: '0 auto 3rem auto' }}>
                            We're always looking for talented data engineers, designers, and automotive experts to help us scale.
                        </p>
                        <div className="flex gap-6 justify-center">
                            <button className="btn btn-primary px-10 py-4 h-auto text-lg rounded-full">View Open Roles</button>
                            <button className="btn btn-outline px-10 py-4 h-auto text-lg rounded-full bg-transparent hover:bg-surface">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
