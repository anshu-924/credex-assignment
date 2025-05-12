import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import './App.css';

function App() {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('[data-aos]');
      const triggerPoint = window.innerHeight * 0.8;

      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < triggerPoint) {
          element.classList.add('aos-animate');
        }
      });
    };

    window.addEventListener('scroll', animateElements);
    setTimeout(animateElements, 100);

    return () => window.removeEventListener('scroll', animateElements);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;