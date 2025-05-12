import React from 'react';
import { Upload, DollarSign, CheckCircle } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, step }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
          {icon}
        </div>
        <div className="absolute top-0 -left-2 w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full text-white flex items-center justify-center text-sm font-bold">
          {step}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};


const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Upload size={32} />,
      title: "Upload Your Licenses",
      description: "Tell us about your software licenses through our secure portal. We handle all major software vendors.",
      step: 1
    },
    {
      icon: <DollarSign size={32} />,
      title: "Get a Valuation",
      description: "Our experts analyze the market and provide you with a competitive quote within one business day.",
      step: 2
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Get Paid",
      description: "Accept our offer and receive payment promptly. We handle all the transfer paperwork and compliance.",
      step: 3
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our process is simple, transparent, and designed to get you the best value for your software licenses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="transform transition-all duration-300 hover:scale-105 animate-fade-up animate-once animate-duration-700 animate-delay-[150ms]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl p-6 transition-all duration-300">
                <Step
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  step={step.step}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default HowItWorks;