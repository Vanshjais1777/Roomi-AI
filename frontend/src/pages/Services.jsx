import React from 'react';
import NavBar from '../components/NavBar';

const Services = () => {
    const services = [
        {
            title: 'AI-Powered Room Design',
            description: 'Get personalized room designs with AI-driven suggestions for furniture placement, color schemes, and decor styles.',
            icon: '🧠',
        },
        {
            title: '3D Room Visualization',
            description: 'Experience your dream room in 3D. Visualize furniture arrangements, layouts, and decor before making any changes.',
            icon: '🛋️',
        },
        {
            title: 'Color Palette Recommendations',
            description: 'Find the perfect color combinations to match your style, mood, and room lighting with our AI-powered color matching.',
            icon: '🎨',
        },
        {
            title: 'Blueprint Analysis',
            description: 'Upload your room blueprints, and our AI will suggest optimized layouts for a well-designed, functional space.',
            icon: '📐',
        },
        {
            title: 'Shopping Assistance',
            description: 'Discover furniture and decor that match your design style and budget with our AI-powered shopping recommendations.',
            icon: '🛒',
        },
        {
            title: 'Interactive Style Quiz',
            description: 'Take a quick quiz to help Roomi AI understand your preferences and create designs that suit your unique taste.',
            icon: '📝',
        },
    ];

    return (
        <div className="min-h-screen bg-blue-500 flex flex-col items-center px-6">
            <div className="w-screen">
                <NavBar />
            </div>
            <h1 className="text-4xl font-bold text-black mb-10 mt-6">Our Services</h1>
            <p className="text-lg text-white max-w-2xl text-center mb-12">
                Roomi AI offers a variety of services to help you create the perfect interior space. From AI-powered design recommendations
                to personalized shopping assistance, explore how we can bring your vision to life.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transform transition duration-300 hover:-translate-y-1"
                    >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h2>
                        <p className="text-gray-500">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
