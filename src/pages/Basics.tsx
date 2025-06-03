
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Basics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <Navigation />
      
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Basics of Tashayyu</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-4">
              Understanding the fundamental principles and beliefs of Shia Islam.
            </p>
            <p>This section will contain comprehensive information about the basic tenets of Tashayyu...</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Basics;
