
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MessageBanner from '../components/MessageBanner';

const Basics = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f5f0e0'}}>
      <Header />
      <Navigation />
      <MessageBanner />
      
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-green-900 mb-6">Basics of Tashayyu</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Understanding the fundamental principles and beliefs of Shia Islam (Tashayyu) is essential for grasping the authentic teachings of Islam as practiced by the followers of Ahlul Bayt.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">The Five Pillars of Islam</h2>
            <p className="text-gray-700 mb-4">
              Like all Muslims, Shia Muslims adhere to the five fundamental pillars of Islam: Shahada (declaration of faith), Salah (prayer), Zakat (charity), Sawm (fasting during Ramadan), and Hajj (pilgrimage to Mecca).
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">The Concept of Imamate</h2>
            <p className="text-gray-700 mb-4">
              Central to Shia belief is the concept of Imamate - the divine appointment of spiritual and temporal leaders after Prophet Muhammad (PBUH). The Twelve Imams, beginning with Ali ibn Abi Talib, were divinely chosen to guide the Muslim community.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Sources of Islamic Law</h2>
            <p className="text-gray-700 mb-4">
              Shia Muslims derive Islamic law from four primary sources: the Quran, the Sunnah of Prophet Muhammad (PBUH), the teachings of the Imams, and rational reasoning (Aql). This comprehensive approach ensures authenticity in religious practice.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Key Principle</h3>
              <p className="text-green-700">
                "Tashayyu represents the original and authentic form of Islam, preserving the true teachings of Prophet Muhammad (PBUH) through the divinely appointed Imams of Ahlul Bayt."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Basics;
