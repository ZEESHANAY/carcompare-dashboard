
import Link from 'next/link';

export default function ContactPage() {
    const faqs = [
        { q: 'How do I report incorrect data?', a: 'Please use the "Data Correction" option in the contact form dropdown. Our team verifies all reports within 24 hours.' },
        { q: 'Can I suggest a new feature?', a: 'Absolutely! Select "General Inquiry" and let us know what you would like to see. We build for our users.' },
        { q: 'Do you have an API for developers?', a: 'We are currently testing our API with select partners. Contact us under "Partnerships" for more info.' },
        { q: 'How is my private data handled?', a: 'We never sell your personal info. Check our Privacy Policy for a detailed breakdown.' },
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <section className="section bg-surface text-center">
                <div className="container">
                    <h1 className="text-display mb-4" style={{ fontSize: '40px' }}>Get in Touch</h1>
                    <p className="text-secondary" style={{ maxWidth: 600, margin: '0 auto' }}>
                        Have questions about a comparison? Interested in partnering? Or just want to say hi? We're here to help.
                    </p>
                </div>
            </section>

            {/* Main Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: '1fr 400px', gap: 'var(--space-12)' }}>
                        {/* Form Side */}
                        <div>
                            <form className="flex flex-col gap-6">
                                <div className="grid grid-2 gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold">Your Name</label>
                                        <input type="text" placeholder="John Doe" className="input" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="input" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold">Interest</label>
                                    <select className="input bg-white">
                                        <option>General Inquiry</option>
                                        <option>Partnership</option>
                                        <option>Press</option>
                                        <option>Support</option>
                                        <option>Data Correction</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold">Subject</label>
                                    <input type="text" placeholder="How can we help?" className="input" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold">Message</label>
                                    <textarea className="input" style={{ height: 150, padding: 'var(--space-3)', resize: 'none' }} placeholder="Tell us more..."></textarea>
                                </div>
                                <button className="btn btn-primary btn-lg w-fit px-12">Send Message</button>
                                <p className="text-caption text-secondary">By clicking send, you agree to our terms and privacy policy.</p>
                            </form>
                        </div>

                        {/* Sidebar Info */}
                        <aside className="flex flex-col gap-8">
                            <div className="card bg-hover border-none">
                                <h4 className="font-bold mb-4">Direct Contact</h4>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <p className="text-caption text-muted uppercase">Email</p>
                                        <p className="font-semibold">support@carcompare.com</p>
                                    </div>
                                    <div>
                                        <p className="text-caption text-muted uppercase">Response Time</p>
                                        <p className="font-semibold">Within 24 hours</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-bold mb-4">Common Questions</h4>
                                <div className="flex flex-col gap-4">
                                    {faqs.map((faq, i) => (
                                        <div key={i} className="flex flex-col gap-1">
                                            <p className="text-sm font-bold">{faq.q}</p>
                                            <p className="text-caption text-secondary">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="card bg-surface">
                                <h4 className="font-bold mb-3">Office Info</h4>
                                <p className="text-sm text-secondary mb-1">CarCompare HQ (Remote-First)</p>
                                <p className="text-sm text-secondary mb-4">San Francisco, CA</p>
                                <p className="text-caption text-muted">Business Hours:<br />Mon - Fri, 9am - 5pm PST</p>
                            </div>

                            <div className="flex gap-4">
                                <Link href="#" className="badge">Twitter</Link>
                                <Link href="#" className="badge">LinkedIn</Link>
                                <Link href="#" className="badge">GitHub</Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
