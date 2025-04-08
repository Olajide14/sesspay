import React from 'react';

const PaymentSuccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <svg
            className="mx-auto h-16 w-16 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
          Payment Successful
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Thank you for your purchase! You now have access to the content.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Receipt Details</h3>
              <div className="mt-4 bg-gray-50 p-4 rounded-md border border-gray-200">
                <dl className="divide-y divide-gray-200">
                  <div className="py-2 flex justify-between text-sm">
                    <dt className="text-gray-500">Transaction ID</dt>
                    <dd className="text-gray-900 font-medium">TXN123456789</dd>
                  </div>
                  <div className="py-2 flex justify-between text-sm">
                    <dt className="text-gray-500">Date</dt>
                    <dd className="text-gray-900 font-medium">April 8, 2025</dd>
                  </div>
                  <div className="py-2 flex justify-between text-sm">
                    <dt className="text-gray-500">Amount</dt>
                    <dd className="text-gray-900 font-medium">$9.99</dd>
                  </div>
                  <div className="py-2 flex justify-between text-sm">
                    <dt className="text-gray-500">Payment Method</dt>
                    <dd className="text-gray-900 font-medium">Credit Card (**** 1234)</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                View Content
              </button>
              <a href="/" className="text-sm text-blue-600 hover:text-blue-500">
                Back to Home
              </a>
            </div>

            <div className="text-center text-xs text-gray-500">
              <p>If you have any questions, please contact our support team.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
