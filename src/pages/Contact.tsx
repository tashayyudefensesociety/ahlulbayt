
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MessageBanner from '../components/MessageBanner';

const Contact = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f0e0'}}>
      <Header />
      <Navigation />
      <MessageBanner />
      
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-green-900 mb-6">Contact Us</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We welcome sincere inquiries, questions, and scholarly discussions. Please reach out to us through the appropriate channels based on your needs.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">General Inquiries</h2>
            <p className="text-gray-700 mb-4">
              For general questions about our website, articles, or resources, please use our contact form or email us directly.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Scholarly Questions</h2>
            <p className="text-gray-700 mb-4">
              If you have specific theological or jurisprudential questions, please submit them through our Questions section for review by qualified scholars.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Support Our Mission</h2>
            <p className="text-gray-700 mb-4">
              The Tashayyu Defense Society relies on community support to continue our educational mission. Your contributions help us maintain our resources and expand our outreach.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Guidelines for Contact</h3>
              <p className="text-blue-700">
                "Please ensure all communications are respectful and constructive. We encourage sincere dialogue while maintaining Islamic etiquette in all interactions."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
