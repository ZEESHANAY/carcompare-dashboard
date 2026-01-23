'use client';

const stats = [
    { value: '500+', label: 'Vehicles in Database' },
    { value: '50+', label: 'Car Brands Covered' },
    { value: '1M+', label: 'Comparisons Made' },
    { value: '4.9', label: 'User Rating' },
];

export default function Stats() {
    return (
        <section className="section-sm" style={{ backgroundColor: 'var(--bg-surface)' }}>
            <div className="container">
                <div className="grid grid-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
