import React from 'react';

const Integration: React.FC = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Integration</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="bg-white shadow sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Integration Guide</h3>
              <p className="mt-1 text-sm text-gray-500">
                Follow these steps to integrate SessPay into your application.
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium text-gray-900">1. Install the SDK</h4>
                  <div className="mt-2 bg-gray-50 p-4 rounded-md">
                    <pre className="text-sm text-gray-700 overflow-x-auto">
                      npm install @sesspay/sdk
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-base font-medium text-gray-900">2. Initialize the Client</h4>
                  <div className="mt-2 bg-gray-50 p-4 rounded-md">
                    <pre className="text-sm text-gray-700 overflow-x-auto">
                      {`import { SessPayClient } from '@sesspay/sdk';

const client = new SessPayClient({
  projectId: 'YOUR_PROJECT_ID',
  apiKey: 'YOUR_API_KEY'
});`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-medium text-gray-900">3. Protect Your Content</h4>
                  <div className="mt-2 bg-gray-50 p-4 rounded-md">
                    <pre className="text-sm text-gray-700 overflow-x-auto">
                      {`// Example: Express middleware
app.use('/premium-content', client.protect({
  redirectUrl: '/paywall',
  sessionDuration: '24h'
}));`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-medium text-gray-900">4. Create Your Paywall</h4>
                  <div className="mt-2 bg-gray-50 p-4 rounded-md">
                    <pre className="text-sm text-gray-700 overflow-x-auto">
                      {`// Redirect to the SessPay paywall
app.get('/paywall', (req, res) => {
  const paywallUrl = client.createPaywallUrl({
    returnUrl: '/premium-content',
    price: 9.99,
    name: 'Premium Subscription'
  });
  res.redirect(paywallUrl);
});`}
                    </pre>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-500 font-medium"
                  >
                    View Full Documentation →
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Your Integration</h3>
              <p className="mt-1 text-sm text-gray-500">
                Current integration details and settings.
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="text-center py-6">
                <p className="text-gray-500 mb-4">No integration configured yet.</p>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Configure Integration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
