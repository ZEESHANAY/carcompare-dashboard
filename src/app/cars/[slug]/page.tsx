import { cars, getCarBySlug, formatPrice } from '@/data/cars';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return cars.map((car) => ({
        slug: car.slug,
    }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function CarDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const car = getCarBySlug(slug);

    if (!car) {
        notFound();
    }

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            <section className="section">
                <div className="container">
                    {/* Breadcrumb */}
                    <div className="flex gap-2 mb-8 text-caption">
                        <Link href="/cars" className="link">Cars</Link>
                        <span className="text-muted">/</span>
                        <span className="text-muted">{car.brand}</span>
                        <span className="text-muted">/</span>
                        <span>{car.model}</span>
                    </div>

                    {/* Header */}
                    <div className="flex items-start justify-between mb-12">
                        <div>
                            <span className="badge mb-4">{car.category}</span>
                            <h1 className="text-display">{car.brand} {car.model}</h1>
                            <p className="text-body-lg text-secondary mt-2">
                                {car.year} Model Year
                            </p>
                        </div>
                        <div className="text-right">
                            <div className="text-caption text-muted">Starting at</div>
                            <div className="text-hero">{formatPrice(car.availability.startingPrice)}</div>
                            <span className={`badge mt-2 ${car.availability.status === 'available'
                                    ? 'badge-success'
                                    : car.availability.status === 'limited'
                                        ? 'badge-warning'
                                        : ''
                                }`}>
                                {car.availability.status === 'available' ? 'Available Now' :
                                    car.availability.status === 'limited' ? 'Limited Availability' : 'Coming Soon'}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-3 gap-8">
                        {/* Main Content */}
                        <div style={{ gridColumn: 'span 2' }}>
                            {/* Image Placeholder */}
                            <div
                                className="card mb-8"
                                style={{
                                    height: 400,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'var(--bg-hover)'
                                }}
                            >
                                <svg
                                    width="120"
                                    height="120"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    style={{ color: 'var(--text-muted)' }}
                                >
                                    <path d="M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                    <path d="M17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                    <path d="M5 9l2-4h10l2 4" />
                                    <path d="M5 9v6h2" />
                                    <path d="M19 9v6h-2" />
                                    <path d="M5 9h14" />
                                    <path d="M9 15h6" />
                                </svg>
                            </div>

                            {/* Specifications */}
                            <div className="card mb-8">
                                <h2 className="text-title mb-6">Performance Specifications</h2>
                                <div className="grid grid-2 gap-6">
                                    <div className="flex justify-between" style={{ paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)' }}>
                                        <span className="text-secondary">Horsepower</span>
                                        <span className="text-section" style={{ color: 'var(--accent-primary)' }}>{car.specs.horsepower} HP</span>
                                    </div>
                                    <div className="flex justify-between" style={{ paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)' }}>
                                        <span className="text-secondary">Torque</span>
                                        <span className="text-section" style={{ color: 'var(--accent-primary)' }}>{car.specs.torque} Nm</span>
                                    </div>
                                    <div className="flex justify-between" style={{ paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)' }}>
                                        <span className="text-secondary">Engine</span>
                                        <span>{car.specs.engine}</span>
                                    </div>
                                    <div className="flex justify-between" style={{ paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)' }}>
                                        <span className="text-secondary">Transmission</span>
                                        <span>{car.specs.transmission}</span>
                                    </div>
                                    <div className="flex justify-between" style={{ paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)' }}>
                                        <span className="text-secondary">Drivetrain</span>
                                        <span>{car.specs.drivetrain}</span>
                                    </div>
                                    <div className="flex justify-between" style={{ paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)' }}>
                                        <span className="text-secondary">Fuel Type</span>
                                        <span>{car.specs.fuelType}</span>
                                    </div>
                                    <div className="flex justify-between" style={{ paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)' }}>
                                        <span className="text-secondary">0-60 mph</span>
                                        <span className="text-section">{car.specs.acceleration}</span>
                                    </div>
                                    <div className="flex justify-between" style={{ paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)' }}>
                                        <span className="text-secondary">Top Speed</span>
                                        <span>{car.specs.topSpeed} mph</span>
                                    </div>
                                    <div className="flex justify-between" style={{ paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)' }}>
                                        <span className="text-secondary">MPG (City)</span>
                                        <span>{car.specs.mpg.city} mpg</span>
                                    </div>
                                    <div className="flex justify-between" style={{ paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)' }}>
                                        <span className="text-secondary">MPG (Highway)</span>
                                        <span>{car.specs.mpg.highway} mpg</span>
                                    </div>
                                </div>
                            </div>

                            {/* Brand History */}
                            <div className="card">
                                <h2 className="text-title mb-4">{car.brand} Heritage</h2>
                                <p className="text-body-lg text-secondary" style={{ lineHeight: 1.7 }}>
                                    {car.brandHistory}
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div>
                            {/* Quick Stats */}
                            <div className="card mb-6">
                                <h3 className="text-section mb-4">Quick Stats</h3>
                                <div className="flex flex-col gap-4">
                                    <div className="stat-item" style={{ textAlign: 'left' }}>
                                        <div className="stat-value" style={{ fontSize: 32 }}>{car.specs.horsepower}</div>
                                        <div className="stat-label">Horsepower</div>
                                    </div>
                                    <div className="stat-item" style={{ textAlign: 'left' }}>
                                        <div className="stat-value" style={{ fontSize: 32 }}>{car.specs.torque}</div>
                                        <div className="stat-label">Nm Torque</div>
                                    </div>
                                    <div className="stat-item" style={{ textAlign: 'left' }}>
                                        <div className="stat-value" style={{ fontSize: 32 }}>{car.specs.acceleration.replace(' 0-60 mph', '')}</div>
                                        <div className="stat-label">0-60 mph</div>
                                    </div>
                                </div>
                            </div>

                            {/* Warranty */}
                            <div className="card mb-6">
                                <h3 className="text-section mb-4">Warranty Coverage</h3>
                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-between">
                                        <span className="text-caption text-secondary">Basic</span>
                                        <span className="text-caption">{car.warranty.basic}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-caption text-secondary">Powertrain</span>
                                        <span className="text-caption">{car.warranty.powertrain}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-caption text-secondary">Roadside</span>
                                        <span className="text-caption">{car.warranty.roadside}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-caption text-secondary">Corrosion</span>
                                        <span className="text-caption">{car.warranty.corrosion}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="card mb-6">
                                <h3 className="text-section mb-4">Availability</h3>
                                <div className="flex flex-wrap gap-2">
                                    {car.availability.regions.map((region) => (
                                        <span key={region} className="badge">{region}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <Link
                                href="/compare"
                                className="btn btn-primary btn-lg"
                                style={{ width: '100%', marginBottom: 'var(--space-3)' }}
                            >
                                Compare This Car
                            </Link>
                            <Link
                                href="/cars"
                                className="btn btn-secondary btn-lg"
                                style={{ width: '100%' }}
                            >
                                ← Back to All Cars
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
