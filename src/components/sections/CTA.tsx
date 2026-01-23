'use client';

import Link from 'next/link';

export default function CTA() {
    return (
        <section className="section-sm">
            <div className="container">
                <div className="cta-section">
                    <h2 className="text-hero">Ready to Find Your Perfect Car?</h2>
                    <p className="text-body-lg mt-4" style={{ maxWidth: 500, margin: '16px auto 0' }}>
                        Start comparing vehicles today and make your next purchase with confidence.
                    </p>
                    <div className="flex justify-center gap-4 mt-8">
                        <Link href="/compare" className="btn btn-primary btn-lg">
                            Start Comparing Now
                        </Link>
                        <Link href="/cars" className="btn btn-ghost btn-lg" style={{ color: 'var(--bg-surface)' }}>
                            Browse All Cars →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
