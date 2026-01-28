
import Link from 'next/link';

export default function AboutUsPage() {
    const values = [
        { title: 'Transparency', desc: 'No hidden agendas. We provide raw data and honest assessments.', icon: '🔍' },
        { title: 'Accuracy', desc: 'Our data is verified across multiple sources for 99.9% reliability.', icon: '🎯' },
        { title: 'User-First', desc: 'Every feature we build starts with solving a buyer pain point.', icon: '👤' },
        { title: 'Innovation', desc: 'Leveraging AI and data science to predict car market trends.', icon: '🚀' },
    ];

    const stats = [
        { label: 'Vehicles', value: '500+' },
        { label: 'Brands', value: '50+' },
        { label: 'Comparisons', value: '1M+' },
        { label: 'User Rating', value: '4.9/5' },
    ];

    const team = [
        { name: 'Marcus Chen', role: 'Founder & CEO', bio: 'Former automotive engineer with a passion for data transparency.', initial: 'MC' },
        { name: 'Sarah Miller', role: 'Head of Data', bio: 'Data scientist who spent 10 years analyzing vehicle depreciation.', initial: 'SM' },
        { name: 'David Park', role: 'Product Design', bio: 'UX specialist focused on making complex data simple to understand.', initial: 'DP' },
        { name: 'Emma Wilson', role: 'Lead Reviewer', bio: 'Professional test driver with over 1M miles under her belt.', initial: 'EW' },
        { name: 'James Carter', role: 'Engineering Lead', bio: 'Full-stack developer obsessed with performance and scalability.', initial: 'JC' },
        { name: 'Olivia Reed', role: 'Content Strategist', bio: 'Journalist specialized in making technical specs accessible to all.', initial: 'OR' },
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Mission Hero */}
            <section className="section bg-surface text-center">
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="badge badge-accent mb-6">About CarCompare</span>
                    <h1 className="text-display mb-10" style={{ fontSize: '52px', lineHeight: 1.1 }}>
                        We are democratizing car buying decisions through data-driven clarity.
                    </h1>
                    <p className="text-body-lg text-secondary" style={{ maxWidth: 700, margin: '0 auto' }}>
                        Since 2024, our team has been on a singular mission to build the world's most transparent automotive research platform. We believe that clarity is the ultimate luxury in a complex market.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="section">
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div className="grid grid-2 gap-16 items-start">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-title">Our Origin Story</h2>
                            <p className="text-secondary">It started with a simple frustration. Our founder, Marcus, was looking for a new family SUV and realized that finding actual, comparable specs across three different brands was nearly impossible without twenty browser tabs open and a custom spreadsheet. The data was there, but it was scattered, inconsistent, and often misleading.</p>
                            <p className="text-secondary">He realized the problem wasn't a lack of information—it was a lack of structure. CarCompare was built to solve that problem, creating a unified language for vehicle data that allows for true side-by-side analysis without the jargon. We spent the first year manually verifying specs from thousands of manufacturer brochures to ensure our baseline was perfect.</p>
                            <p className="text-secondary">Today, we've grown from a weekend project into a leading resource for millions of car buyers. By partnering directly with manufacturers and using advanced data extraction techniques, we've built a database that stays updated in real-time. Our vision is a future where every car purchase is backed by cold, hard data, removing the stress from the dealership experience.</p>
                            <p className="text-secondary">As we look forward, we're expanding our capabilities to include predictive market trends and regional pricing analysis. We aren't just a comparison tool anymore; we're a complete automotive intelligence platform dedicated to the success of the modern buyer. Our journey is just beginning, and we're glad you're part of it.</p>
                        </div>
                        <div className="card bg-hover border-none" style={{ height: 450, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'sticky', top: 'var(--header-height)' }}>
                            <div className="text-center text-muted">
                                <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.5} style={{ opacity: 0.3 }}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                                <p className="mt-8 font-mono text-xs uppercase tracking-widest">Est. San Francisco 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section bg-surface">
                <div className="container">
                    <h2 className="text-title text-center mb-16">The Values That Drive Us</h2>
                    <div className="grid grid-4 gap-6">
                        {values.map(v => (
                            <div key={v.title} className="card p-8 border-none bg-canvas">
                                <div style={{ fontSize: 36, marginBottom: 'var(--space-6)' }}>{v.icon}</div>
                                <h3 className="text-lg font-bold mb-3">{v.title}</h3>
                                <p className="text-sm text-secondary leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section bg-primary" style={{ backgroundColor: 'var(--text-primary)', color: 'white' }}>
                <div className="container">
                    <div className="grid grid-4 gap-8">
                        {stats.map(s => (
                            <div key={s.label} className="text-center">
                                <div className="text-display" style={{ fontSize: 48, marginBottom: 'var(--space-2)' }}>{s.value}</div>
                                <div className="text-xs uppercase text-muted tracking-widest">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section">
                <div className="container">
                    <h2 className="text-title text-center mb-16">Meet the Minds Behind the Data</h2>
                    <div className="grid grid-3 gap-x-12 gap-y-16">
                        {team.map(member => (
                            <div key={member.name} className="flex flex-col items-center text-center group">
                                <div className="testimonial-avatar mb-6 grayscale group-hover:grayscale-0 transition-all" style={{ width: 100, height: 100, fontSize: 32, background: 'var(--bg-hover)', color: 'var(--text-primary)' }}>{member.initial}</div>
                                <h4 className="font-bold text-xl mb-1">{member.name}</h4>
                                <p className="text-accent text-sm font-bold mb-4 uppercase tracking-wide">{member.role}</p>
                                <p className="text-sm text-secondary leading-relaxed max-w-xs">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="cta-section text-center p-20 bg-hover border-none rounded-3xl">
                        <h2 className="text-4xl font-bold mb-6">Join us in making car buying smarter</h2>
                        <p className="mb-10 text-secondary text-lg" style={{ maxWidth: 600, margin: '0 auto' }}>We're always looking for talented data engineers, designers, and automotive experts to help us scale.</p>
                        <div className="flex gap-4 justify-center">
                            <button className="btn btn-primary btn-lg px-12">View Open Roles</button>
                            <button className="btn btn-secondary btn-lg px-12">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
