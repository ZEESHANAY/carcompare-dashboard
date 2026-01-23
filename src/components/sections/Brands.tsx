'use client';

import LottieAnimation from '../ui/LottieAnimation';

const brands = [
    { name: 'BMW', founded: '1916', country: 'Germany' },
    { name: 'Mercedes-Benz', founded: '1926', country: 'Germany' },
    { name: 'Toyota', founded: '1937', country: 'Japan' },
    { name: 'Tesla', founded: '2003', country: 'USA' },
    { name: 'Honda', founded: '1948', country: 'Japan' },
    { name: 'Audi', founded: '1909', country: 'Germany' },
];

export default function Brands() {
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
            <div className="container">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <span className="badge badge-accent">50+ Brands</span>
                        <h2 className="text-title mt-4">Trusted Automotive Brands</h2>
                        <p className="text-secondary mt-2">
                            Explore heritage and specifications from the world's leading manufacturers.
                        </p>
                    </div>
                    <LottieAnimation
                        src="https://assets6.lottiefiles.com/packages/lf20_xlmz9xwm.json"
                        size="md"
                    />
                </div>

                <div className="grid grid-3 gap-4">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="card flex items-center justify-between"
                            style={{ padding: 'var(--space-4) var(--space-5)' }}
                        >
                            <div>
                                <div className="text-section">{brand.name}</div>
                                <div className="text-caption">Est. {brand.founded}</div>
                            </div>
                            <span className="badge">{brand.country}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
