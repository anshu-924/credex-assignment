import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, company }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="flex justify-start mb-4">
        <Quote size={32} className="text-blue-500 dark:text-blue-400" />
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">
        {quote}
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
          <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "SoftSell helped us recover over $45,000 from unused enterprise licenses. The process was painless and much faster than I expected. Their valuation was spot on.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechNova Solutions"
    },
    {
      quote: "We were skeptical about software license resale, but SoftSell made it simple and secure. Their team handled all the compliance details, and we received payment within 3 days.",
      name: "Michael Chen",
      role: "IT Director",
      company: "Global Innovations Inc."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with SoftSell.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name}>
              <Testimonial
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;