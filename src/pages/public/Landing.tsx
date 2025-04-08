import React from 'react';
import { Rocket } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="flex justify-center mb-8">
          <Rocket className="h-16 w-16 text-indigo-600" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Welcome to <span className="text-indigo-600">SessPay</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
          The complete solution for managing digital content monetization. Create, customize, and deploy paywalls in minutes.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/register"
            className="px-8 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/pricing"
            className="px-8 py-3 text-base font-medium rounded-md text-indigo-600 bg-white border border-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            View Pricing
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Integration</h3>
            <p className="text-gray-600">
              Integrate our paywall solution with just a few lines of code. No complex setup required.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Pricing</h3>
            <p className="text-gray-600">
              Create custom pricing models that work for your content and audience.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics</h3>
            <p className="text-gray-600">
              Get detailed insights into your paywall performance and user behavior.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}