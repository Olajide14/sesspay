import React from 'react';

const AccessRules: React.FC = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Access Rules</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Manage Access Rules
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  Control who can access your content and under what conditions.
                </p>
              </div>
              <div className="mt-5">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-base font-medium text-gray-900">Default Access Rule</h4>
                        <p className="mt-1 text-sm text-gray-500">
                          This rule applies to all content unless overridden by a more specific rule.
                        </p>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="bg-white text-gray-700 hover:bg-gray-50 font-medium py-1 px-3 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="mt-3 text-sm">
                      <div className="flex items-center text-gray-700">
                        <span className="font-medium">Access Type:</span>
                        <span className="ml-2">Payment Required</span>
                      </div>
                      <div className="flex items-center text-gray-700 mt-1">
                        <span className="font-medium">Price:</span>
                        <span className="ml-2">$9.99</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <svg
                        className="-ml-1 mr-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Add Custom Rule
                    </button>
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

export default AccessRules;
