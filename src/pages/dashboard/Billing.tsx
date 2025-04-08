import React from 'react';

const Billing: React.FC = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Billing</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          {/* Subscription Information */}
          <div className="bg-white shadow sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Subscription Information</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Current plan and billing details.</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Current Plan</dt>
                  <dd className="mt-1 text-sm text-gray-900">Free Trial</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Billing Cycle</dt>
                  <dd className="mt-1 text-sm text-gray-900">Monthly</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Next Billing Date</dt>
                  <dd className="mt-1 text-sm text-gray-900">May 8, 2025</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Amount</dt>
                  <dd className="mt-1 text-sm text-gray-900">$0.00 (Free Trial)</dd>
                </div>
              </dl>
            </div>
            <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white shadow sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Payment Methods</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Manage your payment information.</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <div className="text-center py-6">
                <p className="text-gray-500 mb-4">No payment methods added yet.</p>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Payment Method
                </button>
              </div>
            </div>
          </div>

          {/* Billing History */}
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Billing History</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">View your past invoices and billing history.</p>
            </div>
            <div className="border-t border-gray-200">
              <div className="text-center py-10">
                <p className="text-gray-500 mb-4">No billing history available yet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
