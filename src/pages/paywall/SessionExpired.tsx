import React from 'react';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Clock, LifeBuoy } from 'lucide-react';

const SessionExpired: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-amber-100 p-2 flex items-center justify-center">
            <AlertTriangle className="h-10 w-10 text-amber-500" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-dark">
          Session Expired
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w-md mx-auto">
          Session expired, kindly renew your session to continue using this service.
          No charges have been made to your account.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white py-8 px-4 shadow-xl shadow-gray-200/60 sm:rounded-xl sm:px-10 relative overflow-hidden">
          <div className="space-y-6">
            {/* Information panel */}
            <div className="bg-amber-50 border border-amber-100 rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Clock className="h-5 w-5 text-amber-600" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-amber-800">Payment session timed out</h3>
                  <div className="mt-2 text-sm text-amber-700">
                    <p>Oops! Your session timed out. Let’s start fresh and get you checked out!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to do next */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">What would you like to do next?</h3>
              <div className="space-y-4">
                <button
                  type="button"
                  className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Renew Session
                </button>
                
                <div className="flex justify-center">
                  <a 
                    href="/"
                    className="flex justify-center items-center py-2 px-6 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                  >
                    <Home className="h-4 w-4 mr-2 text-gray-500" />
                    Back to Home
                  </a>
                </div>
              </div>
            </div>

            {/* Troubleshooting help */}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Are you experiencing issues?</h3>
              <div className="rounded-md bg-gray-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <LifeBuoy className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-sm text-gray-500">
                    <p>If the problem persists, please try the following steps:</p>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Clear your browser cache</li>
                      <li>Use a different browser</li>
                      <li>Check your internet connection</li>
                      <li>
                        <a href="/support" className="text-primary hover:text-primary-700 font-medium">
                          Contact our support team
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom text */}
            <div className="text-center text-xs text-gray-500 pt-4 border-t border-gray-200">
              <p>
                Reference ID: <span className="font-mono">SESS-12345-ABCDE</span>
              </p>
              <p className="mt-1">
                Please include this reference ID if you contact support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionExpired;
