
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MessageBanner from '../components/MessageBanner';

const History = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f0e0'}}>
      <Header />
      <Navigation />
      <MessageBanner />
      
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-green-900 mb-6">History of Tashayyu</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The history of Shia Islam begins with the Prophet Muhammad (PBUH) himself and continues through a rich tapestry of spiritual, intellectual, and political developments that have shaped the Muslim world.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">The Foundation Period</h2>
            <p className="text-gray-700 mb-4">
              The roots of Tashayyu trace back to the Prophet's explicit designation of Ali ibn Abi Talib as his successor at Ghadir Khumm. This event, documented in numerous authentic sources, established the principle of divine appointment for leadership of the Muslim community.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">The Tragedy of Karbala</h2>
            <p className="text-gray-700 mb-4">
              The martyrdom of Imam Husayn (AS) at Karbala in 680 CE represents a pivotal moment in Islamic history. This sacrifice preserved the authentic teachings of Islam against corruption and tyranny, establishing principles of justice and resistance against oppression.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Development of Shia Thought</h2>
            <p className="text-gray-700 mb-4">
              Through the teachings of the subsequent Imams, Shia Islamic jurisprudence, theology, and philosophy developed into a comprehensive system. Centers of learning in Najaf, Qum, and other cities became beacons of Islamic scholarship.
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mt-6">
              <h3 className="text-xl font-semibold text-red-800 mb-2">Historical Lesson</h3>
              <p className="text-red-700">
                "The history of Tashayyu demonstrates the continuous struggle to preserve authentic Islam against political manipulation and doctrinal corruption."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default History;
