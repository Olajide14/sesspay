import React, { useState } from 'react';
import { 
  Rocket, 
  Lock, 
  Check, 
  CreditCard, 
  Shield, 
  Clock, 
  LifeBuoy, 
  Eye, 
  X,
  ChevronDown,
  Info
} from 'lucide-react';

const PaywallScreen: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'basic'|'premium'>('premium');
  const [paymentMethod, setPaymentMethod] = useState<'card'|'paypal'>('card');
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      {/* Content preview (simulated blurred background) */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-10 blur-sm flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="Blurred content preview"
          className="min-h-full min-w-full object-cover"
        />
      </div>

      {/* Main content */}
      <div className="sm:mx-auto sm:w-full sm:max-w-lg relative z-10">
        <div className="flex justify-center">
          <div className="h-14 w-14 rounded-full bg-primary-100 p-2 flex items-center justify-center">
            <Lock className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-dark">
          Premium Content
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w-md mx-auto">
          This content is exclusive to paid subscribers. Select a plan below to continue.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl relative z-10">
        <div className="bg-white py-8 px-4 shadow-xl shadow-gray-200/60 sm:rounded-xl sm:px-10 relative overflow-hidden">
          {/* Plan selection */}
          <div className="mb-8">
            <div className="flex bg-gray-100 p-1 rounded-lg w-full">
              <button
                onClick={() => setSelectedPlan('basic')}
                className={`w-1/2 py-2 text-sm font-medium rounded-md transition-colors relative ${
                  selectedPlan === 'basic' 
                    ? 'text-white' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {selectedPlan === 'basic' && (
                  <div className="absolute inset-0 bg-primary rounded-md"></div>
                )}
                <span className="relative">Basic Access</span>
              </button>
              <button
                onClick={() => setSelectedPlan('premium')}
                className={`w-1/2 py-2 text-sm font-medium rounded-md transition-colors relative ${
                  selectedPlan === 'premium' 
                    ? 'text-white' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {selectedPlan === 'premium' && (
                  <div className="absolute inset-0 bg-primary rounded-md"></div>
                )}
                <span className="relative">Premium Access</span>
              </button>
            </div>
          </div>

          {/* Package details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-dark">
                  {selectedPlan === 'premium' ? 'Premium Package' : 'Basic Package'}
                </h3>
                <div className={`${
                  selectedPlan === 'premium' ? 'bg-primary' : 'bg-secondary'
                } text-white text-xs px-3 py-1 rounded-full`}>
                  {selectedPlan === 'premium' ? 'MOST POPULAR' : 'STARTER'}
                </div>
              </div>
              <div className="mt-4 flex justify-between items-baseline">
                <div>
                  <span className="text-3xl font-extrabold text-dark">
                    ${selectedPlan === 'premium' ? '19.99' : '9.99'}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">
                    {selectedPlan === 'premium' ? '/month' : '/one-time'}
                  </span>
                </div>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-primary hover:text-primary-700 text-sm flex items-center"
                >
                  {showDetails ? (
                    <>
                      <X className="h-4 w-4 mr-1" />
                      Hide details
                    </>
                  ) : (
                    <>
                      <Info className="h-4 w-4 mr-1" />
                      Show details
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Plan details accordion */}
            {showDetails && (
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-3 text-sm animated-fade-in">
                <p className="text-gray-700">
                  {selectedPlan === 'premium' 
                    ? 'The Premium plan includes unlimited access to all content with advanced features and priority support.'
                    : 'The Basic plan provides essential access to content with standard features.'}
                </p>
                <div className="pt-2 border-t border-gray-200">
                  <h4 className="font-medium text-dark mb-2">Payment Schedule</h4>
                  <p className="text-gray-600">
                    {selectedPlan === 'premium' 
                      ? 'You will be charged $19.99 today and then $19.99 on a monthly basis. Cancel anytime.'
                      : 'One-time payment of $9.99 with no recurring charges.'}
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <h4 className="font-medium text-dark mb-2">Refund Policy</h4>
                  <p className="text-gray-600">
                    {selectedPlan === 'premium' 
                      ? '7-day money-back guarantee if you are not satisfied.'
                      : 'No refunds available for one-time purchases.'}
                  </p>
                </div>
              </div>
            )}

            {/* Feature list */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-dark flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                What's included:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <p className="ml-3 text-sm text-gray-700">
                    <span className="font-medium text-dark">Full content access</span>
                    <span className="block text-gray-500">
                      Access all {selectedPlan === 'premium' ? 'premium and standard' : 'standard'} content
                    </span>
                  </p>
                </li>
                
                {selectedPlan === 'premium' ? (
                  <>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <p className="ml-3 text-sm text-gray-700">
                        <span className="font-medium text-dark">Unlimited downloads</span>
                        <span className="block text-gray-500">
                          Download all resources without limits
                        </span>
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <p className="ml-3 text-sm text-gray-700">
                        <span className="font-medium text-dark">Priority support</span>
                        <span className="block text-gray-500">
                          Get faster responses to your questions
                        </span>
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <p className="ml-3 text-sm text-gray-700">
                        <span className="font-medium text-dark">Ad-free experience</span>
                        <span className="block text-gray-500">
                          Enjoy content without advertisements
                        </span>
                      </p>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <p className="ml-3 text-sm text-gray-700">
                        <span className="font-medium text-dark">Limited downloads</span>
                        <span className="block text-gray-500">
                          Download up to 5 resources per month
                        </span>
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <p className="ml-3 text-sm text-gray-700">
                        <span className="font-medium text-dark">Community support</span>
                        <span className="block text-gray-500">
                          Access to community forums and FAQs
                        </span>
                      </p>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Payment method selection */}
            <div className="pt-6 border-t border-gray-200">
              <h4 className="text-sm font-medium text-dark mb-4">Payment method</h4>
              <div className="space-y-3">
                <div 
                  onClick={() => setPaymentMethod('card')}
                  className={`flex items-center border rounded-md p-3 cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'border-primary bg-primary-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    checked={paymentMethod === 'card'}
                    readOnly
                    className="h-4 w-4 text-primary focus:ring-primary-500 border-gray-300"
                  />
                  <div className="ml-3 flex-1">
                    <label className="text-sm font-medium text-dark">Credit/Debit Card</label>
                    <div className="flex mt-1">
                      <img 
                        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visa.svg" 
                        alt="Visa" 
                        className="h-5 w-8 mr-1 opacity-70" 
                      />
                      <img 
                        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mastercard.svg" 
                        alt="Mastercard" 
                        className="h-5 w-8 mr-1 opacity-70" 
                      />
                      <img 
                        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/americanexpress.svg" 
                        alt="Amex" 
                        className="h-5 w-8 opacity-70" 
                      />
                    </div>
                  </div>
                </div>
                
                <div 
                  onClick={() => setPaymentMethod('paypal')}
                  className={`flex items-center border rounded-md p-3 cursor-pointer ${
                    paymentMethod === 'paypal'
                      ? 'border-primary bg-primary-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    checked={paymentMethod === 'paypal'}
                    readOnly
                    className="h-4 w-4 text-primary focus:ring-primary-500 border-gray-300"
                  />
                  <div className="ml-3 flex-1">
                    <label className="text-sm font-medium text-dark">PayPal</label>
                    <p className="text-xs text-gray-500 mt-1">
                      Pay securely using your PayPal account
                    </p>
                  </div>
                  <img 
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/paypal.svg" 
                    alt="PayPal" 
                    className="h-6 w-8 opacity-70"
                  />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                type="button"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
              >
                {selectedPlan === 'premium' ? 'Subscribe Now' : 'Pay Now'} - ${selectedPlan === 'premium' ? '19.99' : '9.99'}
              </button>
              
              <div className="mt-4 text-center text-xs text-gray-500 flex justify-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Secure payment processing by Stripe</span>
              </div>
            </div>
            
            {/* Additional info */}
            <div className="text-center text-xs text-gray-500 flex flex-col items-center space-y-2 pt-4">
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span>
                  {selectedPlan === 'premium' 
                    ? 'Cancel subscription anytime' 
                    : 'Lifetime access'}
                </span>
              </div>
              <div className="flex items-center">
                <LifeBuoy className="h-3 w-3 mr-1" />
                <span>Need help? <a href="#" className="text-primary hover:text-primary-700">Contact support</a></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>
            Already purchased? <a href="/login" className="text-primary hover:text-primary-700 font-medium">Sign in here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaywallScreen;
