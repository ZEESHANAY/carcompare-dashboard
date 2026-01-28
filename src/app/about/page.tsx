
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
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Mission Hero */}
            <section className="section bg-surface text-center">
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="badge badge-accent mb-4">Our Mission</span>
                    <h1 className="text-display mb-6" style={{ fontSize: '48px' }}>
                        Democratizing car buying decisions through data-driven clarity.
                    </h1>
                    <p className="text-body-lg text-secondary">
                        Since 2024, CarCompare has been on a mission to bring transparency to the automotive industry. We believe that buying a car shouldn't be a game of chance—it should be a calculated, confident decision based on the best data available.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2 gap-16 items-center">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-title">The CarCompare Story</h2>
                            <p className="text-secondary">It started with a simple frustration. Our founder, Marcus, was looking for a new family SUV and realized that finding actual, comparable specs across three different brands was nearly impossible without twenty browser tabs open and a spreadsheet.</p>
                            <p className="text-secondary">He realized the problem wasn't a lack of information—it was a lack of structure. CarCompare was built to solve that problem, creating a unified language for vehicle data that allows for true side-by-side analysis.</p>
                            <p className="text-secondary">Today, we've grown from a weekend project into a leading resource for millions of car buyers, helping them save time, money, and stress.</p>
                        </div>
                        <div className="card bg-hover border-none" style={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="text-center text-muted">
                                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.5}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                                <p className="mt-4">Founding Vision 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section bg-surface">
                <div className="container">
                    <h2 className="text-title text-center mb-12">Driven by Our Values</h2>
                    <div className="grid grid-4 gap-6">
                        {values.map(v => (
                            <div key={v.title} className="card">
                                <div style={{ fontSize: 32, marginBottom: 'var(--space-4)' }}>{v.icon}</div>
                                <h3 className="font-bold mb-2">{v.title}</h3>
                                <p className="text-sm text-secondary">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-4 gap-8">
                        {stats.map(s => (
                            <div key={s.label} className="text-center">
                                <div className="text-display" style={{ fontSize: 40, marginBottom: 'var(--space-2)' }}>{s.value}</div>
                                <div className="text-caption uppercase text-muted letter-spacing-wide">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section bg-surface">
                <div className="container">
                    <h2 className="text-title text-center mb-12">Meet the Experts</h2>
                    <div className="grid grid-4 gap-6">
                        {team.map(member => (
                            <div key={member.name} className="flex flex-col items-center text-center">
                                <div className="testimonial-avatar mb-4" style={{ width: 80, height: 80, fontSize: 24, background: 'var(--text-primary)' }}>{member.initial}</div>
                                <h4 className="font-bold text-lg">{member.name}</h4>
                                <p className="text-accent text-sm mb-3">{member.role}</p>
                                <p className="text-caption text-secondary">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section">
                <div className="container">
                    <div className="cta-section" style={{ background: 'var(--accent-primary)', color: 'white' }}>
                        <h2 className="text-2xl font-bold mb-4">Join us in making car buying smarter</h2>
                        <p className="mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>We're always looking for talented people to join our data and engineering teams.</p>
                        <button className="btn btn-secondary btn-lg" style={{ background: 'white', border: 'none' }}>View Careers</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
