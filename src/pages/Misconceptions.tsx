
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MessageBanner from '../components/MessageBanner';

const Misconceptions = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f0e0'}}>
      <Header />
      <Navigation />
      <MessageBanner />
      
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-green-900 mb-6">Addressing Common Misconceptions</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Throughout history, various misconceptions about Shia Islam have been propagated. This section aims to clarify these misunderstandings with scholarly evidence and authentic sources.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Misconception: Tahreef (Textual Corruption) of the Quran</h2>
            <p className="text-gray-700 mb-4">
              <strong>Reality:</strong> Mainstream Shia scholarship unanimously affirms the preservation and authenticity of the Quran. The Imams themselves were the greatest defenders of the Quranic text, and any isolated opinions to the contrary do not represent Shia doctrine.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Misconception: Worship of Ali (AS)</h2>
            <p className="text-gray-700 mb-4">
              <strong>Reality:</strong> Shia Muslims worship Allah alone and consider such claims as baseless slander. Respect and love for Imam Ali (AS) stems from his position as the divinely appointed successor to the Prophet, not as an object of worship.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Misconception: Rejection of the First Three Caliphs</h2>
            <p className="text-gray-700 mb-4">
              <strong>Reality:</strong> While Shia Muslims believe Ali (AS) was the rightful immediate successor, this belief is based on scriptural evidence and prophetic designation, not mere political preference.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Scholarly Approach</h3>
              <p className="text-blue-700">
                "Truth requires evidence. We invite sincere seekers to examine authentic sources rather than relying on polemical literature designed to distort Shia beliefs."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Misconceptions;
