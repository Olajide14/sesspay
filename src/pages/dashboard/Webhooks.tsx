import React from 'react';

const Webhooks: React.FC = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Webhooks</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="bg-white shadow sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Webhook Endpoints</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Receive real-time updates for events in your application.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Webhook
                </button>
              </div>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="text-center py-6">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No webhooks configured</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get started by adding a new webhook endpoint.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Available Events</h3>
              <p className="mt-1 text-sm text-gray-500">
                Events that can trigger webhook notifications.
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-gray-50 overflow-hidden rounded-lg border border-gray-200">
                  <div className="px-4 py-5 sm:p-6">
                    <h4 className="text-base font-medium text-gray-900">Payment Events</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="text-sm text-gray-600">payment.succeeded</li>
                      <li className="text-sm text-gray-600">payment.failed</li>
                      <li className="text-sm text-gray-600">payment.refunded</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 overflow-hidden rounded-lg border border-gray-200">
                  <div className="px-4 py-5 sm:p-6">
                    <h4 className="text-base font-medium text-gray-900">Session Events</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="text-sm text-gray-600">session.created</li>
                      <li className="text-sm text-gray-600">session.started</li>
                      <li className="text-sm text-gray-600">session.expired</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 overflow-hidden rounded-lg border border-gray-200">
                  <div className="px-4 py-5 sm:p-6">
                    <h4 className="text-base font-medium text-gray-900">User Events</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="text-sm text-gray-600">user.created</li>
                      <li className="text-sm text-gray-600">user.updated</li>
                      <li className="text-sm text-gray-600">user.deleted</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webhooks;
