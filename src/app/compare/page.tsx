'use client';

import { useState } from 'react';
import { cars, Car, formatPrice } from '@/data/cars';
import Link from 'next/link';

export default function ComparePage() {
    const [selectedCars, setSelectedCars] = useState<string[]>([]);
    const maxCars = 3;

    const toggleCar = (carId: string) => {
        setSelectedCars((prev) => {
            if (prev.includes(carId)) {
                return prev.filter((id) => id !== carId);
            }
            if (prev.length >= maxCars) {
                return prev;
            }
            return [...prev, carId];
        });
    };

    const selectedCarData = cars.filter((car) => selectedCars.includes(car.id));

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Selection Section */}
            <section className="section-sm" style={{ backgroundColor: 'var(--bg-surface)' }}>
                <div className="container">
                    <div className="text-center mb-8">
                        <h1 className="text-hero">Compare Vehicles</h1>
                        <p className="text-body-lg text-secondary mt-4">
                            Select up to 3 vehicles to compare side by side
                        </p>
                    </div>

                    <div className="grid grid-4 gap-4">
                        {cars.map((car) => (
                            <div
                                key={car.id}
                                onClick={() => toggleCar(car.id)}
                                className="card"
                                style={{
                                    cursor: 'pointer',
                                    borderColor: selectedCars.includes(car.id)
                                        ? 'var(--accent-primary)'
                                        : 'var(--border-subtle)',
                                    backgroundColor: selectedCars.includes(car.id)
                                        ? 'var(--accent-light)'
                                        : 'var(--bg-surface)',
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-caption">{car.brand}</div>
                                        <div className="text-section">{car.model}</div>
                                        <div className="text-caption text-muted">{car.year}</div>
                                    </div>
                                    <div
                                        style={{
                                            width: 24,
                                            height: 24,
                                            borderRadius: '50%',
                                            border: `2px solid ${selectedCars.includes(car.id)
                                                    ? 'var(--accent-primary)'
                                                    : 'var(--border-subtle)'
                                                }`,
                                            backgroundColor: selectedCars.includes(car.id)
                                                ? 'var(--accent-primary)'
                                                : 'transparent',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {selectedCars.includes(car.id) && (
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            {selectedCarData.length > 0 && (
                <section className="section">
                    <div className="container">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-title">Comparison Results</h2>
                            <button
                                onClick={() => setSelectedCars([])}
                                className="btn btn-secondary"
                            >
                                Clear All
                            </button>
                        </div>

                        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                            <table className="compare-table" style={{ width: '100%' }}>
                                <thead>
                                    <tr style={{ backgroundColor: 'var(--bg-hover)' }}>
                                        <th style={{ width: 200 }}>Specification</th>
                                        {selectedCarData.map((car) => (
                                            <th key={car.id}>
                                                <div className="text-caption">{car.brand}</div>
                                                <div className="text-section">{car.model}</div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Basic Info */}
                                    <tr>
                                        <td className="text-secondary">Year</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id}>{car.year}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">Category</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id}>{car.category}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">Starting Price</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id} style={{ fontWeight: 600 }}>
                                                {formatPrice(car.availability.startingPrice)}
                                            </td>
                                        ))}
                                    </tr>

                                    {/* Divider */}
                                    <tr>
                                        <td colSpan={selectedCarData.length + 1} style={{
                                            backgroundColor: 'var(--bg-hover)',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            fontSize: 11,
                                            letterSpacing: '0.05em',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            Engine & Performance
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="text-secondary">Horsepower</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id} style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>
                                                {car.specs.horsepower} HP
                                            </td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">Torque</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id} style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>
                                                {car.specs.torque} Nm
                                            </td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">Engine</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id}>{car.specs.engine}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">0-60 mph</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id}>{car.specs.acceleration}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">Top Speed</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id}>{car.specs.topSpeed} mph</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">Transmission</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id}>{car.specs.transmission}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">Drivetrain</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id}>{car.specs.drivetrain}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">Fuel Type</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id}>{car.specs.fuelType}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">MPG (City / Highway)</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id}>
                                                {car.specs.mpg.city} / {car.specs.mpg.highway}
                                            </td>
                                        ))}
                                    </tr>

                                    {/* Warranty Section */}
                                    <tr>
                                        <td colSpan={selectedCarData.length + 1} style={{
                                            backgroundColor: 'var(--bg-hover)',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            fontSize: 11,
                                            letterSpacing: '0.05em',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            Warranty Coverage
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="text-secondary">Basic Warranty</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id}>{car.warranty.basic}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">Powertrain</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id}>{car.warranty.powertrain}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">Roadside Assistance</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id}>{car.warranty.roadside}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">Corrosion</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id}>{car.warranty.corrosion}</td>
                                        ))}
                                    </tr>

                                    {/* Availability */}
                                    <tr>
                                        <td colSpan={selectedCarData.length + 1} style={{
                                            backgroundColor: 'var(--bg-hover)',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            fontSize: 11,
                                            letterSpacing: '0.05em',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            Availability
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="text-secondary">Status</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id}>
                                                <span className={`badge ${car.availability.status === 'available'
                                                        ? 'badge-success'
                                                        : car.availability.status === 'limited'
                                                            ? 'badge-warning'
                                                            : ''
                                                    }`}>
                                                    {car.availability.status === 'available' ? 'Available' :
                                                        car.availability.status === 'limited' ? 'Limited' : 'Coming Soon'}
                                                </span>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">Regions</td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id}>{car.availability.regions.join(', ')}</td>
                                        ))}
                                    </tr>

                                    {/* Actions */}
                                    <tr>
                                        <td></td>
                                        {selectedCarData.map((car) => (
                                            <td key={car.id}>
                                                <Link
                                                    href={`/cars/${car.slug}`}
                                                    className="btn btn-secondary"
                                                    style={{ width: '100%' }}
                                                >
                                                    View Details
                                                </Link>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            )}

            {/* Empty State */}
            {selectedCarData.length === 0 && (
                <section className="section">
                    <div className="container text-center">
                        <div className="text-muted" style={{ fontSize: 48, marginBottom: 'var(--space-4)' }}>
                            ↑
                        </div>
                        <p className="text-secondary">
                            Select vehicles above to start comparing
                        </p>
                    </div>
                </section>
            )}
        </div>
    );
}
