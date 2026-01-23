'use client';

import LottieAnimation from '../ui/LottieAnimation';

const bentoItems = [
    {
        id: 1,
        title: 'Compare Side by Side',
        description: 'Select up to 3 vehicles and compare every specification in a clean, organized table.',
        size: 'bento-md',
        lottie: 'https://assets9.lottiefiles.com/packages/lf20_qp1q7mct.json',
    },
    {
        id: 2,
        title: 'Horsepower & Torque',
        description: 'See engine performance metrics at a glance. HP, Nm, and acceleration data.',
        size: 'bento-sm',
        stats: [
            { value: '450+', label: 'Average HP' },
            { value: '500+', label: 'Nm Torque' },
        ],
    },
    {
        id: 3,
        title: 'Warranty Coverage',
        description: 'Compare warranty terms including basic, powertrain, and roadside assistance.',
        size: 'bento-sm',
        lottie: 'https://assets3.lottiefiles.com/packages/lf20_vfmyxu76.json',
    },
    {
        id: 4,
        title: 'Market Availability',
        description: 'Check regional pricing and availability. Know what\'s in stock near you.',
        size: 'bento-sm',
        badge: 'Real-time data',
    },
    {
        id: 5,
        title: 'Brand Heritage',
        description: 'Explore the history and legacy of automotive manufacturers. From founding stories to modern innovations.',
        size: 'bento-md bento-tall',
        lottie: 'https://assets1.lottiefiles.com/packages/lf20_w51pcehl.json',
    },
    {
        id: 6,
        title: 'Fuel Economy',
        description: 'City and highway MPG ratings for informed fuel cost planning.',
        size: 'bento-sm',
        stats: [
            { value: '28', label: 'City MPG' },
            { value: '35', label: 'Highway' },
        ],
    },
];

export default function BentoGrid() {
    return (
        <section className="section" id="features">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-hero">Everything You Need to Decide</h2>
                    <p className="text-body-lg text-secondary mt-4" style={{ maxWidth: 600, margin: '16px auto 0' }}>
                        Comprehensive vehicle data and tools to help you make the right choice. No more endless research across multiple sites.
                    </p>
                </div>

                <div className="bento-grid">
                    {bentoItems.map((item) => (
                        <div key={item.id} className={`bento-item ${item.size}`}>
                            <div className="feature-card">
                                {item.lottie && (
                                    <LottieAnimation src={item.lottie} size="md" />
                                )}

                                {item.stats && (
                                    <div className="flex gap-8 mb-4">
                                        {item.stats.map((stat, index) => (
                                            <div key={index} className="stat-item">
                                                <div className="stat-value">{stat.value}</div>
                                                <div className="stat-label">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {item.badge && (
                                    <span className="badge badge-accent mb-4">{item.badge}</span>
                                )}

                                <h3 className="feature-title">{item.title}</h3>
                                <p className="feature-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
