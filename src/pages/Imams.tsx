
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MessageBanner from '../components/MessageBanner';

const Imams = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f0e0'}}>
      <Header />
      <Navigation />
      <MessageBanner />
      
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-green-900 mb-6">The Twelve Imams</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Twelve Imams represent the divinely appointed successors to Prophet Muhammad (PBUH), each serving as spiritual and temporal guides for the Muslim community through their teachings, character, and sacrifices.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">The First Imam: Ali ibn Abi Talib (AS)</h2>
            <p className="text-gray-700 mb-4">
              Known as the "Gate of Knowledge," Imam Ali (AS) was the Prophet's cousin, son-in-law, and the first male to accept Islam. His knowledge, courage, and justice made him the natural successor to lead the Muslim community.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">The Second Imam: Hasan ibn Ali (AS)</h2>
            <p className="text-gray-700 mb-4">
              The elder grandson of the Prophet, Imam Hasan (AS) chose peace over bloodshed when faced with internal Muslim conflicts, demonstrating wisdom and the preservation of Islamic unity.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">The Third Imam: Husayn ibn Ali (AS)</h2>
            <p className="text-gray-700 mb-4">
              The "Master of Martyrs," Imam Husayn (AS) sacrificed his life at Karbala to preserve authentic Islam from corruption, establishing an eternal paradigm of resistance against tyranny and injustice.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">The Continuing Line</h2>
            <p className="text-gray-700 mb-4">
              The subsequent nine Imams continued this divine mission, each contributing unique knowledge and guidance to preserve Islamic teachings through various historical challenges and political pressures.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Divine Guidance</h3>
              <p className="text-green-700">
                "The Twelve Imams serve as the continuing link between the divine message and humanity, preserving the authentic teachings of Islam for all generations."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Imams;
