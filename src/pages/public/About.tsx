import React from 'react';
import { Rocket } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Empowering Digital Content Creators
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're building the future of content monetization, making it easier than ever for creators to earn from their digital content.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <Rocket className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Mission</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Revolutionizing Content Access
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our platform provides seamless, secure, and flexible solutions for content creators to monetize their work while delivering exceptional value to their audience.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're a passionate team of developers, designers, and entrepreneurs dedicated to empowering content creators worldwide.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'CEO & Founder',
                  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
                },
                {
                  name: 'Michael Chen',
                  role: 'CTO',
                  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
                },
                {
                  name: 'Emily Rodriguez',
                  role: 'Head of Product',
                  image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
                },
              ].map((person) => (
                <div key={person.name} className="flex flex-col items-center">
                  <img
                    className="mx-auto h-32 w-32 rounded-full"
                    src={person.image}
                    alt={person.name}
                  />
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-gray-600">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}