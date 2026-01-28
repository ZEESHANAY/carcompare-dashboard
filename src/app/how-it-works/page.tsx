
import Link from 'next/link';

export default function HowItWorksPage() {
    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Hero Section */}
            <section className="section text-center pb-0">
                <div className="container">
                    <span className="badge badge-accent mb-4">Tutorial</span>
                    <h1 className="text-hero mb-4">
                        Master the Art of<br />
                        Car Comparison
                    </h1>
                    <p className="text-body-lg text-secondary mb-8" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        A simple 3-step guide to finding your perfect vehicle using data, not guesswork.
                    </p>
                </div>
            </section>

            {/* Step 1 */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2 gap-12 items-center">
                        <div>
                            <div className="badge badge-warning mb-4">Step 1</div>
                            <h2 className="text-title mb-4">Browse or Search</h2>
                            <p className="text-body text-secondary mb-6">
                                Start by exploring our extensive database of vehicles. You can browse the entire collection or use our smart search to find specific makes and models.
                            </p>
                            <ul className="flex flex-col gap-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold">1.</span>
                                    <span className="text-secondary">Navigate to the <strong>All Vehicles</strong> page.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold">2.</span>
                                    <span className="text-secondary">Use the search bar to filter by brand (e.g., "BMW", "Audi") or vehicle type.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold">3.</span>
                                    <span className="text-secondary">Scan the overview cards for quick stats like Price and HP.</span>
                                </li>
                            </ul>
                            <div className="card bg-hover p-4 border-none">
                                <h4 className="text-sm font-bold mb-2">💡 Pro Tip</h4>
                                <p className="text-caption">Use the availability badges to quickly filter out cars that aren't currently in stock or are limited editions.</p>
                            </div>
                        </div>
                        <div className="card card-elevated" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F5F5' }}>
                            <div className="text-center text-muted">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="mx-auto mb-4"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <span className="block">Interactive Search Demo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 2 */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="grid grid-2 gap-12 items-center">
                        <div className="order-2-mobile">
                            <div className="card card-elevated" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F5F5' }}>
                                <div className="text-center text-muted">
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="mx-auto mb-4"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                    <span className="block">Comparison Selection UI</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="badge badge-accent mb-4">Step 2</div>
                            <h2 className="text-title mb-4">Select to Compare</h2>
                            <p className="text-body text-secondary mb-6">
                                Choose the contenders. Add up to 3 vehicles to your comparison dock to see them side-by-side.
                            </p>
                            <ul className="flex flex-col gap-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold">1.</span>
                                    <span className="text-secondary">Click the <strong>"Compare"</strong> button on any car card.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold">2.</span>
                                    <span className="text-secondary">Watch the comparison dock appear at the bottom of your screen.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold">3.</span>
                                    <span className="text-secondary">Add up to two more vehicles to complete your lineup.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 3 */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2 gap-12 items-center">
                        <div>
                            <div className="badge badge-success mb-4">Step 3</div>
                            <h2 className="text-title mb-4">Analyze & Decide</h2>
                            <p className="text-body text-secondary mb-6">
                                Dive deep into the data. Our comparison engine highlights differences and provides the context you need.
                            </p>
                            <ul className="flex flex-col gap-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold">1.</span>
                                    <span className="text-secondary">Review the <strong>Comparison Table</strong> for highlighted differences.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold">2.</span>
                                    <span className="text-secondary">Check the warranty tab for long-term coverage details.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold">3.</span>
                                    <span className="text-secondary">Use the <strong>"Winner"</strong> highlight to see which car leads in each category.</span>
                                </li>
                            </ul>
                            <div className="card bg-hover p-4 border-none">
                                <h4 className="text-sm font-bold mb-2">💡 Troubleshooting</h4>
                                <p className="text-caption">Can't decide? Remove a car and add a new contender to shake up the comparison.</p>
                            </div>
                        </div>
                        <div className="card card-elevated" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F5F5' }}>
                            <div className="text-center text-muted">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="mx-auto mb-4"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                <span className="block">Data Analysis View</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="section bg-surface">
                <div className="container">
                    <h2 className="text-title text-center mb-12">Who is this for?</h2>
                    <div className="bento-grid">
                        <div className="bento-item bento-sm">
                            <h3 className="text-lg font-bold mb-2">First-Time Buyer</h3>
                            <p className="text-secondary text-sm">Focus on safety, warranty, and price. Avoid getting overwhelmed by technical jargon.</p>
                        </div>
                        <div className="bento-item bento-sm">
                            <h3 className="text-lg font-bold mb-2">The Enthusiast</h3>
                            <p className="text-secondary text-sm">Drill down into torque curves, 0-60 times, and heritage. Get the raw performance numbers.</p>
                        </div>
                        <div className="bento-item bento-sm">
                            <h3 className="text-lg font-bold mb-2">Family Shopper</h3>
                            <p className="text-secondary text-sm">Prioritize cargo space, fuel economy, and safety ratings for your peace of mind.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="text-title text-center mb-12">Frequently Asked Questions</h2>
                    <div className="flex flex-col gap-6">
                        <div className="card">
                            <h4 className="font-bold mb-2">Is the pricing data real-time?</h4>
                            <p className="text-secondary text-sm">We update our pricing data weekly based on manufacturer MSRPs and average market dealer pricing.</p>
                        </div>
                        <div className="card">
                            <h4 className="font-bold mb-2">Can I compare more than 3 cars?</h4>
                            <p className="text-secondary text-sm">Currently, we limit comparisons to 3 vehicles to ensure the data remains substantial and readable on all devices.</p>
                        </div>
                        <div className="card">
                            <h4 className="font-bold mb-2">Is this service free?</h4>
                            <p className="text-secondary text-sm">Yes, CarCompare is 100% free for all users. We may earn a commission from certified dealers if you request a quote.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section pt-0">
                <div className="container">
                    <div className="cta-section">
                        <h2 className="text-2xl font-bold mb-4">Ready to start?</h2>
                        <Link href="/cars" className="btn btn-primary btn-lg">
                            Go to Dashboard
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
