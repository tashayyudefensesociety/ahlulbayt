
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const History = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <Navigation />
      
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">History of Tashayyu</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-4">
              Discover the rich historical development of Shia Islam from its origins to the present day.
            </p>
            <p>This section will chronicle the historical evolution of Shia thought and practice...</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default History;
