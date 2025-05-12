import React from 'react';
import { ArrowRight, Shield, DollarSign, RefreshCw } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-teal-300 dark:bg-teal-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight animate-fadeIn">
          Transform Unused Software Licenses into Cash
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fadeIn">
          Quickly sell your excess software licenses with our secure, streamlined marketplace. Get instant valuations and fast payouts.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fadeIn">
          <button
            onClick={scrollToContact}
            className="group bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center"
          >
            Sell My Licenses
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button
            onClick={scrollToContact}
            className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 font-medium py-3 px-8 rounded-full transition-transform transform hover:scale-105"
          >
            Get a Quote
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fadeIn">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <Shield className="mx-auto text-blue-600 mb-3" size={36} />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Secure</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Trusted transactions</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <DollarSign className="mx-auto text-green-600 mb-3" size={36} />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Instant</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Quick valuations</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <RefreshCw className="mx-auto text-purple-600 mb-3" size={36} />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Flexible</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Multiple license types</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
