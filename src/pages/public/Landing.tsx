import React from 'react';
import { 
  Rocket, 
  ArrowRight, 
  Lock, 
  Timer, 
  CreditCard, 
  BarChart3, 
  Code, 
  Zap,
  Check,
  Gem,
  Shield
} from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <Rocket className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold text-dark">SessPay</span>
              </div>
              <div className="hidden md:flex ml-10 space-x-8">
                <a href="#features" className="text-dark hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                <a href="#how-it-works" className="text-dark hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">How It Works</a>
                <a href="#pricing" className="text-dark hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                <a href="#docs" className="text-dark hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Documentation</a>
              </div>
            </div>
            <div className="flex items-center">
              <a href="/login" className="text-dark hover:text-primary-600 px-4 py-2 text-sm font-medium">Log in</a>
              <a href="/register" className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 transition-colors">Sign up</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-[0.03] z-0"></div>
        <div className="absolute -top-24 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 left-0 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="block text-dark mb-2 animate-fade-in">Monetize Access,</span>
              <span className="block bg-clip-text text-transparent bg-hero-gradient animate-slide-up">One Session at a Time.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
              SessPay is a developer-first platform that enables effortless monetization of digital services 
              through a reverse proxy paywall — no code changes required.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
              <a
                href="/register"
                className="px-8 py-3 text-base font-medium rounded-md text-white bg-primary hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 shadow-md"
              >
                Start Building for Free
              </a>
              <a
                href="#demo"
                className="px-8 py-3 text-base font-medium rounded-md text-primary bg-white border border-primary hover:bg-primary-50 transition-colors flex items-center justify-center"
              >
                Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-20 relative animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Developer integrating SessPay into application" 
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 sm:p-10">
                <p className="text-white text-sm sm:text-base font-semibold mb-2">Effortless Integration</p>
                <h3 className="text-white text-xl sm:text-3xl font-bold max-w-lg">Monetize your app without changing a single line of your code</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-dark sm:text-4xl mb-3">
              Built for developers who want to 
              <span className="block bg-clip-text text-transparent bg-hero-gradient">focus on building, not billing</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              SessPay handles all aspects of monetization so you can concentrate on creating great applications.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
            {/* Feature items */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-hero-gradient rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative p-6 bg-white rounded-lg border border-gray-100 h-full">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">Reverse Proxy Paywall</h3>
                <p className="text-gray-500">
                  Wrap your application with our secure proxy to block unauthorized access until payment is made. No code changes needed.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-hero-gradient rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative p-6 bg-white rounded-lg border border-gray-100 h-full">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                  <Timer className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">Session Management</h3>
                <p className="text-gray-500">
                  Control access duration, detect misuse, and provide detailed metrics on usage patterns and session activity.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-hero-gradient rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative p-6 bg-white rounded-lg border border-gray-100 h-full">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">Flexible Pricing Models</h3>
                <p className="text-gray-500">
                  Configure pay-per-session, one-time access, or per-request pricing to match your business model perfectly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">
              How <span className="bg-clip-text text-transparent bg-hero-gradient">SessPay</span> Works
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Our reverse proxy architecture makes integration simple. Here's how it works in three easy steps.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-xl">1</div>
              <h3 className="mt-6 text-xl font-semibold text-dark">Connect Your App</h3>
              <p className="mt-3 text-gray-500">Point your domain to our proxy or add our lightweight SDK to your existing app.</p>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80" 
                alt="Developer connecting app to SessPay" 
                className="mt-6 rounded-lg shadow-md w-full h-40 object-cover"
              />
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-xl">2</div>
              <h3 className="mt-6 text-xl font-semibold text-dark">Configure Access Rules</h3>
              <p className="mt-3 text-gray-500">Set up pricing, session duration, and access rules through our simple dashboard.</p>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80" 
                alt="User configuring SessPay dashboard" 
                className="mt-6 rounded-lg shadow-md w-full h-40 object-cover"
              />
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-xl">3</div>
              <h3 className="mt-6 text-xl font-semibold text-dark">Start Monetizing</h3>
              <p className="mt-3 text-gray-500">SessPay manages the payment process, access control, and session management automatically.</p>
              <img 
                src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80" 
                alt="Revenue dashboard showing monetization" 
                className="mt-6 rounded-lg shadow-md w-full h-40 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Start for free, scale as you grow. No hidden fees or long-term commitments.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-6">
            {/* Starter Plan */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-dark text-center">Starter</h3>
                <p className="mt-4 text-gray-500 text-center">Perfect for indie developers and small projects.</p>
                <p className="mt-8 text-center">
                  <span className="text-4xl font-extrabold text-dark">$0</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex">
                    <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-500">Up to 100 sessions/month</span>
                  </li>
                  <li className="flex">
                    <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-500">Basic analytics</span>
                  </li>
                  <li className="flex">
                    <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-500">Community support</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <a href="/register" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-primary-50 hover:bg-primary-100 transition-colors">
                    Start for free
                  </a>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-lg border border-primary-600 shadow-md overflow-hidden relative z-10 transform scale-105">
              <div className="absolute top-0 inset-x-0">
                <div className="h-1 bg-hero-gradient w-full"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                    <Gem className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-dark">Pro</h3>
                  <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">Popular</span>
                </div>
                <p className="mt-4 text-gray-500">For growing businesses with increasing traffic.</p>
                <p className="mt-8 text-center">
                  <span className="text-4xl font-extrabold text-dark">$49</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex">
                    <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-500">Up to 5,000 sessions/month</span>
                  </li>
                  <li className="flex">
                    <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-500">Advanced analytics</span>
                  </li>
                  <li className="flex">
                    <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-500">Email & chat support</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <a href="/register" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-700 transition-colors">
                    Start 14-day trial
                  </a>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-dark text-center">Enterprise</h3>
                <p className="mt-4 text-gray-500 text-center">For large-scale applications with high traffic needs.</p>
                <p className="mt-8 text-center">
                  <span className="text-4xl font-extrabold text-dark">$199</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex">
                    <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-500">Unlimited sessions</span>
                  </li>
                  <li className="flex">
                    <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-500">Priority support</span>
                  </li>
                  <li className="flex">
                    <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-500">Custom integration</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <a href="/contact" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-primary-50 hover:bg-primary-100 transition-colors">
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to supercharge your application?</span>
            <span className="block text-secondary">Start monetizing in minutes, not months.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/docs"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-800 hover:bg-primary-900"
              >
                View documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-gray-300">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Product</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#features" className="text-base text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-base text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Guides</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-sm text-gray-400 text-center">
              &copy; {new Date().getFullYear()} SessPay. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
