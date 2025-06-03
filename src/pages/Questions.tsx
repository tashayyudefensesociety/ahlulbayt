
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Questions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <Navigation />
      
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Questions & Answers</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-4">
              Find answers to frequently asked questions about Shia Islam.
            </p>
            <p>This section will contain a comprehensive Q&A database...</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Questions;
