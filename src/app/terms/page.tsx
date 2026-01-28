
import Link from 'next/link';

export default function TermsOfServicePage() {
    const sections = [
        { title: 'Acceptance of Terms', id: 'acceptance' },
        { title: 'Service Description', id: 'description' },
        { title: 'User Accounts', id: 'accounts' },
        { title: 'Acceptable Use', id: 'use' },
        { title: 'Data Accuracy Disclaimer', id: 'accuracy' },
        { title: 'Intellectual Property', id: 'ip' },
        { title: 'Third-Party Links', id: 'links' },
        { title: 'Limitation of Liability', id: 'liability' },
        { title: 'Indemnification', id: 'indemnity' },
        { title: 'Changes to Terms', id: 'changes' },
        { title: 'Contact', id: 'contact' },
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <section className="section bg-surface">
                <div className="container" style={{ maxWidth: 800 }}>
                    <h1 className="text-title" style={{ fontSize: '32px', marginBottom: 'var(--space-2)' }}>Terms of Service</h1>
                    <p className="text-caption">Effective Date: January 28, 2026</p>
                    <hr className="mt-8 mb-8" style={{ border: 'none', borderTop: '1px solid var(--border-subtle)' }} />

                    <div className="card bg-hover border-none mb-12">
                        <h4 className="font-bold mb-4 text-sm uppercase">Quick Navigation</h4>
                        <ul className="flex flex-col gap-2">
                            {sections.map(s => (
                                <li key={s.id}><Link href={`#${s.id}`} className="text-sm link">{s.title}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-12 text-secondary">
                        <section id="acceptance">
                            <h2 className="text-title text-primary mb-4">1. Acceptance of Terms</h2>
                            <p>By accessing or using the CarCompare website ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.</p>
                        </section>

                        <section id="description">
                            <h2 className="text-title text-primary mb-4">2. Service Description</h2>
                            <p>CarCompare provides a platform for comparing vehicle specifications, exploring automotive resources, and accessing industry news. The Service is provided for informational purposes to assist in personal vehicle research.</p>
                        </section>

                        <section id="use">
                            <h2 className="text-title text-primary mb-4">4. Acceptable Use</h2>
                            <p className="mb-4">You agree not to use the Service to:</p>
                            <ul className="flex flex-col gap-2 list-disc pl-5">
                                <li>Scrape, crawl, or otherwise collect data using automated means.</li>
                                <li>Use Service data for commercial purposes without explicit written permission.</li>
                                <li>Engage in any activity that interferes with or disrupts the Service.</li>
                                <li>Attempt to gain unauthorized access to any part of the Service.</li>
                            </ul>
                        </section>

                        <section id="accuracy">
                            <h2 className="text-title text-primary mb-4">5. Data Accuracy Disclaimer</h2>
                            <p className="mb-4">While we strive for 100% accuracy, automotive specifications, pricing, and availability are subject to frequent changes. <strong>CarCompare does not guarantee the accuracy of any data provided on the platform.</strong></p>
                            <p>We strongly recommend verifying all specifications and pricing with the manufacturer or an authorized dealer before making any purchase decisions.</p>
                        </section>

                        <section id="ip">
                            <h2 className="text-title text-primary mb-4">6. Intellectual Property</h2>
                            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of CarCompare and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without prior written consent.</p>
                        </section>

                        <section id="liability">
                            <h2 className="text-title text-primary mb-4">8. Limitation of Liability</h2>
                            <p>In no event shall CarCompare, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
                        </section>

                        <section id="contact">
                            <h2 className="text-title text-primary mb-4">11. Contact</h2>
                            <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
                            <p>Email: <Link href="mailto:legal@carcompare.com" className="link">legal@carcompare.com</Link></p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}
