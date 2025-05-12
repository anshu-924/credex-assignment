import React from 'react';
import { DollarSign, Shield, Clock, Award } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <DollarSign size={24} />,
      title: "Best Market Rates",
      description: "Our vast network of buyers ensures you get top dollar for your unused licenses. We regularly beat competitor offers."
    },
    {
      icon: <Shield size={24} />,
      title: "Secure Transactions",
      description: "End-to-end encryption and compliance with all software transfer regulations. Your data is always protected."
    },
    {
      icon: <Clock size={24} />,
      title: "Fast Process",
      description: "From submission to payment in as little as 48 hours. Our streamlined process saves you time and resources."
    },
    {
      icon: <Award size={24} />,
      title: "Expert Team",
      description: "Our licensing specialists have 15+ years of experience with all major software vendors and complex licensing models."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Us</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            SoftSell offers a unique set of advantages for businesses looking to optimize their software investments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title}>
              <Feature
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;