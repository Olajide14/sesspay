import React from 'react';

const SessionExpired: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <svg
            className="mx-auto h-16 w-16 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
          Session Expired
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Your payment session has expired. Please start a new transaction.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-sm text-gray-700 mb-4">
                Payment sessions expire after 15 minutes for security reasons. Don't worry, no charges were made to your account.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Try Again
              </button>
              <a href="/" className="text-sm text-blue-600 hover:text-blue-500">
                Back to Home
              </a>
            </div>

            <div className="text-center text-xs text-gray-500">
              <p>If you continue to experience issues, please contact our support team.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionExpired;
