
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MessageBanner from '../components/MessageBanner';

const AnsweringSunnis = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f0e0'}}>
      <Header />
      <Navigation />
      <MessageBanner />
      
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-green-900 mb-6">Scholarly Responses to Sunni Critiques</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              This section provides thoughtful, evidence-based responses to questions and criticisms raised by our Sunni brothers and sisters, fostering understanding through scholarly dialogue and authentic sources.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Methodology of Response</h2>
            <p className="text-gray-700 mb-4">
              Our responses rely primarily on sources accepted by Sunni scholarship, including Sahih Bukhari, Sahih Muslim, and other authenticated hadith collections. This approach demonstrates that many Shia positions have strong foundations in mainstream Islamic sources.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Common Topics Addressed</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>The designation of Ali (AS) at Ghadir Khumm</li>
              <li>The concept of Imamate and divine appointment</li>
              <li>Shia practices and their Quranic foundations</li>
              <li>Historical events and their interpretations</li>
              <li>Jurisprudential differences and their origins</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Spirit of Dialogue</h2>
            <p className="text-gray-700 mb-4">
              While we defend our positions with scholarly rigor, we maintain respect for sincere seekers of truth among all Muslims. Our goal is not polemical victory but the clarification of authentic Islamic teachings.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Invitation to Study</h3>
              <p className="text-green-700">
                "We invite our Sunni brothers to study these responses with open hearts and minds, examining the evidence we present from sources they themselves consider authentic."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnsweringSunnis;
