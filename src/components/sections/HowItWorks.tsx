'use client';

import LottieAnimation from '../ui/LottieAnimation';

const steps = [
    {
        number: '01',
        title: 'Browse or Search',
        description: 'Explore our database of vehicles or search for specific models you\'re interested in.',
        lottie: 'https://assets4.lottiefiles.com/packages/lf20_kkflmtur.json',
    },
    {
        number: '02',
        title: 'Select to Compare',
        description: 'Add up to 3 vehicles to your comparison list with a single click.',
        lottie: 'https://assets5.lottiefiles.com/packages/lf20_fcfjwiyb.json',
    },
    {
        number: '03',
        title: 'Analyze & Decide',
        description: 'Review side-by-side specs, warranty terms, and make your informed decision.',
        lottie: 'https://assets9.lottiefiles.com/packages/lf20_5tkzkblw.json',
    },
];

export default function HowItWorks() {
    return (
        <section className="section" id="how-it-works">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="badge">Simple Process</span>
                    <h2 className="text-hero mt-4">How It Works</h2>
                    <p className="text-body-lg text-secondary mt-4" style={{ maxWidth: 500, margin: '16px auto 0' }}>
                        Three simple steps to find your perfect vehicle match.
                    </p>
                </div>

                <div className="grid grid-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="card text-center" style={{ padding: 'var(--space-8)' }}>
                            <span className="text-display text-muted" style={{ fontSize: 64, opacity: 0.3 }}>
                                {step.number}
                            </span>
                            <LottieAnimation src={step.lottie} size="md" />
                            <h3 className="text-section mt-4">{step.title}</h3>
                            <p className="text-secondary mt-2">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
