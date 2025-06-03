
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MessageBanner from '../components/MessageBanner';

const Scholars = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f0e0'}}>
      <Header />
      <Navigation />
      <MessageBanner />
      
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-green-900 mb-6">Shia Scholars Throughout History</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The rich tradition of Shia scholarship spans over fourteen centuries, producing luminaries who preserved and transmitted authentic Islamic knowledge through their scholarly works and teachings.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">The Twelve Imams</h2>
            <p className="text-gray-700 mb-4">
              The foundation of Shia scholarship begins with the Twelve Imams, starting with Imam Ali (AS) and culminating with Imam Mahdi (AS). Each Imam contributed invaluable knowledge to Islamic jurisprudence, theology, and spiritual guidance.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Classical Era Scholars</h2>
            <p className="text-gray-700 mb-4">
              During the classical period, scholars like Sheikh al-Mufid, Sheikh al-Tusi, and Allamah al-Hilli established the foundational texts of Shia jurisprudence and theology. Their works remain authoritative sources for Islamic law and doctrine.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Modern Scholarship</h2>
            <p className="text-gray-700 mb-4">
              Contemporary Shia scholars continue this tradition, addressing modern challenges while maintaining adherence to authentic Islamic principles. Figures like Ayatollah al-Khoei, Ayatollah al-Sistani, and others have guided the global Shia community through their scholarly works and religious edicts.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">Scholarly Tradition</h3>
              <p className="text-yellow-700">
                "The continuous chain of Shia scholarship ensures the preservation of authentic Islamic teachings from the Prophet and his household to the present day."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Scholars;
