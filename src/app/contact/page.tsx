
import Link from 'next/link';

export default function ContactPage() {
    const faqs = [
        { q: 'How do I report incorrect vehicle data?', a: 'Please select "Data Correction" in the form interest dropdown. Our research team usually verifies and updates discrepancies within 24 hours.' },
        { q: 'Can I suggest a new feature or vehicle?', a: 'Absolutely! We love user feedback. Use "General Inquiry" and let us know what you would like to see next on the platform.' },
        { q: 'Do you have an API for automotive developers?', a: 'We are currently in private beta with our API. Select "Partnership" to request early access for your project.' },
        { q: 'Is my data shared with dealerships?', a: 'No. We are a consumer-first platform. We never sell your personal information or search history to third-party dealers.' },
        { q: 'How often is the market data updated?', a: 'Our technical specs and regional pricing data are synced daily with manufacturer databases and market aggregators.' },
        { q: 'Are you hiring for the data or engineering teams?', a: 'Yes! Check our About Us page for open roles or use the "General Inquiry" option to send us your portfolio.' },
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <section className="section bg-surface">
                <div className="container text-center">
                    <span className="badge badge-accent mb-4">Support Hub</span>
                    <h1 className="text-display mb-4" style={{ fontSize: '44px' }}>How can we help you?</h1>
                    <p className="text-body-lg text-secondary" style={{ maxWidth: 650, margin: '0 auto' }}>
                        Whether you're a buyer with a question or a manufacturer looking to partner, our team is ready to assist. Most inquiries receive a response within one business day.
                    </p>
                </div>
            </section>

            {/* Content Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: 'var(--space-16)' }}>
                        {/* Left: Contact Form */}
                        <div className="flex flex-col gap-8">
                            <div className="card border-none bg-canvas p-10">
                                <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                                <form className="flex flex-col gap-6">
                                    <div className="grid grid-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-muted">Your Full Name</label>
                                            <input type="text" placeholder="John Doe" className="input" style={{ background: 'white' }} />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-muted">Email Address</label>
                                            <input type="email" placeholder="john@example.com" className="input" style={{ background: 'white' }} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-muted">I'm interested in:</label>
                                        <select className="input bg-white cursor-pointer">
                                            <option>General Inquiry</option>
                                            <option>Partnership</option>
                                            <option>Press</option>
                                            <option>Support</option>
                                            <option>Data Correction</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-muted">Subject</label>
                                        <input type="text" placeholder="Brief summary of your inquiry" className="input" style={{ background: 'white' }} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-muted">Message</label>
                                        <textarea className="input" style={{ height: 180, padding: 'var(--space-4)', resize: 'none', background: 'white' }} placeholder="How can we assist you today?"></textarea>
                                    </div>
                                    <button className="btn btn-primary btn-lg w-full mt-4">Submit Inquiry</button>
                                    <p className="text-center text-caption text-secondary">
                                        By submitting this form, you agree to our <Link href="/terms" className="link">Terms of Service</Link> and <Link href="/privacy" className="link">Privacy Policy</Link>.
                                    </p>
                                </form>
                            </div>
                        </div>

                        {/* Right: Info & FAQ */}
                        <aside className="flex flex-col gap-10">
                            {/* Contact Info */}
                            <div className="flex flex-col gap-6">
                                <h4 className="font-bold text-sm uppercase tracking-widest text-accent">Direct Contact</h4>
                                <div className="card p-6 border-none bg-hover">
                                    <div className="flex flex-col gap-6">
                                        <div>
                                            <p className="text-xs text-muted font-bold uppercase mb-1">Support Email</p>
                                            <p className="font-bold text-lg">support@carcompare.com</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted font-bold uppercase mb-1">Expected Response</p>
                                            <p className="font-bold text-lg">Within 24 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FAQs */}
                            <div className="flex flex-col gap-6">
                                <h4 className="font-bold text-sm uppercase tracking-widest text-accent">Common Questions</h4>
                                <div className="flex flex-col gap-6">
                                    {faqs.map((faq, i) => (
                                        <div key={i} className="flex flex-col gap-2 pb-4 border-bottom">
                                            <p className="text-sm font-bold leading-tight">{faq.q}</p>
                                            <p className="text-sm text-secondary leading-relaxed">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Office & Social */}
                            <div className="flex flex-col gap-6">
                                <h4 className="font-bold text-sm uppercase tracking-widest text-accent">Our Presence</h4>
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm text-secondary leading-relaxed">
                                        <strong>CarCompare HQ</strong><br />
                                        Remote-first since 2024<br />
                                        San Francisco, CA
                                    </p>
                                    <p className="text-caption text-muted">
                                        <strong>Business Hours:</strong><br />
                                        Mon - Fri: 9:00 AM - 5:00 PM PST
                                    </p>
                                    <div className="flex gap-4 mt-2">
                                        <Link href="#" className="badge">Twitter</Link>
                                        <Link href="#" className="badge">LinkedIn</Link>
                                        <Link href="#" className="badge">GitHub</Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
