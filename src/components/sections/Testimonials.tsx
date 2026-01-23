'use client';

const testimonials = [
    {
        quote: "CarCompare saved me hours of research. I found the perfect SUV by comparing warranty terms and fuel economy side by side.",
        author: "Sarah Mitchell",
        role: "First-time Buyer",
        initials: "SM",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
        quote: "As a car enthusiast, I love how detailed the specs are. Horsepower, torque, 0-60 times - everything I need in one place.",
        author: "Michael Chen",
        role: "Auto Enthusiast",
        initials: "MC",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
        quote: "The brand history section helped me understand the heritage behind each manufacturer. Great for informed decisions.",
        author: "Emily Rodriguez",
        role: "Marketing Director",
        initials: "ER",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
];

export default function Testimonials() {
    return (
        <section className="section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-title">Loved by Car Buyers</h2>
                    <p className="text-secondary mt-2">See what our users are saying</p>
                </div>

                <div className="grid grid-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="card testimonial-card">
                            <p className="testimonial-quote">"{testimonial.quote}"</p>
                            <div className="testimonial-author">
                                <div
                                    className="testimonial-avatar"
                                    style={{ background: testimonial.gradient }}
                                >
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <div className="testimonial-name">{testimonial.author}</div>
                                    <div className="testimonial-role">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
