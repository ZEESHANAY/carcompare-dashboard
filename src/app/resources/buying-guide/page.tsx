
import Link from 'next/link';

export default function BuyingGuidePage() {
    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Hero Section */}
            <section className="section bg-surface">
                <div className="container">
                    <span className="badge badge-accent mb-4">Resources</span>
                    <h1 className="text-hero mb-4">The Ultimate Car Buying Guide</h1>
                    <p className="text-body-lg text-secondary mb-8" style={{ maxWidth: '800px' }}>
                        Buying a car is one of the most significant purchases you'll make. This guide is designed to empower you with the knowledge and strategy needed to find the perfect vehicle at the best possible price.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2 gap-12">
                        <div>
                            <h2 className="text-title mb-4">Why This Guide Exists</h2>
                            <p className="text-body text-secondary mb-4">
                                The automotive market is complex, filled with technical jargon, aggressive sales tactics, and fluctuating prices. We've distilled decades of industry experience into a step-by-step framework to help you navigate this journey with confidence.
                            </p>
                            <div className="card bg-hover border-none p-6">
                                <h4 className="font-bold mb-2">💡 Pro Tip</h4>
                                <p className="text-sm">Never fall in love with a car before you've seen the numbers. Detachment is your strongest negotiation tool.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-bold">What You'll Learn:</h3>
                            <ul className="flex flex-col gap-2 text-secondary">
                                <li className="flex items-center gap-2"><span>✓</span> Understanding Technical Specs</li>
                                <li className="flex items-center gap-2"><span>✓</span> New vs. Used Dilemma</li>
                                <li className="flex items-center gap-2"><span>✓</span> Financing & Leasing Demystified</li>
                                <li className="flex items-center gap-2"><span>✓</span> Negotiation Masterclass</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specifications */}
            <section className="section bg-surface">
                <div className="container">
                    <h2 className="text-title mb-8 text-center">Understanding Vehicle Specifications</h2>
                    <div className="grid grid-3 gap-6">
                        <div className="card">
                            <h4 className="font-bold mb-2">Horsepower & Torque</h4>
                            <p className="text-sm text-secondary">Horsepower determines how fast you can go; Torque determines how quickly you get there. High torque is essential for towing and quick acceleration from a stop.</p>
                        </div>
                        <div className="card">
                            <h4 className="font-bold mb-2">MPG & Efficiency</h4>
                            <p className="text-sm text-secondary">Miles Per Gallon (City/Highway). For EVs, look at MPGe and Range. Consider your daily commute to calculate long-term fuel costs.</p>
                        </div>
                        <div className="card">
                            <h4 className="font-bold mb-2">Drivetrain (FWD, RWD, AWD)</h4>
                            <p className="text-sm text-secondary">Front-Wheel is efficient, Rear-Wheel is sporty, and All-Wheel Drive provides better traction in snow and rain.</p>
                        </div>
                    </div>
                    <div className="card bg-hover border-none p-4 mt-6">
                        <h4 className="font-bold text-sm mb-1">💡 Pro Tip</h4>
                        <p className="text-xs text-secondary">Always compare "Combined MPG" rather than just Highway to get a more realistic view of your weekly fuel budget.</p>
                    </div>
                </div>
            </section>

            {/* New vs Used */}
            <section className="section">
                <div className="container">
                    <h2 className="text-title mb-8">New vs. Used: Which is right for you?</h2>
                    <div className="grid gap-8">
                        <table className="w-full text-left border-collapse" style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--border-subtle)' }}>
                                    <th style={{ padding: '1rem 0' }}>Feature</th>
                                    <th style={{ padding: '1rem 0' }}>New Car</th>
                                    <th style={{ padding: '1rem 0' }}>Used Car</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                                    <td style={{ padding: '1rem 0' }}><strong>Depreciation</strong></td>
                                    <td style={{ padding: '1rem 0' }} className="text-secondary">Loses ~20% value in first year</td>
                                    <td style={{ padding: '1rem 0' }} className="text-secondary">Initial hit already taken by first owner</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                                    <td style={{ padding: '1rem 0' }}><strong>Warranty</strong></td>
                                    <td style={{ padding: '1rem 0' }} className="text-secondary">Full factory coverage</td>
                                    <td style={{ padding: '1rem 0' }} className="text-secondary">Limited or none (unless CPO)</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                                    <td style={{ padding: '1rem 0' }}><strong>Technology</strong></td>
                                    <td style={{ padding: '1rem 0' }} className="text-secondary">Latest safety and infotainment</td>
                                    <td style={{ padding: '1rem 0' }} className="text-secondary">May be 1-2 generations behind</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="card bg-accent-light border-none p-6">
                            <h4 className="font-bold mb-2">What is Certified Pre-Owned (CPO)?</h4>
                            <p className="text-sm text-secondary">A CPO vehicle is a used car that has been inspected, refurbished, and certified by the manufacturer, typically coming with an extended warranty and roadside assistance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Financing */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="grid grid-2 gap-12 items-center">
                        <div>
                            <h2 className="text-title mb-4">Financing Options</h2>
                            <p className="text-body text-secondary mb-6">
                                Most buyers focus on the monthly payment, but the <strong>total cost of ownership</strong> is what matters.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <div className="badge badge-success">Loan</div>
                                    <p className="text-sm">You own the car after the term. Higher monthly payments, but builds equity.</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="badge badge-accent">Lease</div>
                                    <p className="text-sm">Lower payments, drive a new car every 3 years. Mileage limits apply.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h4 className="font-bold mb-4">Interest Rate Factors:</h4>
                            <ul className="text-sm text-secondary flex flex-col gap-2">
                                <li>• Credit Score (The biggest factor)</li>
                                <li>• Loan Term Length</li>
                                <li>• Down Payment Size</li>
                                <li>• Vehicle Age</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Test Drive Checklist */}
            <section className="section">
                <div className="container">
                    <h2 className="text-title mb-8">The 15-Point Test Drive Checklist</h2>
                    <div className="grid grid-2 gap-8">
                        <ul className="flex flex-col gap-3 text-secondary">
                            <li className="flex gap-2"><span>1.</span> <strong>Visual Inspection:</strong> Look for inconsistent panel gaps or paint overspray.</li>
                            <li className="flex gap-2"><span>2.</span> <strong>Tires:</strong> Check tread depth and ensure wear is even across all four.</li>
                            <li className="flex gap-2"><span>3.</span> <strong>Leaks:</strong> Look under the car after it has been idling for a few minutes.</li>
                            <li className="flex gap-2"><span>4.</span> <strong>Entry/Exit:</strong> Test the ease of getting in and out of all rows.</li>
                            <li className="flex gap-2"><span>5.</span> <strong>Seat Comfort:</strong> Ensure the driver's seat provides adequate lumbar support.</li>
                            <li className="flex gap-2"><span>6.</span> <strong>Visibility:</strong> Check blind spots and camera resolution.</li>
                            <li className="flex gap-2"><span>7.</span> <strong>Infotainment:</strong> Test phone connectivity and menu responsiveness.</li>
                            <li className="flex gap-2"><span>8.</span> <strong>Cabin Noise:</strong> Listen for rattles or excessive wind noise at highway speeds.</li>
                        </ul>
                        <ul className="flex flex-col gap-3 text-secondary">
                            <li className="flex gap-2"><span>9.</span> <strong>Brake Feel:</strong> Ensure they don't feel "mushy" or pulsate.</li>
                            <li className="flex gap-2"><span>10.</span> <strong>Alignment:</strong> The car should track straight when you loosen your grip slightly.</li>
                            <li className="flex gap-2"><span>11.</span> <strong>Transmission:</strong> Shifts should be smooth, not jerky or hesitant.</li>
                            <li className="flex gap-2"><span>12.</span> <strong>Suspension:</strong> Drive over speed bumps to check for clunks or bounce.</li>
                            <li className="flex gap-2"><span>13.</span> <strong>Climate Control:</strong> Verify how quickly the A/C and heater respond.</li>
                            <li className="flex gap-2"><span>14.</span> <strong>Cargo Space:</strong> Fold the seats to ensure your heaviest gear fits.</li>
                            <li className="flex gap-2"><span>15.</span> <strong>User Interface:</strong> Are physical buttons easy to reach while driving?</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Negotiation */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-title mb-4">Negotiation Strategy</h2>
                        <p className="text-secondary">Walk into the dealership with the upper hand.</p>
                    </div>
                    <div className="grid grid-3 gap-6">
                        <div className="bento-item">
                            <h4 className="font-bold mb-2">Research Prep</h4>
                            <p className="text-sm text-secondary">Know the "Invoice Price" and current dealer incentives before you visit.</p>
                        </div>
                        <div className="bento-item">
                            <h4 className="font-bold mb-2">Timing Tips</h4>
                            <p className="text-sm text-secondary">Shop at the end of the month or year when sales teams are desperate to hit quotas.</p>
                        </div>
                        <div className="bento-item">
                            <h4 className="font-bold mb-2">Avoid Add-ons</h4>
                            <p className="text-sm text-secondary">Say no to "Paint Protection," "VIN Etching," or "Fabric Guard" packages.</p>
                        </div>
                    </div>
                    <div className="card bg-hover border-none p-4 mt-8">
                        <h4 className="font-bold text-sm mb-1">💡 Pro Tip</h4>
                        <p className="text-xs text-secondary">Always negotiate the "Out the Door" price, not the monthly payment, to avoid hidden fees.</p>
                    </div>
                </div>
            </section>

            {/* Post-Purchase */}
            <section className="section">
                <div className="container">
                    <h2 className="text-title mb-8">Post-Purchase: Your First 30 Days</h2>
                    <div className="grid grid-3 gap-6">
                        <div className="card">
                            <h4 className="font-bold mb-2">Registration & Tax</h4>
                            <p className="text-sm text-secondary">Ensure the dealer has processed your title. Check your local DMV for registration deadlines and tax obligations.</p>
                        </div>
                        <div className="card">
                            <h4 className="font-bold mb-2">Insurance & Roadside</h4>
                            <p className="text-sm text-secondary">Notify your provider and confirm if your manufacture warranty includes roadside assistance.</p>
                        </div>
                        <div className="card">
                            <h4 className="font-bold mb-2">First Maintenance</h4>
                            <p className="text-sm text-secondary">Review the service schedule. Some manufacturers offer a free 1,000-mile "check-up" service.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section">
                <div className="container">
                    <div className="cta-section">
                        <h2 className="text-2xl font-bold mb-4">Ready to find your car?</h2>
                        <p className="mb-8">Use our comparison tool to put your research into action.</p>
                        <Link href="/compare" className="btn btn-primary btn-lg">
                            Start Comparing
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
