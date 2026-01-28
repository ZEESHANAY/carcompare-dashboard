
import Link from 'next/link';

export default function PrivacyPolicyPage() {
    const sections = [
        { title: 'Information We Collect', id: 'collection' },
        { title: 'How We Use Information', id: 'usage' },
        { title: 'Data Sharing', id: 'sharing' },
        { title: 'Cookies & Tracking', id: 'cookies' },
        { title: 'Your Rights & Choices', id: 'rights' },
        { title: 'Data Security', id: 'security' },
        { title: "Children's Privacy", id: 'children' },
        { title: 'Changes to Policy', id: 'changes' },
        { title: 'Contact Us', id: 'contact' },
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <section className="section bg-surface">
                <div className="container" style={{ maxWidth: 800 }}>
                    <h1 className="text-title" style={{ fontSize: '32px', marginBottom: 'var(--space-2)' }}>Privacy Policy</h1>
                    <p className="text-caption">Last Updated: January 28, 2026</p>
                    <hr className="mt-8 mb-8" style={{ border: 'none', borderTop: '1px solid var(--border-subtle)' }} />

                    <div className="card bg-hover border-none mb-12">
                        <h4 className="font-bold mb-4 text-sm uppercase">Table of Contents</h4>
                        <ul className="flex flex-col gap-2">
                            {sections.map(s => (
                                <li key={s.id}><Link href={`#${s.id}`} className="text-sm link">{s.title}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-12 text-secondary">
                        <section id="collection">
                            <h2 className="text-title text-primary mb-4">1. Information We Collect</h2>
                            <p className="mb-4">At CarCompare, we collect information to provide better services to all our users. The types of information we collect include:</p>
                            <ul className="flex flex-col gap-2 list-disc pl-5">
                                <li><strong>Usage Data:</strong> We collect information about how you interact with our platform, including comparison history, vehicles viewed, and search queries.</li>
                                <li><strong>Device Information:</strong> We collect data about the device you use to access CarCompare, such as IP address, browser type, and operating system.</li>
                                <li><strong>Communication Data:</strong> If you contact us directly, we may receive additional information such as your name, email address, and the contents of your message.</li>
                            </ul>
                        </section>

                        <section id="usage">
                            <h2 className="text-title text-primary mb-4">2. How We Use Information</h2>
                            <p className="mb-4">We use the information we collect for various purposes, including:</p>
                            <ul className="flex flex-col gap-2 list-disc pl-5">
                                <li>Providing, operating, and maintaining our website.</li>
                                <li>Improving, personalizing, and expanding our platform.</li>
                                <li>Understanding and analyzing how you use our website.</li>
                                <li>Developing new products, services, features, and functionality.</li>
                                <li>Communicating with you for customer service, updates, and marketing (with your consent).</li>
                            </ul>
                        </section>

                        <section id="sharing">
                            <h2 className="text-title text-primary mb-4">3. Data Sharing</h2>
                            <p className="mb-4"><strong>We do not sell your personal data.</strong> We only share information in the following circumstances:</p>
                            <ul className="flex flex-col gap-2 list-disc pl-5">
                                <li><strong>With Service Providers:</strong> We may share data with third-party vendors who perform services for us, such as hosting, analytics, and marketing tools.</li>
                                <li><strong>For Legal Reasons:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities.</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the new owner.</li>
                            </ul>
                        </section>

                        <section id="cookies">
                            <h2 className="text-title text-primary mb-4">4. Cookies & Tracking</h2>
                            <p className="mb-4">We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                        </section>

                        <section id="rights">
                            <h2 className="text-title text-primary mb-4">5. Your Rights & Choices</h2>
                            <p className="mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
                            <ul className="flex flex-col gap-2 list-disc pl-5">
                                <li>The right to access, update, or delete the information we have on you.</li>
                                <li>The right of rectification if that information is inaccurate.</li>
                                <li>The right to object to our processing of your personal data.</li>
                                <li>The right to data portability.</li>
                            </ul>
                        </section>

                        <section id="security">
                            <h2 className="text-title text-primary mb-4">6. Data Security</h2>
                            <p className="mb-4">The security of your data is important to us, but remember that no method of transmission over the Internet is 100% secure. We strive to use commercially acceptable means to protect your personal data, including encryption and regular security audits.</p>
                        </section>

                        <section id="contact">
                            <h2 className="text-title text-primary mb-4">9. Contact Us</h2>
                            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
                            <p>Email: <Link href="mailto:privacy@carcompare.com" className="link">privacy@carcompare.com</Link></p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}
