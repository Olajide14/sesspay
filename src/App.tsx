import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, DollarSign, BarChart3, Webhook, Code } from 'lucide-react';
import Dashboard from './Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="text-indigo-600">SessPay</span>
            </h1>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Monetize Access, One Session at a Time
            </p>
            <div className="mt-8 flex justify-center gap-x-4">
              <Link
                to="/dashboard"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started <ArrowRight className="ml-2 -mr-1 inline-block h-4 w-4" />
              </Link>
              <button className="rounded-lg bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-200">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={<Shield className="h-8 w-8 text-indigo-600" />}
              title="Reverse Proxy Paywall"
              description="Instantly wrap your app or API with secure authentication and payment processing."
            />
            <Feature
              icon={<Clock className="h-8 w-8 text-indigo-600" />}
              title="Session Management"
              description="Automated session control with expiration and misuse detection built-in."
            />
            <Feature
              icon={<DollarSign className="h-8 w-8 text-indigo-600" />}
              title="Flexible Pricing"
              description="Configure pay-per-session, one-time access, or per-request pricing models."
            />
            <Feature
              icon={<BarChart3 className="h-8 w-8 text-indigo-600" />}
              title="Developer Dashboard"
              description="Comprehensive analytics and revenue tracking at your fingertips."
            />
            <Feature
              icon={<Webhook className="h-8 w-8 text-indigo-600" />}
              title="Webhook Support"
              description="Real-time notifications for payments, sessions, and system alerts."
            />
            <Feature
              icon={<Code className="h-8 w-8 text-indigo-600" />}
              title="No-Code Integration"
              description="Deploy in minutes without modifying your existing codebase."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to monetize your service?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
              Start accepting payments in minutes with our developer-friendly platform.
            </p>
            <div className="mt-8">
              <Link
                to="/dashboard"
                className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2025 SessPay. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
}

export default App;