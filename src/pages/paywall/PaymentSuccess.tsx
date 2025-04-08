import React from 'react';
import { CheckCircle, Download, Home, ArrowLeft, Shield, Mail } from 'lucide-react';

const PaymentSuccess: React.FC = () => {
  // For demo purposes only - in a real app, this would be passed via props or state
  const selectedPlan = 'premium';

  // Example transaction data that would normally come from a payment processor
  const transactionData = {
    id: 'TXN123456789',
    date: 'April 8, 2025',
    amount: selectedPlan === 'premium' ? '$19.99' : '$9.99',
    paymentMethod: 'Credit Card (**** 1234)',
    plan: 'Premium Plan'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-lg relative z-10">
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-green-100 p-2 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-dark">
          Payment Successful!
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w-md mx-auto">
          Thank you for your purchase. You now have access to the content.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg relative z-10">
        <div className="bg-white py-8 px-4 shadow-xl shadow-gray-200/60 sm:rounded-xl sm:px-10 relative overflow-hidden">
          <div className="space-y-6">
            {/* Transaction details */}
            <div>
              <h3 className="text-lg font-medium text-dark flex items-center">
                <Shield className="h-5 w-5 text-primary mr-2" />
                Receipt Details
              </h3>
              <div className="mt-4 bg-gray-50 p-4 rounded-md border border-gray-200">
                <dl className="divide-y divide-gray-200">
                  <div className="py-3 flex justify-between text-sm">
                    <dt className="text-gray-500">Transaction ID</dt>
                    <dd className="text-gray-900 font-medium">{transactionData.id}</dd>
                  </div>
                  <div className="py-3 flex justify-between text-sm">
                    <dt className="text-gray-500">Date</dt>
                    <dd className="text-gray-900 font-medium">{transactionData.date}</dd>
                  </div>
                  <div className="py-3 flex justify-between text-sm">
                    <dt className="text-gray-500">Plan</dt>
                    <dd className="text-gray-900 font-medium">{transactionData.plan}</dd>
                  </div>
                  <div className="py-3 flex justify-between text-sm">
                    <dt className="text-gray-500">Amount</dt>
                    <dd className="text-gray-900 font-medium">{transactionData.amount}</dd>
                  </div>
                  <div className="py-3 flex justify-between text-sm">
                    <dt className="text-gray-500">Payment Method</dt>
                    <dd className="text-gray-900 font-medium">{transactionData.paymentMethod}</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Access information */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-dark mb-4">What's Next?</h3>
              <div className="bg-green-50 border border-green-100 rounded-md p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">Account activated successfully</h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>Your {selectedPlan === 'premium' ? 'premium subscription' : 'access'} has been activated. You can now access all {selectedPlan === 'premium' ? 'premium' : ''} content.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <button
                  type="button"
                  className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Access Content Now
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                  >
                    <Download className="h-5 w-5 mr-2 text-gray-500" />
                    Download Receipt
                  </button>
                  <button
                    type="button"
                    className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2 text-gray-500" />
                    Email Receipt
                  </button>
                </div>
              </div>
            </div>

            {/* Help text */}
            <div className="text-center text-xs text-gray-500 pt-6 border-t border-gray-200">
              <p>A copy of this receipt has been sent to your email address. Please check your spam folder if you don't see it.</p>
              <p className="mt-2">
                If you have any questions, please <a href="#" className="text-primary hover:text-primary-700">contact our support team</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="/" 
            className="flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </a>
          <a 
            href="/dashboard" 
            className="flex items-center justify-center text-sm font-medium text-primary hover:text-primary-700"
          >
            Go to Your Dashboard 
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
