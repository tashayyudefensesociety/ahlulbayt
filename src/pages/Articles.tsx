
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MessageBanner from '../components/MessageBanner';

const Articles = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f0e0'}}>
      <Header />
      <Navigation />
      <MessageBanner />
      
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-green-900 mb-6">Scholarly Articles</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our comprehensive collection of scholarly articles addresses theological, historical, and jurisprudential aspects of Shia Islam, providing evidence-based responses to contemporary questions and challenges.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Featured Categories</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Theological Studies</h3>
                <p className="text-gray-700">In-depth analysis of Shia doctrine, Imamate, and comparative theology with other Islamic schools of thought.</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold text-yellow-800 mb-2">Historical Research</h3>
                <p className="text-gray-700">Documented historical analysis of early Islamic events and the development of Shia communities.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Jurisprudential Analysis</h3>
                <p className="text-gray-700">Examination of Islamic law from the Shia perspective, including contemporary applications.</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">Refutations & Responses</h3>
                <p className="text-gray-700">Scholarly responses to misconceptions and criticisms, backed by authentic sources.</p>
              </div>
            </div>
            
            <p className="text-gray-700">
              Each article is thoroughly researched and reviewed by qualified scholars to ensure accuracy and authenticity. We encourage readers to verify all references and engage in constructive scholarly dialogue.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Articles;
