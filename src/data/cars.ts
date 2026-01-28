export interface CarSpecs {
    horsepower: number;
    torque: number;
    engine: string;
    transmission: string;
    drivetrain: string;
    fuelType: string;
    mpg: { city: number; highway: number };
    acceleration: string;
    topSpeed: number;
}

export interface CarWarranty {
    basic: string;
    powertrain: string;
    roadside: string;
    corrosion: string;
}

export interface CarAvailability {
    regions: string[];
    startingPrice: number;
    status: 'available' | 'limited' | 'coming-soon';
}

export interface Car {
    id: string;
    slug: string;
    brand: string;
    model: string;
    year: number;
    category: string;
    image: string;
    specs: CarSpecs;
    warranty: CarWarranty;
    availability: CarAvailability;
    brandHistory: string;
}

export const cars: Car[] = [
    {
        id: '1',
        slug: 'bmw-m4-competition',
        brand: 'BMW',
        model: 'M4 Competition',
        year: 2024,
        category: 'Sports Car',
        image: '/cars/bmw-m4.png',
        specs: {
            horsepower: 503,
            torque: 479,
            engine: '3.0L Twin-Turbo I6',
            transmission: '8-Speed Automatic',
            drivetrain: 'RWD',
            fuelType: 'Gasoline',
            mpg: { city: 16, highway: 23 },
            acceleration: '3.8s 0-60 mph',
            topSpeed: 180,
        },
        warranty: {
            basic: '4 years / 50,000 miles',
            powertrain: '4 years / 50,000 miles',
            roadside: '4 years / Unlimited miles',
            corrosion: '12 years / Unlimited miles',
        },
        availability: {
            regions: ['USA', 'Europe', 'Asia'],
            startingPrice: 74700,
            status: 'available',
        },
        brandHistory: 'BMW (Bayerische Motoren Werke) was founded in 1916 in Munich, Germany. Originally an aircraft engine manufacturer, BMW transitioned to motorcycles in 1923 and automobiles in 1928.',
    },
    {
        id: '2',
        slug: 'mercedes-amg-c63',
        brand: 'Mercedes-Benz',
        model: 'AMG C 63 S',
        year: 2024,
        category: 'Sports Sedan',
        image: '/cars/mercedes-c63.png',
        specs: {
            horsepower: 671,
            torque: 752,
            engine: '2.0L Turbo I4 + Hybrid',
            transmission: '9-Speed Automatic',
            drivetrain: 'AWD',
            fuelType: 'Hybrid',
            mpg: { city: 20, highway: 27 },
            acceleration: '3.4s 0-60 mph',
            topSpeed: 174,
        },
        warranty: {
            basic: '4 years / 50,000 miles',
            powertrain: '4 years / 50,000 miles',
            roadside: '4 years / Unlimited miles',
            corrosion: '4 years / Unlimited miles',
        },
        availability: {
            regions: ['USA', 'Europe', 'Middle East'],
            startingPrice: 83900,
            status: 'available',
        },
        brandHistory: 'Mercedes-Benz traces its origins to Karl Benz\'s creation of the first petrol-powered car in 1886. The brand merged with Daimler in 1926 to form one of the world\'s most prestigious automotive companies.',
    },
    {
        id: '3',
        slug: 'tesla-model-s-plaid',
        brand: 'Tesla',
        model: 'Model S Plaid',
        year: 2024,
        category: 'Electric Sedan',
        image: '/cars/tesla-model-s.png',
        specs: {
            horsepower: 1020,
            torque: 1050,
            engine: 'Tri Motor Electric',
            transmission: 'Single-Speed',
            drivetrain: 'AWD',
            fuelType: 'Electric',
            mpg: { city: 124, highway: 115 },
            acceleration: '1.99s 0-60 mph',
            topSpeed: 200,
        },
        warranty: {
            basic: '4 years / 50,000 miles',
            powertrain: '8 years / 150,000 miles',
            roadside: '4 years / 50,000 miles',
            corrosion: '12 years / Unlimited miles',
        },
        availability: {
            regions: ['USA', 'Europe', 'Asia', 'Australia'],
            startingPrice: 89990,
            status: 'available',
        },
        brandHistory: 'Tesla was founded in 2003 by Martin Eberhard and Marc Tarpenning, with Elon Musk joining as chairman in 2004. The company revolutionized the electric vehicle market with the Roadster in 2008.',
    },
    {
        id: '4',
        slug: 'porsche-911-turbo-s',
        brand: 'Porsche',
        model: '911 Turbo S',
        year: 2024,
        category: 'Sports Car',
        image: '/cars/porsche-911.png',
        specs: {
            horsepower: 640,
            torque: 590,
            engine: '3.7L Twin-Turbo Flat-6',
            transmission: '8-Speed PDK',
            drivetrain: 'AWD',
            fuelType: 'Gasoline',
            mpg: { city: 15, highway: 20 },
            acceleration: '2.6s 0-60 mph',
            topSpeed: 205,
        },
        warranty: {
            basic: '4 years / 50,000 miles',
            powertrain: '4 years / 50,000 miles',
            roadside: '4 years / 50,000 miles',
            corrosion: '12 years / Unlimited miles',
        },
        availability: {
            regions: ['USA', 'Europe', 'Asia'],
            startingPrice: 230000,
            status: 'limited',
        },
        brandHistory: 'Porsche was founded by Ferdinand Porsche in 1931. The iconic 911, first introduced in 1964, remains the heart of the brand and one of the world\'s most recognizable sports cars.',
    },
    {
        id: '5',
        slug: 'toyota-supra-gr',
        brand: 'Toyota',
        model: 'GR Supra',
        year: 2024,
        category: 'Sports Car',
        image: '/cars/toyota-supra.png',
        specs: {
            horsepower: 382,
            torque: 368,
            engine: '3.0L Twin-Scroll Turbo I6',
            transmission: '8-Speed Automatic',
            drivetrain: 'RWD',
            fuelType: 'Gasoline',
            mpg: { city: 22, highway: 30 },
            acceleration: '3.9s 0-60 mph',
            topSpeed: 155,
        },
        warranty: {
            basic: '3 years / 36,000 miles',
            powertrain: '5 years / 60,000 miles',
            roadside: '2 years / Unlimited miles',
            corrosion: '5 years / Unlimited miles',
        },
        availability: {
            regions: ['USA', 'Japan', 'Europe'],
            startingPrice: 56250,
            status: 'available',
        },
        brandHistory: 'Toyota was founded in 1937 by Kiichiro Toyoda. Starting with the Model AA, Toyota grew to become the world\'s largest automaker, known for reliability and innovation.',
    },
    {
        id: '6',
        slug: 'audi-rs7',
        brand: 'Audi',
        model: 'RS 7 Sportback',
        year: 2024,
        category: 'Sports Sedan',
        image: '/cars/audi-rs7.png',
        specs: {
            horsepower: 621,
            torque: 627,
            engine: '4.0L Twin-Turbo V8',
            transmission: '8-Speed Tiptronic',
            drivetrain: 'AWD',
            fuelType: 'Gasoline',
            mpg: { city: 15, highway: 22 },
            acceleration: '3.5s 0-60 mph',
            topSpeed: 190,
        },
        warranty: {
            basic: '4 years / 50,000 miles',
            powertrain: '4 years / 50,000 miles',
            roadside: '4 years / Unlimited miles',
            corrosion: '12 years / Unlimited miles',
        },
        availability: {
            regions: ['USA', 'Europe', 'Middle East'],
            startingPrice: 128000,
            status: 'available',
        },
        brandHistory: 'Audi\'s origins trace back to 1909 when August Horch founded the company. The four rings in Audi\'s logo represent the 1932 merger of four manufacturers: Audi, DKW, Horch, and Wanderer.',
    },
    {
        id: '7',
        slug: 'honda-civic-type-r',
        brand: 'Honda',
        model: 'Civic Type R',
        year: 2024,
        category: 'Hot Hatch',
        image: 'https://hips.hearstapps.com/hmg-prod/images/2024-honda-civic-type-r-110-657fd1c8ce15a.jpg?crop=0.669xw:0.503xh;0.186xw,0.271xh&resize=2048:*',
        specs: {
            horsepower: 315,
            torque: 310,
            engine: '2.0L Turbo I4',
            transmission: '6-Speed Manual',
            drivetrain: 'FWD',
            fuelType: 'Gasoline',
            mpg: { city: 22, highway: 28 },
            acceleration: '5.0s 0-60 mph',
            topSpeed: 169,
        },
        warranty: {
            basic: '3 years / 36,000 miles',
            powertrain: '5 years / 60,000 miles',
            roadside: '3 years / 36,000 miles',
            corrosion: '5 years / Unlimited miles',
        },
        availability: {
            regions: ['USA', 'Japan', 'Europe'],
            startingPrice: 44295,
            status: 'limited',
        },
        brandHistory: 'Honda was founded by Soichiro Honda in 1948, initially as a motorcycle manufacturer. The company entered the automotive market in 1963 and became known for reliable, fuel-efficient vehicles.',
    },
    {
        id: '8',
        slug: 'ford-mustang-gt',
        brand: 'Ford',
        model: 'Mustang GT',
        year: 2024,
        category: 'Muscle Car',
        image: 'https://hips.hearstapps.com/hmg-prod/images/2024-ford-mustang-gt-100-651ce21b99c2b.jpg?crop=0.723xw:0.815xh;0.140xw,0.134xh&resize=2048:*',
        specs: {
            horsepower: 486,
            torque: 418,
            engine: '5.0L V8',
            transmission: '10-Speed Automatic',
            drivetrain: 'RWD',
            fuelType: 'Gasoline',
            mpg: { city: 17, highway: 26 },
            acceleration: '4.1s 0-60 mph',
            topSpeed: 168,
        },
        warranty: {
            basic: '3 years / 36,000 miles',
            powertrain: '5 years / 60,000 miles',
            roadside: '5 years / 60,000 miles',
            corrosion: '5 years / Unlimited miles',
        },
        availability: {
            regions: ['USA', 'Europe', 'Australia'],
            startingPrice: 45665,
            status: 'available',
        },
        brandHistory: 'Ford Motor Company was founded by Henry Ford in 1903. The Mustang, introduced in 1964, became an American icon and defined the "pony car" segment.',
    },
    {
        id: '9',
        slug: 'lamborghini-huracan',
        brand: 'Lamborghini',
        model: 'Huracán EVO',
        year: 2024,
        category: 'Supercar',
        image: 'https://hips.hearstapps.com/hmg-prod/images/2023-lamborghini-huracan-sterrato-101-1669735844.jpg?crop=0.577xw:0.771xh;0.237xw,0.142xh&resize=2048:*',
        specs: {
            horsepower: 631,
            torque: 442,
            engine: '5.2L V10',
            transmission: '7-Speed Dual-Clutch',
            drivetrain: 'AWD',
            fuelType: 'Gasoline',
            mpg: { city: 13, highway: 18 },
            acceleration: '2.9s 0-60 mph',
            topSpeed: 202,
        },
        warranty: {
            basic: '3 years / Unlimited miles',
            powertrain: '3 years / Unlimited miles',
            roadside: '3 years / Unlimited miles',
            corrosion: '3 years / Unlimited miles',
        },
        availability: {
            regions: ['USA', 'Europe', 'Middle East'],
            startingPrice: 261274,
            status: 'limited',
        },
        brandHistory: 'Lamborghini was founded by Ferruccio Lamborghini in 1963. Legend has it that a dispute with Enzo Ferrari motivated him to create his own sports cars.',
    },
    {
        id: '10',
        slug: 'chevrolet-corvette-z06',
        brand: 'Chevrolet',
        model: 'Corvette Z06',
        year: 2024,
        category: 'Sports Car',
        image: 'https://hips.hearstapps.com/hmg-prod/images/2023-chevrolet-corvette-z06-coupe-3lz-with-z07-performance-package-121-1653499411.jpg?crop=0.719xw:0.547xh;0.122xw,0.271xh&resize=2048:*',
        specs: {
            horsepower: 670,
            torque: 460,
            engine: '5.5L Flat-Plane V8',
            transmission: '8-Speed Dual-Clutch',
            drivetrain: 'RWD',
            fuelType: 'Gasoline',
            mpg: { city: 13, highway: 20 },
            acceleration: '2.6s 0-60 mph',
            topSpeed: 195,
        },
        warranty: {
            basic: '3 years / 36,000 miles',
            powertrain: '5 years / 60,000 miles',
            roadside: '5 years / 60,000 miles',
            corrosion: '6 years / 100,000 miles',
        },
        availability: {
            regions: ['USA', 'Europe'],
            startingPrice: 115865,
            status: 'available',
        },
        brandHistory: 'Chevrolet was founded by Louis Chevrolet and William Durant in 1911. The Corvette, America\'s sports car, has been in production since 1953 and remains an icon.',
    },
    {
        id: '11',
        slug: 'nissan-gtr-nismo',
        brand: 'Nissan',
        model: 'GT-R NISMO',
        year: 2024,
        category: 'Sports Car',
        image: 'https://hips.hearstapps.com/hmg-prod/images/2020-nissan-gt-r-nismo-109-1567094970.jpg?crop=0.817xw:0.612xh;0.0625xw,0.299xh&resize=2048:*',
        specs: {
            horsepower: 600,
            torque: 481,
            engine: '3.8L Twin-Turbo V6',
            transmission: '6-Speed Dual-Clutch',
            drivetrain: 'AWD',
            fuelType: 'Gasoline',
            mpg: { city: 15, highway: 22 },
            acceleration: '2.5s 0-60 mph',
            topSpeed: 205,
        },
        warranty: {
            basic: '3 years / 36,000 miles',
            powertrain: '5 years / 60,000 miles',
            roadside: '3 years / 36,000 miles',
            corrosion: '5 years / Unlimited miles',
        },
        availability: {
            regions: ['USA', 'Japan', 'Europe'],
            startingPrice: 227600,
            status: 'limited',
        },
        brandHistory: 'Nissan traces its origins to 1933. The GT-R, born from Nissan\'s Skyline heritage, became known as "Godzilla" for its dominant performance on the track.',
    },
    {
        id: '12',
        slug: 'lexus-lc500',
        brand: 'Lexus',
        model: 'LC 500',
        year: 2024,
        category: 'Grand Tourer',
        image: 'https://hips.hearstapps.com/hmg-prod/images/2024-lexus-lc-500-105-657fd06aea07f.jpg?crop=0.693xw:0.521xh;0.193xw,0.304xh&resize=2048:*',
        specs: {
            horsepower: 471,
            torque: 398,
            engine: '5.0L V8',
            transmission: '10-Speed Automatic',
            drivetrain: 'RWD',
            fuelType: 'Gasoline',
            mpg: { city: 15, highway: 25 },
            acceleration: '4.4s 0-60 mph',
            topSpeed: 168,
        },
        warranty: {
            basic: '4 years / 50,000 miles',
            powertrain: '6 years / 70,000 miles',
            roadside: '4 years / Unlimited miles',
            corrosion: '6 years / Unlimited miles',
        },
        availability: {
            regions: ['USA', 'Japan', 'Europe'],
            startingPrice: 98550,
            status: 'available',
        },
        brandHistory: 'Lexus was launched by Toyota in 1989 as a luxury vehicle division. The brand has become synonymous with reliability and refined luxury.',
    },
];

export function getCarBySlug(slug: string): Car | undefined {
    return cars.find((car) => car.slug === slug);
}

export function getCarsByBrand(brand: string): Car[] {
    return cars.filter((car) => car.brand.toLowerCase() === brand.toLowerCase());
}

export function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(price);
}
