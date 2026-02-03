
import Link from 'next/link';

export default function PrivacyPolicyPage() {
    const sections = [
        { title: '1. Information We Collect', id: 'collection' },
        { title: '2. How We Use Information', id: 'usage' },
        { title: '3. Data Sharing & Disclosure', id: 'sharing' },
        { title: '4. Cookies & Tracking Technologies', id: 'cookies' },
        { title: '5. Your Rights & Choices', id: 'rights' },
        { title: '6. Data Security & Retention', id: 'security' },
        { title: "7. Children's Privacy", id: 'children' },
        { title: '8. Changes to this Policy', id: 'changes' },
        { title: '9. Contact Information', id: 'contact' },
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <section className="section bg-surface">
                <div className="container" style={{ maxWidth: 1000 }}>
                    <h1 className="text-display mb-2" style={{ fontSize: '36px' }}>Privacy Policy</h1>
                    <p className="text-caption text-muted uppercase tracking-widest font-bold">Last Updated: January 28, 2026</p>
                    <hr className="mt-8 mb-10" style={{ border: 'none', borderTop: '1px solid var(--border-subtle)' }} />

                    {/* Table of Contents */}
                    <div className="bg-canvas border border-subtle rounded-2xl p-8 mb-16">
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-muted border-b pb-4">Table of Contents</h4>
                        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                            {sections.map(s => (
                                <Link key={s.id} href={`#${s.id}`} className="text-sm font-medium text-secondary hover:text-primary hover:translate-x-1 transition-all flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-border-subtle hover:bg-accent transition-colors"></span>
                                    {s.title}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-16 text-secondary leading-relaxed text-lg">
                        <section id="introduction">
                            <p className="text-lg text-primary font-medium italic">
                                At CarCompare, your trust is our most valuable asset. We are committed to being transparent about how we collect, use, and protect your personal information while you use our automotive research platform.
                            </p>
                        </section>

                        <section id="collection">
                            <h2 className="text-title text-primary mb-3">1. Information We Collect</h2>
                            <p className="mb-4">We collect information that you provide to us, information collected automatically, and information from third parties. This includes:</p>
                            <div className="flex flex-col gap-3 pl-0">
                                <p><strong className="text-primary">Account Data:</strong> If you register, we collect your name, email, and preferences.</p>
                                <p><strong className="text-primary">Comparison History:</strong> We store the vehicles you compare to provide a personalized experience and persistent comparison docks.</p>
                                <p><strong className="text-primary">Usage Data:</strong> We automatically collect information about your interactions with the site, including IP addresses, browser types, and pages visited.</p>
                                <p><strong className="text-primary">Cookies:</strong> Small files stored on your device that help us remember your settings and analyze site traffic.</p>
                            </div>
                        </section>

                        <section id="usage">
                            <h2 className="text-title text-primary mb-3">2. How We Use Information</h2>
                            <p className="mb-4">We use the data we collect to provide and improve the CarCompare experience:</p>
                            <div className="flex flex-col gap-3 pl-0">
                                <p><strong className="text-primary">Service Delivery:</strong> Maintaining your comparison sets and vehicle history.</p>
                                <p><strong className="text-primary">Personalization:</strong> Recommending vehicles based on your search patterns and preferences.</p>
                                <p><strong className="text-primary">Analytics:</strong> Understanding how users interact with our tools to build better features.</p>
                                <p><strong className="text-primary">Marketing:</strong> With your explicit consent, sending you newsletters and market updates. You may opt-out at any time.</p>
                            </div>
                        </section>

                        <section id="sharing">
                            <h2 className="text-title text-primary mb-3">3. Data Sharing & Disclosure</h2>
                            <p className="mb-4"><strong>Crucially, CarCompare does not sell your personal data to third parties or dealerships.</strong> We only share data in these limited cases:</p>
                            <div className="flex flex-col gap-3 pl-0">
                                <p><strong className="text-primary">Service Providers:</strong> Vendors who assist with hosting, analytics (like Google Analytics), and email delivery.</p>
                                <p><strong className="text-primary">Legal Requirements:</strong> To comply with a legal obligation, protect our rights, or prevent fraud.</p>
                                <p><strong className="text-primary">Business Transfers:</strong> In the event of a merger or sale of the company.</p>
                            </div>
                        </section>

                        <section id="cookies">
                            <h2 className="text-title text-primary mb-3">4. Cookies & Tracking Technologies</h2>
                            <p>We use essential cookies for site functionality and performance cookies to understand usage. You can manage your cookie preferences through your browser settings, though some features of CarCompare may not function correctly without them.</p>
                        </section>

                        <section id="rights">
                            <h2 className="text-title text-primary mb-3">5. Your Rights & Choices</h2>
                            <p className="mb-4">We support privacy rights globally, including GDPR and CCPA. You have the right to:</p>
                            <div className="flex flex-col gap-3 pl-0">
                                <p><strong className="text-primary">Access:</strong> Request access to the personal data we hold about you.</p>
                                <p><strong className="text-primary">Deletion:</strong> Request the deletion of your account and associated data.</p>
                                <p><strong className="text-primary">Opt-Out:</strong> Object to the processing of your data for marketing purposes.</p>
                                <p><strong className="text-primary">Portability:</strong> Export your data in a machine-readable format.</p>
                            </div>
                        </section>

                        <section id="security">
                            <h2 className="text-title text-primary mb-3">6. Data Security & Retention</h2>
                            <p>We implement industry-standard encryption (SSL/TLS) and regular security audits to protect your information. We retain your data only for as long as necessary to provide our services or as required by law.</p>
                        </section>

                        <section id="children">
                            <h2 className="text-title text-primary mb-3">7. Children's Privacy</h2>
                            <p>Our service is not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware of such data, we will take immediate steps to delete it.</p>
                        </section>

                        <section id="changes">
                            <h2 className="text-title text-primary mb-3">8. Changes to this Policy</h2>
                            <p>We may update this policy periodically. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date at the top.</p>
                        </section>

                        <section id="contact">
                            <h2 className="text-title text-primary mb-3">9. Contact Information</h2>
                            <p className="mb-4">If you have questions about our privacy practices, please contact our Data Protection Officer:</p>
                            <p className="font-bold">Email: <Link href="mailto:privacy@carcompare.com" className="link text-primary">privacy@carcompare.com</Link></p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}
