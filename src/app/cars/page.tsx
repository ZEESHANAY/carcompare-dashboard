import { cars, formatPrice } from '@/data/cars';
import Link from 'next/link';

export default function CarsPage() {
    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            <section className="section">
                <div className="container">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-hero">All Vehicles</h1>
                            <p className="text-secondary mt-2">
                                Browse our complete database of {cars.length} vehicles
                            </p>
                        </div>
                        <Link href="/compare" className="btn btn-primary">
                            Compare Cars
                        </Link>
                    </div>

                    <div className="grid grid-3 gap-6">
                        {cars.map((car) => (
                            <Link
                                key={car.id}
                                href={`/cars/${car.slug}`}
                                className="car-card"
                            >
                                <div className="car-card-image" style={{ position: 'relative', height: 200, padding: 0 }}>
                                    <img
                                        src={car.image}
                                        alt={car.model}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                <div className="car-card-content">
                                    <div className="flex items-center justify-between">
                                        <span className="car-card-brand">{car.brand}</span>
                                        <span className={`badge ${car.availability.status === 'available'
                                            ? 'badge-success'
                                            : car.availability.status === 'limited'
                                                ? 'badge-warning'
                                                : ''
                                            }`}>
                                            {car.availability.status}
                                        </span>
                                    </div>
                                    <div className="car-card-model">{car.model}</div>
                                    <div className="text-caption text-muted">{car.year} • {car.category}</div>

                                    <div className="car-card-specs">
                                        <div className="car-spec">
                                            <div className="car-spec-value">{car.specs.horsepower}</div>
                                            <div className="car-spec-label">HP</div>
                                        </div>
                                        <div className="car-spec">
                                            <div className="car-spec-value">{car.specs.torque}</div>
                                            <div className="car-spec-label">Nm</div>
                                        </div>
                                        <div className="car-spec">
                                            <div className="car-spec-value">{car.specs.acceleration.replace(' 0-60 mph', '')}</div>
                                            <div className="car-spec-label">0-60</div>
                                        </div>
                                        <div className="car-spec" style={{ marginLeft: 'auto' }}>
                                            <div className="car-spec-value" style={{ color: 'var(--text-primary)' }}>
                                                {formatPrice(car.availability.startingPrice).replace('$', '')}
                                            </div>
                                            <div className="car-spec-label">USD</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
