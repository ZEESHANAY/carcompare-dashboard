
import Link from 'next/link';

export default function TermsOfServicePage() {
    const sections = [
        { title: '1. Acceptance of Terms', id: 'acceptance' },
        { title: '2. Service Description', id: 'description' },
        { title: '3. User Accounts', id: 'accounts' },
        { title: '4. Acceptable Use', id: 'use' },
        { title: '5. Data Accuracy Disclaimer', id: 'accuracy' },
        { title: '6. Intellectual Property', id: 'ip' },
        { title: '7. Third-Party Links', id: 'links' },
        { title: '8. Limitation of Liability', id: 'liability' },
        { title: '9. Indemnification', id: 'indemnity' },
        { title: '10. Dispute Resolution', id: 'dispute' },
        { title: '11. Changes to Terms', id: 'changes' },
        { title: '12. Contact Information', id: 'contact' },
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <section className="section bg-surface">
                <div className="container" style={{ maxWidth: 1000 }}>
                    <h1 className="text-display mb-2" style={{ fontSize: '36px' }}>Terms of Service</h1>
                    <p className="text-caption text-muted uppercase tracking-widest font-bold">Effective Date: January 28, 2026</p>
                    <hr className="mt-8 mb-10" style={{ border: 'none', borderTop: '1px solid var(--border-subtle)' }} />

                    {/* Premium Table of Contents */}
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px bg-border-subtle flex-1" />
                            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-muted">Contents</h4>
                            <div className="h-px bg-border-subtle flex-1" />
                        </div>
                        <nav className="grid grid-1 md:grid-2 gap-4">
                            {sections.map((s, i) => (
                                <Link key={s.id} href={`#${s.id}`} className="group p-5 rounded-2xl bg-white border border-subtle hover:border-primary/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex items-center gap-5">
                                    <span className="text-2xl font-black text-muted/20 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                                        {(i + 1).toString().padStart(2, '0')}
                                    </span>
                                    <span className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">
                                        {s.title.split('. ')[1] || s.title}
                                    </span>
                                    <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary">
                                        →
                                    </div>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-12 text-secondary leading-relaxed text-lg">
                        <section id="acceptance">
                            <h2 className="text-title text-primary mb-3">1. Acceptance of Terms</h2>
                            <p>By accessing or using the CarCompare platform ("Service"), you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of these terms, you must immediately discontinue use of the Service.</p>
                        </section>

                        <section id="description">
                            <h2 className="text-title text-primary mb-3">2. Service Description</h2>
                            <p>CarCompare provides a digital platform for comparing vehicle specifications, exploring automotive resources, and accessing industry data. Our tools are designed for personal, non-commercial research purposes only.</p>
                        </section>

                        <section id="accounts">
                            <h2 className="text-title text-primary mb-3">3. User Accounts</h2>
                            <p className="mb-4">While many features are available without registration, certain comparison persistence tools require an account. You agree to:</p>
                            <div className="flex flex-col gap-3 pl-0">
                                <p><strong className="text-primary">Accuracy:</strong> Provide accurate and complete information during registration.</p>
                                <p><strong className="text-primary">Security:</strong> Maintain the security of your password and account details.</p>
                                <p><strong className="text-primary">Notification:</strong> Promptly notify us of any unauthorized use of your account.</p>
                            </div>
                        </section>

                        <section id="use">
                            <h2 className="text-title text-primary mb-3">4. Acceptable Use</h2>
                            <p className="mb-4">You are granted a limited, non-exclusive license to use CarCompare. You agree not to:</p>
                            <div className="flex flex-col gap-3 pl-0">
                                <p><strong className="text-primary">Scraping:</strong> Use any automated system (robots, scrapers, etc.) to access or extract data from the platform.</p>
                                <p><strong className="text-primary">Commercial Use:</strong> Use Service data for any commercial purpose without explicit written consent.</p>
                                <p><strong className="text-primary">Interference:</strong> Attempt to interfere with the proper working of the platform or bypass any security measures.</p>
                            </div>
                        </section>

                        <section id="accuracy">
                            <h2 className="text-title text-primary mb-3">5. Data Accuracy Disclaimer</h2>
                            <p className="mb-4">While we strive for 100% data integrity, automotive specifications, pricing, and regional availability change frequently. <strong>CarCompare provides its data "as is" and makes no guarantees regarding its absolute accuracy.</strong></p>
                            <p className="p-4 bg-hover border-none rounded-xl text-sm italic">Warning: Always verify critical specifications (like towing capacity, battery range, and final pricing) with the manufacturer or an authorized dealer before making a purchase decision.</p>
                        </section>

                        <section id="ip">
                            <h2 className="text-title text-primary mb-3">6. Intellectual Property</h2>
                            <p>The Service, including its custom logic, comparison algorithms, design system, and content, is the exclusive property of CarCompare and its licensors. You may not reproduce, distribute, or create derivative works from our platform without our permission.</p>
                        </section>

                        <section id="links">
                            <h2 className="text-title text-primary mb-3">7. Third-Party Links</h2>
                            <p>CarCompare may contain links to manufacturer websites, dealerships, or other third-party services. We do not endorse and are not responsible for the content, privacy policies, or practices of any third-party sites.</p>
                        </section>

                        <section id="liability">
                            <h2 className="text-title text-primary mb-3">8. Limitation of Liability</h2>
                            <p>In no event shall CarCompare, its directors, or its employees be liable for any indirect, incidental, or consequential damages resulting from your use of the platform or any purchase decisions made based on its content.</p>
                        </section>

                        <section id="indemnity">
                            <h2 className="text-title text-primary mb-3">9. Indemnification</h2>
                            <p>You agree to hold CarCompare harmless from any claims, damages, or expenses arising out of your use of the Service or your violation of these Terms.</p>
                        </section>

                        <section id="dispute">
                            <h2 className="text-title text-primary mb-3">10. Dispute Resolution</h2>
                            <p>These terms are governed by the laws of the State of California. Any disputes arising from these terms shall be resolved through binding arbitration in San Francisco, CA.</p>
                        </section>

                        <section id="changes">
                            <h2 className="text-title text-primary mb-3">11. Changes to Terms</h2>
                            <p>We reserve the right to modify these terms at any time. Significant changes will be communicated via site-wide notification. Your continued use of the platform after changes constitutes acceptance of the new terms.</p>
                        </section>

                        <section id="contact">
                            <h2 className="text-title text-primary mb-3">12. Contact Information</h2>
                            <p className="mb-4">For legal inquiries or questions regarding these terms, please contact:</p>
                            <p className="font-bold">Email: <Link href="mailto:legal@carcompare.com" className="link text-primary">legal@carcompare.com</Link></p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}
